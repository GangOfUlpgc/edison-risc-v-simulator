import { create } from "zustand";
import { CPUMem, CPUState } from "../engines/vega/src/core/state";

export const useCPUState = create(CPUState);
export const useCPUMem = create(CPUMem);
