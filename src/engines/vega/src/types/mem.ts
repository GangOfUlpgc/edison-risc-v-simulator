import { EncodedInstruction, EncodedInstructionMeta } from "./assambler";

export type Address = number;

export type Memory = {
  [address: number]: number;
};

export interface MemState {
  pc: number;
  rom: { [dir: number]: { value: number; meta?: EncodedInstructionMeta } };
  ram: { [dir: number]: number };
  registers: [
    number,
    number,
    number,
    number,
    number,
    number,
    number,
    number,
    number,
    number,
    number,
    number,
    number,
    number,
    number,
    number,
    number,
    number,
    number,
    number,
    number,
    number,
    number,
    number,
    number,
    number,
    number,
    number,
    number,
    number,
    number,
    number
  ];
}
