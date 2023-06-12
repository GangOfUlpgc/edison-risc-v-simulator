import React, { useState, useEffect } from "react";
import Editor from "@monaco-editor/react";
import { useFileStorage } from "../../storage/file.storage";

export default function CodeEditor() {
  const fileManager = useFileStorage();
  const [text, setText] = useState("");

  useEffect(() => {
    setText(fileManager.currentFileContents || "");
  }, [fileManager, fileManager.currentFile]);

  return (
    <Editor
      value={text}
      onChange={(content) =>
        fileManager.writeFile(fileManager.currentFile ?? "0", content || "")
      }
      width="100%"
      height="100%"
      language="mips"
    />
  );
}
