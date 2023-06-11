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
  newInstruction: { value: number; meta?: EncodedInstructionMeta } = {
    value: 0,
    meta: {},
  };
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
    this.writeback();
    this.mem();
    this.execute();
    this.decode();
    this.fetch();
    const val = this.newInstruction?.value | 0;
    this.manager.nextStep(
      val.toString(16).padStart(8, "0"),
      this.newInstruction.meta ?? {}
    );
  }

  reload() {
    this.pc.write(0);
    this.manager.reset();
    this.rom.reset();
  }

  fetch() {
    const instruction = this.rom.read(this.pc.read());
    this.pc.plus4();
    this.newInstruction = instruction;
    this.manager.setState(() => ({
      fetch: {
        instruction: (instruction?.value | 0).toString(16),
      },
    }));
  }

  decode() {
    //DECODIFICAR LA INSTRUCCION Y GUARDARLA

    const rs1 = 0;
    const rs2 = 0;
    const inmm = 0;

    const val1 = this.registers.read(rs1);
    const val2 = this.registers.read(rs2);

    this.manager.setState((state) => ({
      decode: {
        instruction: this.manager.getState().fetch.instruction,
        rs1: rs1,
        rs2: rs2,
        rs1Value: val1,
        rs2Value: val2,
        inmm: inmm,
      },
    }));
  }

  execute() {
    console.log("execute");
  }

  mem() {
    console.log("mem");
  }

  writeback() {
    console.log("writeback");
  }

  get useMem() {
    return create(CPUMem);
  }

  get useState() {
    return create(CPUState);
  }
}
