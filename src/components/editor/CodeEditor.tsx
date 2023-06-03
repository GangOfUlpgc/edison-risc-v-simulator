import React, { useState, useEffect } from "react";
import Editor, { useMonaco } from "@monaco-editor/react";
import * as monaco from 'monaco-editor/esm/vs/editor/editor.api';
import { useFileStorage } from "../../storage/file.storage";
import { registerLanguage } from "./riscvLanguage";

export default function CodeEditor() {
  const fileManager = useFileStorage();
  const [text, setText] = useState("");
  const monaco = useMonaco();

  useEffect(() => {
    setText(fileManager.currentFileContents || "");
  }, [fileManager, fileManager.currentFile]);

  useEffect(() => {
    if (monaco) {
      // Registra el idioma RISC-V y sus características de resaltado
      registerLanguage(monaco);
    }
  }, [monaco]);

  return (
    <Editor
      value={text}
      onChange={(content) =>
        fileManager.writeFile(fileManager.currentFile ?? "0", content || "")
      }
      width="100%"
      height="100%"
      language="riscv" // Cambia el valor del lenguaje a "riscv"
    />
  );
}