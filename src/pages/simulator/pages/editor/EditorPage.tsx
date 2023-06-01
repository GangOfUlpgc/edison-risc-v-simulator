import React from "react";
import Editor, { DiffEditor, useMonaco, loader } from "@monaco-editor/react";
import { Box } from "@chakra-ui/layout";

export default function EditorPage() {
  return (

    <Editor width="100%" height="100%" language="mips" />

  );
}
