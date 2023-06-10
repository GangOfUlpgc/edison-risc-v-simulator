
import {
  indentOnInput,
  IndentContext,
  LanguageSupport,
  StreamLanguage,
  StringStream
} from "@codemirror/language";
import { tags as t } from "@lezer/highlight";
import { createTheme } from '@uiw/codemirror-themes';
import { completeFromList, ifNotIn } from "@codemirror/autocomplete";


export const riscvTheme = createTheme({
  theme: 'light',
  settings: {
    background: '#ffffff',
    foreground: '#333333',
    caret: '#5d00ff',
    selection: '#036dd626',
    selectionMatch: '#036dd626',
    lineHighlight: '#f0f0f0',
    gutterBackground: '#ffffff',
    gutterForeground: '#999999',
  },
  styles: [
    { tag: t.comment, color: '#808080' }, // Comentarios en un tono grisaceo claro
    { tag: t.variableName, color: '#000000' }, // Texto normal en un tono oscuro
    { tag: [t.string, t.special(t.brace)], color: '#32B417' }, // Palabras especiales en color púrpura
    { tag: t.number, color: '#5c6166' },
    { tag: t.bool, color: '#5c6166' },
    { tag: t.null, color: '#5c6166' },
    { tag: t.keyword, color: '#ff0000' }, // Palabras clave en color rojo
    { tag: t.operator, color: '#0000ff' }, // Operadores en color azul
    { tag: t.className, color: '#5c6166' },
    { tag: t.definition(t.typeName), color: '#5c6166' },
    { tag: t.typeName, color: '#6D1963' },
    { tag: t.angleBracket, color: '#5c6166' },
    { tag: t.tagName, color: '#5c6166' },
    { tag: t.attributeName, color: '#5c6166' },
    { tag: t.labelName, color: '#ff69b4' }, // Etiquetas en color rosa
  ],
});
export const RiscVLang = StreamLanguage.define({
  name: "riscv",
  startState: (indentUnit: number) => {
    return {};
  },

  
  token: (stream: StringStream, state: any = {}): string | null => {
    console.log(stream);
    if (stream.match("db")) {
      state.db = true;
      return "keyword";
    }
    const instructions = ['add', 'sub', 'lw', 'sw', 'beq'];
    const global = ['globl main', '.data', '.text']
    const mem = ['.word', '.space', '.skip', '.ASCII']
    const registers = /^x\d{1,2}/;
    const labels = /^[a-zA-Z_]\w*:/;

    if (stream.match(registers)) {
      //return 'register';
      const next = stream.peek();
      if (next !== ' ' && next !== '\t' && next !== ',' && next !== undefined) {
        state.error = true;
      }
      return 'register';
    
    }

    if (stream.match(labels)) {
      const next = stream.peek();
      if (next !== ' ' && next !== '\t' && next !== ',' && next !== undefined) {
        state.error = true;
      }
      return 'label';
    }


    if (stream.match(new RegExp('^(' + instructions.join('|') + ')\\b'))) {
      //return 'instruction';
      const next = stream.peek();
      if (next !== ' ' && next !== '\t' && next !== ',') {
        state.error = true;
      }
      return 'instruction';
    }

    if (stream.match(new RegExp(`^(${global.join('|')})`))) {
      const next = stream.peek();
      if (next !== ' ' && next !== '\t' &&  next !== undefined) {
        state.error = true;
      }
      return 'global';
    }

    if (stream.match(new RegExp(`^(${mem.join('|')})`))) {
      const next = stream.peek();
      if (next !== ' ' && next !== undefined) {
        state.error = true;
      }
      return 'mem';
    }


    stream.next();
    return null;
  },

  blankLine: (state: {}, indentUnit: number): void => {},
  copyState: (state: {}) => {},
  indent: (
    state: {},
    textAfter: string,
    context: IndentContext
  ): number | null => {
    return 1;
  },
  languageData: {
    commentTokens: { line: "#" },
  },
  tokenTable: {
    instruction: t.typeName,
    mem: t.special(t.brace),
    register: t.keyword,
    label: t.labelName,
    global: t.operator,
    
    },

    
});

export function riscv() {
  return new LanguageSupport(RiscVLang/*, [
    ifNotIn(["instruction", "label", "register", "mem", "global"]),
    completeFromList(["add", "sub", "lw", "sw", "beq"], {
      label: "Instruction",
    }),
    completeFromList([], { label: "Label" }), // Add your labels here
    completeFromList([], { label: "Register" }), // Add your registers here
    completeFromList([], { label: "Mem" }), // Add your mem directives here
    completeFromList([], { label: "Global" }), // Add your global directives here
  ]*/);

}














/*
CodeMirror.defineMode('riscv', (config) => {
    const baseMode = CodeMirror.getMode(config, 'text/x-csrc'); // Obtén el modo base similar a C
  
    return CodeMirror.overlayMode(baseMode, {
      token: (stream, state) => {
        if (stream.match(/[A-Za-z_]\w*:/)) {
          // Aplica un estilo diferente a las etiquetas
          return 'riscv-label';
        }
        if (stream.match(/x\d{1,2}/)) {
          // Aplica un estilo diferente a los registros
          return 'riscv-register';
        }
        return baseMode.token(stream, state);
      },
    });
  });
  */