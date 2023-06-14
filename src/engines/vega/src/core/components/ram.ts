import { CPUMem } from "../storage/mem";

interface RAMNext {
  addr: number;
  writeData: number;
  memRead: number;
  memWrite: number;
}

export class RAM {
  read(addr: number) {
    if (addr % 4 !== 0) throw new Error(`Invalid register address: ${addr}`);
    return CPUMem.getState().ram[addr];
  }

  write(addr: number, value: number) {
    if (addr % 4 !== 0) throw new Error(`Invalid register address: ${addr}`);
    console.log(addr);
    CPUMem.setState((state) => ({
      ram: {
        ...state.ram,
        [addr]: value,
      },
    }));
  }

  loadProgram(program: number[]) {
    program.forEach((data, index) => {
      this.write(index * 4, data);
    });
  }

  next({ addr, writeData, memRead, memWrite }: RAMNext) {
    if (memRead) {
      return this.read(addr);
    }
    if (memWrite) {
      this.write(addr, writeData);
    }
    return 0;
  }
}
