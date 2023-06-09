export interface ControlUnitSignals {
  // Execute stage
  ALUop: string;
  ALUsrc: string;
  // Memory access stage
  Branch: string;
  MemRead: string;
  MemWrite: string;
  // Write back stage
  RegWrite: string;
  RegDst: string;
  MemToReg: string;
}

export interface IControlUnit {
  Branch: string;
  MemRead: string;
  MemToReg: string;
  ALUOp: string;
  MemWrite: string;
  ALUSrc: string;
  RegWrite: string;
  RegDst: string;
}
