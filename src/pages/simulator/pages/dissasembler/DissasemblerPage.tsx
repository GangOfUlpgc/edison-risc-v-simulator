import React from "react";
import { useCPUMem, useCPUState } from "../../../../storage/cpu.storage";
import { Box } from "@chakra-ui/layout";

export default function DissasemblerPage() {
  const rom = useCPUMem();
  const state = useCPUState();
  return (
    <div>
      <pre style={{ maxWidth: "100px" }}>{JSON.stringify(rom)}</pre>
      <pre style={{ maxWidth: "100px" }}>{JSON.stringify(state)}</pre>
    </div>
  );
}
