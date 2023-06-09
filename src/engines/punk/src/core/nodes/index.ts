import Adder from "./Adder";
import Alu from "./Alu";
import DataMem from "./DataMem";
import Multiplexor from "./Multiplexor";
import PC from "./PC";
import Registers from "./Registers";

const DatapathNodes = {
  adder: Adder,
  alu: Alu,
  datamem: DataMem,
  mux: Multiplexor,
  pc: PC,
  registers: Registers,
};

export { Adder, Alu, DataMem, Multiplexor, PC, Registers, DatapathNodes };
