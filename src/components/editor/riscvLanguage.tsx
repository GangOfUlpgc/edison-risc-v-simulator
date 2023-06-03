import React, { useState, useEffect } from "react";
import Editor, { useMonaco } from "@monaco-editor/react";
import * as monaco from 'monaco-editor/esm/vs/editor/editor.api';
import { useFileStorage } from "../../storage/file.storage";


export function registerLanguage(monaco: any) {
    monaco.languages.register({
      id: "riscv",
    });
  
    monaco.languages.setMonarchTokensProvider("riscv", {
      tokenizer: {
        root: [
          [/add|sub|lw|sw|bq/, "keyword"], // Resaltado de palabras clave
          [/[xf][0-9]+/, "register"], // Resaltado de registros
          [/[a-zA-Z_][a-zA-Z0-9_:]*/, "label"], // Resaltado de etiquetas
        ],
      },
    });
  
    monaco.editor.defineTheme("riscv-theme", {
      base: "vs",
      inherit: true,
      rules: [
        { token: "keyword", foreground: "0000FF" }, // Color para palabras clave
        { token: "register", foreground: "00AA00" }, // Color para registros
        { token: "label", foreground: "FF00FF" }, // Color para etiquetas
      ],
    });
  
    monaco.editor.setTheme("riscv-theme");
  }