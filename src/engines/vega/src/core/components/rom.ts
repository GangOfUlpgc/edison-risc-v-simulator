import {
  EncodedInstruction,
  EncodedInstructionMeta,
} from "@vega/types/assambler";
import { CPUMem } from "../storage/mem";

export class ROM {
  read(addr: number) {
    return CPUMem.getState().rom[addr];
  }

  write(addr: number, value: number, meta?: EncodedInstructionMeta) {
    if (addr % 4 !== 0) throw new Error(`Invalid register address: ${addr}`);
    CPUMem.setState((state) => ({
      rom: {
        ...state.rom,
        [addr]: { value, meta },
      },
    }));
  }
  loadProgram(program: EncodedInstruction[]) {
    console.log(program);
    program.forEach((instruction, index) => {
      this.write(index * 4, instruction.bin, instruction.meta);
    });
  }

  loadBin(program: number[]) {
    program.forEach((instruction, index) => {
      this.write(index * 4, instruction);
    });
  }

  reset() {
    CPUMem.getState().reset();
  }
}
