import 'codemirror/lib/codemirror.css';
import 'codemirror/mode/clike/clike';
import 'codemirror/lib/codemirror.css';
import 'codemirror/mode/clike/clike'; // Importa el modo de resaltado de sintaxis para el lenguaje similar a C
import CodeMirror from 'codemirror';

import React, { useState } from 'react';

export default function CodeEditor() {
  const [text, setText] = useState('');

  const handleTextChange = (editor: any, data: any, value: any) => {
    setText(value);
  };

  return (
    <CodeMirror
      value={text}
      options={{
        mode: 'text/x-csrc', // Configura el modo de resaltado de sintaxis para el lenguaje similar a C
        lineNumbers: true, // Activa los números de línea
        theme: 'default', // Configura el tema del editor
      }}
      onBeforeChange={handleTextChange}
    />
  );
}

