import React, { useState, useEffect } from "react";
import Editor, { useMonaco } from "@monaco-editor/react";
import * as monaco from 'monaco-editor/esm/vs/editor/editor.api';
import { useFileStorage } from "../../storage/file.storage";
import { registerLanguage } from "./riscvLanguage";
import CodeMirror from '@uiw/react-codemirror'
import { Box } from "@chakra-ui/react";

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
    <CodeMirror autoFocus={true} theme='light' height='100%'></CodeMirror>
  );
}