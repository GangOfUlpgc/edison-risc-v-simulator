export interface UICPUState {
  pipeline: {
    IF: string;
    ID: string;
    EX: string;
    MEM: string;
    WB: string;
  };
  fetch: {
    instruction: string;
  };
  decode: {
    instruction: string;
    rs1: number;
    rs2: number;
    rs1Value: number;
    rs2Value: number;
    inmm: number;
  };
  execute: {
    A: number;
    B: number;
    ALUSrc: number;
    ALUOp: number;
    ALUCtrl: number;
    ALUA: number;
    ALUOut: number;
  };
  mem: {
    ALUOut: number;
    MemWrite: number;
    MemRead: number;
    WriteData: number;
    ReadData: number;
  };
  writeBack: {
    MemToReg: number;
    RegWrite: number;
    WriteData: number;
    WriteRegister: number;
  };
  setStageValue: (stage: string, key: string, value: number | string) => void;
}
