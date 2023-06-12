import { create } from "zustand";
import {
  ALU,
  ControlUnit,
  RAM,
  ROM,
  RegisterBank,
  CPUStateManager,
  PCRegister,
} from "./components";
import { CPUState, CPUMem } from "./storage";
import { Assambler } from "./assambler";
import {
  EncodedInstruction,
  EncodedInstructionMeta,
} from "@vega/types/assambler";
import { State } from "xstate";
import { ControlUnitSignals } from "@vega/types/controlUnit";
import { AluControlUnit } from "./components/aluControlUnit";

/**
 * Vega engine
 *
 * This is the main class of the Vega engine. Vega is a RISCV emulator written in TypeScript.
 * It implements the RISCV32I instruction set and can be used to run RISCV32I binaries.
 *
 * @module Vega
 * @class Vega
 * @constructor
 *
 * @example
 *
 */
export default class Vega {
  rom = new ROM();
  ram = new RAM();
  alu = new ALU();
  registers = new RegisterBank();
  pc = new PCRegister();
  manager = new CPUStateManager();
  controlUnit = new ControlUnit();
  aluControlUnit = new AluControlUnit();
  assambler = new Assambler();

  loadProgram(program: string) {
    console.log(program);
    const decoded = this.assambler.decode(program);
    console.log(program);
    this.loadRom(decoded);
  }

  loadRom(rom: EncodedInstruction[]) {
    console.log(rom);
    this.rom.loadProgram(rom);
  }

  next() {
    this.fetch();
    this.decode();
    this.execute();
    this.mem();
    this.writeback();
  }

  reload() {
    this.pc.write(0);
    this.manager.reset();
    this.rom.reset();
  }

  fetch() {
    const exmem = CPUState.getState().pipeline.MEM;
    if ((exmem.cumeta?.Branch ?? 0) === 1 && exmem.cpumeta.ALUOut === 0) {
      this.pc.write(exmem.cpumeta.jumpDir ?? 0);
    }
    const instruction = this.rom.read(this.pc.read());
    const val = instruction?.value ?? 0;
    this.manager.nextStep(
      val.toString(16).padStart(8, "0"),
      instruction?.meta ?? {},
      this.pc.read() ?? 0
    );
    this.pc.plus4();
  }

  decode() {
    //DECODIFICAR LA INSTRUCCION Y GUARDARLA
    const meta = CPUState.getState().pipeline.ID;
    console.log(meta);

    const rs1 = meta.imeta.rs ?? 0;
    const rs2 = meta.imeta.rt ?? 0;
    const inmm = 0;

    const val1 = this.registers.read(rs1);
    const val2 = this.registers.read(rs2);

    let cusignals: ControlUnitSignals;

    try {
      cusignals = this.controlUnit.generateSignals(meta.imeta);
    } catch {
      console.log("there are no meta");
    }

    this.manager.setState((state) => ({
      pipeline: {
        ...state.pipeline,
        ID: {
          ...state.pipeline.ID,
          cumeta: cusignals,
          cpumeta: {
            ...state.pipeline.ID.cpumeta,
            rs1: rs1,
            rs2: rs2,
            rs1Value: val1,
            rs2Value: val2,
            inmm: inmm,
          },
        },
      },
    }));
  }

  execute() {
    const pipe = CPUState.getState().pipeline.EX;

    const aluCtrl = this.aluControlUnit.getAluOp(
      pipe?.imeta?.type ?? "",
      pipe.cumeta?.ALUop ?? 0
    );

    let B = 0;

    if ((pipe.cumeta?.ALUsrc ?? 0) == 0) {
      B = pipe.cpumeta?.rs2Value ?? 0;
    } else {
      B = pipe.cpumeta.inmm ?? 0;
    }

    const ALUOut = this.alu.next({
      A: pipe.cpumeta?.rs1Value ?? 0,
      B,
      op: aluCtrl ?? 0,
    });

    const jumpDir = (pipe.cpumeta?.pc ?? 0) + (pipe.cpumeta.inmm ?? 0) * 2;

    this.manager.setState((state) => ({
      pipeline: {
        ...state.pipeline,
        EX: {
          ...state.pipeline.EX,
          cpumeta: {
            ...state.pipeline.EX.cpumeta,
            aluCtrl: aluCtrl,
            ALUOut,
            jumpDir,
          },
        },
      },
    }));
  }

  mem() {
    const pipe = CPUState.getState().pipeline.MEM;
    let readedData = 0;

    if (pipe.cumeta?.MemRead) {
      readedData = this.ram.read(pipe.cpumeta.ALUOut ?? 0);
    }

    if (pipe.cumeta?.MemWrite) {
      this.ram.write(pipe.cpumeta.ALUOut ?? 0, pipe.cpumeta.rs2Value ?? 0);
    }

    this.manager.setState((state) => ({
      pipeline: {
        ...state.pipeline,
        MEM: {
          ...state.pipeline.MEM,
          cpumeta: {
            ...state.pipeline.MEM.cpumeta,
            WriteData: pipe.cpumeta.rs2Value ?? 0,
            ReadData: readedData,
          },
        },
      },
    }));
  }

  writeback() {
    const pipe = CPUState.getState().pipeline.WB;
    let writeData = 0;

    if (pipe.cumeta.RegWrite) {
      console.log("MEMTOREG: ", pipe.cumeta.MemToReg);
      writeData =
        ((pipe.cumeta.MemToReg ?? 0) == 0
          ? pipe.cpumeta.ALUOut
          : pipe.cpumeta.ReadData) ?? 0;
      this.registers.write(pipe.imeta?.rd ?? 0, writeData);
    }

    this.manager.setState((state) => ({
      pipeline: {
        ...state.pipeline,
        WB: {
          ...state.pipeline.WB,
          cpumeta: {
            ...state.pipeline.WB.cpumeta,
            WriteRegister: writeData,
          },
        },
      },
    }));
  }

  get useMem() {
    return create(CPUMem);
  }

  get useState() {
    return create(CPUState);
  }
}
