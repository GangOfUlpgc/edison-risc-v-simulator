import Adder from "./Adder";
import Alu from "./Alu";
import AluControl from "./AluControl";
import Branch from "./Branch";
import BufferExMem from "./BufferExMem";
import BufferIdEx from "./BufferIdEx";
import BufferMemWb from "./BufferMemWb";
import BufferRegs from "./BufferRegs";
import ControlUnit from "./ControlUnit";
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
  bufferidex: BufferIdEx,
  bufferexmem: BufferExMem,
  buffermemwb: BufferMemWb,
  controlUnit: ControlUnit,
  aluControl: AluControl,
  branch: Branch,
  bufferregs: BufferRegs,
};

export { Adder, Alu, DataMem, Multiplexor, PC, Registers, DatapathNodes };
