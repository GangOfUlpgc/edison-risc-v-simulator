import { CPUMem } from "../state";

export class ROM {
  read(addr: number) {
    return CPUMem.getState().rom[addr];
  }

  write(addr: number, value: number) {
    if (addr % 4 !== 0) throw new Error(`Invalid register address: ${addr}`);
    CPUMem.setState((state) => ({
      rom: {
        ...state.rom,
        [addr]: value,
      },
    }));
  }

  load(program: number[]) {
    program.forEach((instruction, index) => {
      this.write(index * 4, instruction);
    });
  }
}
