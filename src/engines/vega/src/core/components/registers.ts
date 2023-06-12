import { regs } from "@vega/types/mem";
import { CPUMem } from "../storage/mem";

interface RegisterNext {
  rsc1: number;
  rsc2: number;
  wr: number;
  wd: number;
  regwrite: number;
}

export class RegisterBank {
  read(addr: number) {
    return CPUMem.getState().registers[addr];
  }

  write(addr: number, value: number) {
    CPUMem.setState((state) => ({
      registers: state.registers.map((v, i) =>
        i === addr ? value : v
      ) as regs,
    }));
  }

  next({ rsc1, rsc2, wr, wd, regwrite }: RegisterNext) {
    if (regwrite) {
      this.write(wr, wd);
    }
    return {
      A: this.read(rsc1),
      B: this.read(rsc2),
    };
  }
}
