import React from "react";
import { Box } from "@chakra-ui/layout";
import { useFileStorage } from "../../../../storage/file.storage";
import CodeEditor from "../../../../components/editor/Editor";

export default function EditorPage() {
  const isFileSelected = useFileStorage((state) => state.currentFile);

  if (!isFileSelected) return <Box>Select or create new file</Box>;

  return <CodeEditor></CodeEditor>;
}
