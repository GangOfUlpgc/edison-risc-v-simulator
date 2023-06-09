import React, { useState, useEffect } from "react";
import { useFileStorage } from "../../storage/file.storage";
import { registerLanguage } from "./monacolang";
//import CodeMirror from "@uiw/react-codemirror";
import { createTheme } from "@uiw/codemirror-themes";
import { javascript } from "@codemirror/lang-javascript";
import { tags as t } from "@lezer/highlight";
//import React, { useState, useEffect } from 'react';
import { Controlled as CodeMirror } from '@uiw/react-codemirror';
import '@uiw/react-codemirror/dist/codemirror.css';
import 'codemirror/mode/clike/clike';

export default function CodeEditor() {
  const [text, setText] = useState('');

  useEffect(() => {
    setText(fileManager.currentFileContents || '');
  }, [fileManager, fileManager.currentFile]); 

  const handleTextChange = (editor, data, value) => {
    setText(value);
  };

  useEffect(() => {
    const mode = CodeMirror.findModeByName('text/x-csrc');
    if (mode && mode.mode) {
      CodeMirror.defineMode('riscv', (config) => {
        const baseMode = CodeMirror.getMode(config, mode.mode);

        return CodeMirror.overlayMode(baseMode, {
          token: (stream, state) => {
            if (stream.match(/[A-Za-z_]\w*:/)) {
              return 'riscv-label';
            }
            if (stream.match(/x\d{1,2}/)) {
              return 'riscv-register';
            }
            return baseMode.token(stream, state);
          },
        });
      });
    }
  }, []);

  return (
    <CodeMirror
      value={text}
      options={{
        mode: 'riscv',
        theme: 'default',
        lineNumbers: true,
      }}
      onBeforeChange={handleTextChange}
    />
  );
}

/*

  styles: [
    { tag: t.comment, color: "#919EAD" },
    { tag: t.variableName, color: "#6D6BDE" },
    { tag: t.quote, color: "#000" },
    { tag: t.moduleKeyword, color: "red" },
    { tag: [t.string, t.special(t.brace)], color: "#56BA90" },
    { tag: t.number, color: "#5c6166" },
    { tag: t.bool, color: "#5c6166" },
    { tag: t.null, color: "#5c6166" },
    { tag: t.keyword, color: "#5c6166" },
    { tag: t.operator, color: "#5c6166" },
    { tag: t.className, color: "#5c6166" },
    { tag: t.definition(t.typeName), color: "#5c6166" },
    { tag: t.typeName, color: "red" },
    { tag: t.angleBracket, color: "#000" },
    { tag: t.tagName, color: "#fff" },
    { tag: t.attributeName, color: "#41ABE1" },
    { tag: t.propertyName, color: "#56BA90" },
    { tag: t.annotation, color: "red" }
  ]
});
const extensions = [javascript({ jsx: true })];

export default function App() {
  const onChange = React.useCallback((value, viewUpdate) => {}, []);
  return (
    <CodeMirror
      style={{ border: "2px solid red", borderRadius: "4px" }}
      value="console.log('hello world!');"
      height="200px"
      theme={'dark'}
      extensions={extensions}
      onChange={onChange} 
    />
  );
}


export default function CodeEditor() {
  const fileManager = useFileStorage();
  const [text, setText] = useState("");


  useEffect(() => {
    setText(fileManager.currentFileContents || "");
  }, [fileManager, fileManager.currentFile]);
  useEffect(() => {
    if (editors) {
      // Registra el idioma RISC-V y sus características de resaltado
      registerLanguage(editors);
    }
  }, [editors]);

  return (
    <CodeMirror autoFocus={true} theme='light' height='100%'></CodeMirror>
  );
}
*/