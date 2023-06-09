import Adder from "./Adder";
import Alu from "./Alu";
import BufferIdEx from "./BufferIdEx";
import DataMem from "./DataMem";
import InstructionMemory from "./InstructionMemory";
import Multiplexor from "./Multiplexor";
import PC from "./PC";
import Registers from "./Registers";
import BufferIfId from "./bufferIfId";

const DatapathNodes = {
  adder: Adder,
  alu: Alu,
  datamem: DataMem,
  mux: Multiplexor,
  pc: PC,
  registers: Registers,
  instrMemory: InstructionMemory,
  bufferifid: BufferIfId,
  bufferidex: BufferIdEx
};

export { Adder, Alu, DataMem, Multiplexor, PC, Registers, DatapathNodes };
