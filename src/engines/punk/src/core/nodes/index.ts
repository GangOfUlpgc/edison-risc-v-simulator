import Adder from "./Adder";
import Alu from "./Alu";
import DataMem from "./DataMem";
import InstructionMemory from "./InstructionMemory";
import Multiplexor from "./Multiplexor";
import PC from "./PC";
import Registers from "./Registers";
import bufferIfId from "./bufferIfId";

const DatapathNodes = {
  adder: Adder,
  alu: Alu,
  datamem: DataMem,
  mux: Multiplexor,
  pc: PC,
  registers: Registers,
  bufferifid: bufferIfId,
  instrMemory: InstructionMemory
};

export { Adder, Alu, DataMem, Multiplexor, PC, Registers, DatapathNodes };
