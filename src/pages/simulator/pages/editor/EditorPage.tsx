import React from "react";
import Editor, { DiffEditor, useMonaco, loader } from "@monaco-editor/react";
import { Box } from "@chakra-ui/layout";

export default function EditorPage() {
  return (
    <Box py="1rem" height="100%">
      <Editor width="100%" height="100%" language="mips" />
    </Box>
  );
}
