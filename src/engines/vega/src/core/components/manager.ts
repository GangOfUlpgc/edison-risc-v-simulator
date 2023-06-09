import { UICPUState } from "@vega/types/state";
import { CPUState } from "../storage/cpu";

export class CPUStateManager {
  getState() {
    return CPUState.getState();
  }

  get setState() {
    return CPUState.setState;
  }

  reset() {
    CPUState.getState().reset();
  }

  nextStep(instruction: string) {
    CPUState.setState((state) => ({
      pipeline: {
        ...state.pipeline,
        WB: state.pipeline["MEM"],
        MEM: state.pipeline["EX"],
        EX: state.pipeline["ID"],
        ID: state.pipeline["IF"],
        IF: instruction,
      },
    }));
  }
}
