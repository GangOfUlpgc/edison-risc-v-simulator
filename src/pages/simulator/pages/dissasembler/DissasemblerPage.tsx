import React from "react";
import { useCPUMem, useCPUState } from "../../../../storage/cpu.storage";

export default function DissasemblerPage() {
  const rom = useCPUMem();
  const state = useCPUState();
  return (
    <div>
      <pre>{JSON.stringify(rom)}</pre>
      <pre>{JSON.stringify(state)}</pre>
    </div>
  );
}
