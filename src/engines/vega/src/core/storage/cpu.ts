import { createStore } from "zustand";
import { UICPUState } from "../../types/state";

const initialState = {
  cycles: 0,
  pipeline: {
    IF: {
      instruction: "",
      imeta: {},
      cumeta: {},
      cpumeta: {},
    },
    ID: {
      instruction: "",
      imeta: {},
      cumeta: {},
      cpumeta: {},
    },
    EX: {
      instruction: "",
      imeta: {},
      cumeta: {},
      cpumeta: {},
    },
    MEM: {
      instruction: "",
      imeta: {},
      cumeta: {},
      cpumeta: {},
    },
    WB: {
      instruction: "",
      imeta: {},
      cumeta: {},
      cpumeta: {},
    },
  },
};

export const CPUState = createStore<UICPUState>((set) => ({
  ...initialState,
  setStageValue: (stage: string, key: string, value: string | number) =>
    set({ [stage]: { [key]: value } }),
  reset: () => set(initialState),
}));
