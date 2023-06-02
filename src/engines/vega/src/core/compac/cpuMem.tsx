import { create } from "zustand";
import { RegisterBank } from "../../types/registers";
import { Memory } from "../../types/mem";

interface CPUState {
  registers: RegisterBank;
  memory: Memory;
  setRegister: (register: string, value: number) => void;
  saveWord: (dir: string, value: string) => void;
}

export const useCPUMem = create<CPUState>((set) => ({
  registers: {
    pc: 0,
    x0: 0,
    x1: 0,
    x2: 0,
    x3: 0,
    x4: 0,
    x5: 0,
    x6: 0,
    x7: 0,
    x8: 0,
    x9: 0,
    x10: 0,
    x11: 0,
    x12: 0,
    x13: 0,
    x14: 0,
    x15: 0,
    x16: 0,
    x17: 0,
    x18: 0,
    x19: 0,
    x20: 0,
    x21: 0,
    x22: 0,
    x23: 0,
    x24: 0,
    x25: 0,
    x26: 0,
    x27: 0,
    x28: 0,
    x29: 0,
    x30: 0,
    x31: 0,
  },
  memory: {},
  setRegister: (register: string, value: number) => {
    set((state) => ({
      registers: {
        ...state.registers,
        [register]: value,
      },
    }));
  },
  saveWord: (dir: string, value: string) => {
    set((state) => ({
      memory: {
        ...state.memory,
        [dir]: value,
      },
    }));
  },
}));
