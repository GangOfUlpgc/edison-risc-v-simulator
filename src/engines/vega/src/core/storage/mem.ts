import { createStore } from "zustand";
import { MemState } from "../../types/mem";

const initialState: MemState = {
  pc: 0x0,
  rom: {},
  ram: {},
  registers: [
    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
    0, 0, 0, 0, 0, 0, 0,
  ],
};

export const CPUMem = createStore<MemState & { reset: () => void }>((set) => ({
  ...initialState,
  reset: () => set(initialState),
}));
