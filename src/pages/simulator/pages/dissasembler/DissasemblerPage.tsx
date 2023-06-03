import React from "react";
import { rv32i } from "../../../../cpus/riscv-rv32i";

export default function DissasemblerPage() {
  const rom = rv32i.useMem((state) => state.rom);
  const state = rv32i.useState();
  return (
    <div>
      <pre style={{ maxWidth: "100px" }}>{JSON.stringify(rom)}</pre>
      <pre style={{ maxWidth: "100px" }}>{JSON.stringify(state)}</pre>
    </div>
  );
}
