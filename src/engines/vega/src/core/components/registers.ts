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
    if (addr % 4 !== 0) throw new Error(`Invalid register address: ${addr}`);
    return CPUMem.getState().registers[addr];
  }

  write(addr: number, value: number) {
    if (addr % 4 !== 0) throw new Error(`Invalid register address: ${addr}`);
    CPUMem.setState((state) => ({
      registers: {
        ...state.registers,
        [addr]: value,
      },
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
