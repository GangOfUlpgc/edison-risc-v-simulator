import {
  IndentContext,
  LanguageSupport,
  StreamLanguage,
  StringStream
} from "@codemirror/language";
import { tags as t } from "@lezer/highlight";



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
    const registers = /^x\d{1,2}$/;
    const labels = /^[a-zA-Z_]\w*:/;

    if (stream.match(registers)) {
      return 'register';
    }

    if (stream.match(labels)) {
      return 'label';
    }

    if (stream.match('.globl main')) {
      return 'special';
    }

    if (stream.match(new RegExp(`^(${instructions.join('|')})`))) {
      return 'instruction';
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
    commentTokens: { line: ";" },
  },
  tokenTable: {
    db: t.keyword,
    dot: t.punctuation,
    collection: t.keyword,
    get: t.keyword,
    lParen: t.punctuation,
    rParen: t.punctuation,
    string: t.string,
  },
});

export function riscv() {
  return new LanguageSupport(RiscVLang);
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