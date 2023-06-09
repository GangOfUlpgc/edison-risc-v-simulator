import React from 'react';
import CodeMirror from '@uiw/react-codemirror';

import 'codemirror/mode/riscv/riscv';

import '@uiw/react-codemirror/build/codemirror.css';

const App = () => {
  const options = { 
    mode: 'riscv',
    theme: 'default',
    lineNumbers: true,
  };

  const handleChange = (editor: CodeMirror.Editor, data: CodeMirror.EditorChange, value: string) => {
    console.log(value);
  };

  return (
    <div>
      <h1>RISC-V Editor</h1>
      <CodeMirror
        value=""
        options={options}
        onChange={handleChange}
      />
    </div>
  );
};

export default App;