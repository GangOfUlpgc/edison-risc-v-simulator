import React, { useEffect, useRef, useState } from 'react';
import { UnControlled as CodeMirror } from '@uiw/react-codemirror';
import 'codemirror/theme/monokai.css';
import 'codemirror/mode/clike/clike';

const registerPattern = /^x\d{1,2}$/;
const instructionKeywords = ['add', 'sub', 'lw', 'sw', 'beq'];
const labelPattern = /^[^\s]+:/;

const RiscVEditor = () => {
    const editorRef = useRef<CodeMirror | null>(null); // Especifica el tipo de editorRef
    const [sourceCode, setSourceCode] = useState('');


  useEffect(() => {
    const editor = editorRef.current?.editor;

    editor.setOption('mode', {
      name: 'clike',
      tokenHooks: {
        instruction: tokenInstruction,
        register: tokenRegister,
        label: tokenLabel,
        error: tokenError,
      },
    });
    editor.setOption('theme', 'monokai');
    editor.setOption('lineNumbers', true);
    editor.setOption('styleActiveLine', true);

    editor.on('change', (instance: any) => {
      const code = instance.getValue();
      validateSyntax(code);
      setSourceCode(code);
    });
  }, []);

  const tokenInstruction = (stream: any) => {
    const word = stream.match(/^[^\s]+/);
    if (word && instructionKeywords.includes(word[0])) {
      return 'instruction';
    }
    return null;
  };

  const tokenRegister = (stream: any) => {
    if (stream.match(registerPattern)) {
      return 'register';
    }
    return null;
  };

  const tokenLabel = (stream: any) => {
    if (stream.match(labelPattern)) {
      return 'label';
    }
    return null;
  };

  const tokenError = (stream: any) => {
    const errorPattern = /^[^\s]+/;
    if (stream.match(errorPattern)) {
      return 'error';
    }
    return null;
  };

  const validateSyntax = (code: any) => {
    const lines = code.split('\n');
    lines.forEach((line: any) => {
      const trimmedLine = line.trim();
      if (trimmedLine.length === 0 || trimmedLine.startsWith('.')) {
        // Ignorar líneas vacías o líneas que comienzan con '.'
        return;
      }

      const tokens = trimmedLine.split(' ');
      const instruction = tokens[0];
      const rest = tokens.slice(1).join(' ');

      if (!instructionKeywords.includes(instruction)) {
        // Marcar como error si no es una instrucción válida
        setLineError(line);
      } else if (instruction === 'add' || instruction === 'sub') {
        const registers = rest.split(',').map((item: any) => item.trim());
        if (registers.length !== 3 || !registers.every((reg: any) => registerPattern.test(reg))) {
          // Marcar como error si los registros no cumplen con el formato esperado
          setLineError(line);
        }
      } else if (instruction === 'lw' || instruction === 'sw') {
        const parts = rest.split(',');
        if (parts.length !== 2 || !registerPattern.test(parts[0]) || !isMemoryAccessValid(parts[1])) {
          // Marcar como error si el formato de la instrucción lw/sw es incorrecto
          setLineError(line);
        }
      } else if (instruction === 'beq') {
        const parts = rest.split(',');
        if (parts.length !== 2 || !registerPattern.test(parts[0]) || !labelPattern.test(parts[1])) {
          // Marcar como error si el formato de la instrucción beq es incorrecto
          setLineError(line);
        }
      }
    });
  };

  const isMemoryAccessValid = (str: any) => {
    const parts = str.split('(');
    if (parts.length !== 2) {
      return false;
    }

    const offset = parts[0].trim();
    const register = parts[1].replace(')', '').trim();

    return registerPattern.test(register) && (!isNaN(offset) || registerPattern.test(offset));
  };

  const setLineError = (line: any) => {
    const editor = editorRef.current.editor;
    const lineNumber = sourceCode.split('\n').indexOf(line) + 1;
    editor.addLineClass(lineNumber, 'background', 'line-error');
  };

  return (
    <div>
      <CodeMirror
        ref={editorRef}
        value={sourceCode}
        options={{
          lineNumbers: true,
          mode: 'clike',
          theme: 'monokai',
        }}
      />
    </div>
  );
};

export default RiscVEditor;
