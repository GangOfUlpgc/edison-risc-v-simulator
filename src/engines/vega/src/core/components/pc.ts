import { CPUMem } from "../storage/mem";

interface PCNext {
  pc: number;
  pcWrite: number;
}

export class PCRegister {
  read() {
    return CPUMem.getState().pc;
  }

  write(value: number) {
    CPUMem.setState((state) => ({
      pc: value,
    }));
  }

  next({ pc, pcWrite }: PCNext) {
    if (pcWrite) {
      this.write(pc);
    }
    return this.read();
  }

  plus4() {
    this.write(this.read() + 4);
  }
}
