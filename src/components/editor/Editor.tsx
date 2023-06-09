import React from 'react';
import CodeMirror from '@uiw/react-codemirror';
import 'codemirror/lib/codemirror.css';
import 'codemirror/theme/dracula.css';
import { EditorState, EditorView, basicSetup } from '@codemirror/basic-setup';
import { javascript } from '@codemirror/lang-javascript';
import { StreamLanguage } from '@codemirror/stream-parser';
import { indentOnInput } from '@codemirror/language'
import { completeFromList, ifNotIn } from '@codemirror/autocomplete';
import { RiscVLang } from './riscvLang';

function RiscVLexer() {
  const language = StreamLanguage.define({
    parser: {
      token(stream: any) {
        if (stream.match(/add|sub|lw|sw|beq/, true)) {
          return 'riscv-instruction';
        }
        if (stream.match(/x\d{1,2}/)) {
          return 'riscv-register';
        }
        if (stream.match(/(\w+):/, true)) {
          return 'riscv-label';
        }
        if (stream.match(/.globl|\.data|\.word/, true)) {
          return 'riscv-special';
        }
        if (stream.eatSpace()) {
          return null;
        }
        stream.next();
        return 'riscv-error';
      },
      languageData: {
        closeBrackets: { pairs: { '(': ')', '[': ']' } },
        commentTokens: { line: '#' },
      },
    },
    languageData: {
      commentTokens: { line: '#' },
      indentOnInput: indentOnInput(),
      autocomplete: ifNotIn(['string'], completeFromList(tags)),
    },
  });

  return language;
}

function App() {
  const [value, setValue] = React.useState('#Toma geroma pastillas de goma');

  const handleChange = (view: any, change:any) => {
    setValue(change.doc.toString());
  };

  React.useEffect(() => {
    const language = RiscVLexer();
    const languageExtension = EditorState.transactionExtender.of((tr: any) => {
      if (!tr.docChanged) return tr;
      return tr.update({
        tokens: language.stream({
          input: tr.newDoc.sliceString(0),
        }),
      });
    });

    EditorView.defineTheme(
      { 'riscv-instruction': { color: 'blue' } },
      { dark: { 'riscv-instruction': { color: 'lightblue' } } }
    );

    const startState = EditorState.create({
      doc: value,
      extensions: [
        basicSetup,
        javascript(),
        EditorState.transactionExtender.of(languageExtension),
        styleTags,
      ],
    });

    const view = new EditorView({
      state: startState,
      parent: document.getElementById('editor'),
    });

    view.dispatch({
      effects: styleTags.reconfigure(view),
    });
  }, []);

  return (
    <div id="editor" style={{ height: '500px' }} />
  );
}

export default App;




/*
import React from 'react';
import CodeMirror from '@uiw/react-codemirror';
import { javascript } from '@codemirror/lang-javascript';
//import '@codemirror/lang-lezer';

function App() {
    const onChange = React.useCallback((value: any, viewUpdate: any) => {
      console.log('value:', value);
    }, []);
    return (
      <CodeMirror
        value="#Toma geroma pastillas de goma"
        autoFocus={true}
        height="500px"
        theme={'dark'}
        extensions={[javascript({ jsx: true })]}
        onChange={onChange}
      />
    );
  }
  export default App;
  */