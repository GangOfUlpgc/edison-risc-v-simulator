export interface ControlUnitSignals {
  // Execute stage
  ALUop: number;
  ALUsrc: number;
  // Memory access stage
  Branch: number;
  MemRead: number;
  MemWrite: number;
  // Write back stage
  RegWrite: number;
  MemToReg: number;
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
