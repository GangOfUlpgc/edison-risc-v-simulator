import { Punk } from "@punk/index";
import React from "react";
import { useUI } from "../../../../storage/ui.storage";
import { rv32i } from "../../../../cpus";
import JSONPretty from "react-json-pretty";

export default function DatapathPage() {
  const debug = useUI((state) => state.debug);
  const cpu = rv32i.useState();
  const mem = rv32i.useMem();

  return debug ? (
    <Punk></Punk>
  ) : (
    <div>
      <JSONPretty id="json-pretty" data={cpu}></JSONPretty>
      <JSONPretty id="json-pretty" data={mem}></JSONPretty>
    </div>
  );
}
