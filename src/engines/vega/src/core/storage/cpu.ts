import { createStore } from "zustand";
import { UICPUState } from "../../types/state";

const initialState = {
  cycles: 0,
  pipeline: {
    IF: {
      instruction: "",
      imeta: {},
      cumeta: {},
    },
    ID: {
      instruction: "",
      imeta: {},
      cumeta: {},
    },
    EX: {
      instruction: "",
      imeta: {},
      cumeta: {},
    },
    MEM: {
      instruction: "",
      imeta: {},
      cumeta: {},
    },
    WB: {
      instruction: "",
      imeta: {},
      cumeta: {},
    },
  },
  fetch: {
    instruction: "",
  },
  decode: {
    instruction: "",
    rs1: 0b0,
    rs2: 0b0,
    rs1Value: 0b0,
    rs2Value: 0b0,
    inmm: 0b0,
  },
  execute: {
    A: 0b0,
    B: 0b0,
    ALUSrc: 0b0,
    ALUOp: 0b0,
    ALUCtrl: 0b0,
    ALUA: 0b0,
    ALUOut: 0b0,
  },
  mem: {
    ALUOut: 0b0,
    MemWrite: 0b0,
    MemRead: 0b0,
    WriteData: 0b0,
    ReadData: 0b0,
  },
  writeBack: {
    MemToReg: 0b0,
    RegWrite: 0b0,
    WriteData: 0b0,
    WriteRegister: 0b0,
  },
};

export const CPUState = createStore<UICPUState>((set) => ({
  ...initialState,
  setStageValue: (stage: string, key: string, value: string | number) =>
    set({ [stage]: { [key]: value } }),
  reset: () => set(initialState),
}));
