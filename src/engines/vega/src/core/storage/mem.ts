import { createStore } from "zustand";
import { MemState } from "../../types/mem";

const initialState: MemState = {
  pc: 0x0,
  rom: {
    4: {
      value: 0x00000000,
    },
    8: {
      value: 0x00000000,
    },
  },
  ram: {
    4: 0x00000000,
    8: 0x00000000,
  },
  registers: [
    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
    0, 0, 0, 0, 0, 0, 0,
  ],
};

export const CPUMem = createStore<MemState & { reset: () => void }>((set) => ({
  ...initialState,
  reset: () => set(initialState),
}));
