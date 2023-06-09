import {
  IndentContext,
  LanguageSupport,
  StreamLanguage,
  StringStream
} from "@codemirror/language";
import { tags as t } from "@lezer/highlight";

defineMode('riscv', () => {
  const instructions = ['add', 'sub', 'lw', 'sw', 'beq'];
  const registers = /^x\d{1,2}$/;
  const labels = /^[a-zA-Z_]\w*:/;

  export const FireStoreLanguage = StreamLanguage.define({
    name: "firestore",
    startState: (indentUnit: number) => {
      return {};
    },

  function tokenBase(stream: any, state: any) {
    // Resaltar instrucciones
    if (stream.match(new RegExp(instructions.join('|'), 'i'), false)) {
      // Verificar los registros o estructura correcta después de la instrucción
      const next = stream.peek();
      if (next !== ' ' && next !== '\t' && next !== ',') {
        state.error = true;
      }
      return 'instruction';
    }

    // Resaltar registros
    if (stream.match(registers)) {
      // Verificar la estructura correcta de los registros
      const next = stream.peek();
      if (next !== ' ' && next !== '\t' && next !== ',' && next !== undefined) {
        state.error = true;
      }
      return 'register';
    }

    // Resaltar etiquetas
    if (stream.match(labels)) {
      return 'label';
    }

    // Mover al siguiente token
    stream.next();
    return null;
  }

  return {
    startState() {
      return { error: false };
    },
    token(stream: any, state: any) {
      if (stream.eatSpace()) {
        return null;
      }

      const style = tokenBase(stream, state);
      if (style && style !== null && state.error) {
        state.error = false;
        return style + ' error';
      }
      return style;
    },
  };
});
