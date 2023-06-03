import { createStore } from "zustand";
import { MemState } from "../../types/mem";

export const CPUMem = createStore<MemState>((set) => ({
  pc: 0x0,
  rom: {},
  ram: {},
  registers: [
    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
    0, 0, 0, 0, 0, 0, 0,
  ],
}));
