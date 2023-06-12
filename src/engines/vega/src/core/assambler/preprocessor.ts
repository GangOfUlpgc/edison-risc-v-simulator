export class Preprocessor {
  etiquetas: Record<string, number> = {};
  instructions = -1;
  i = 0;

  preprocess(program: string): string[] {
    const result: string[] = [];
    let lineas = program.split("\n");

    lineas = this.globltreat(lineas)

    for (this.i; this.i < lineas.length; this.i++) {
      let elemento = lineas[this.i];
      elemento = elemento.trimStart();
      elemento = elemento.trimEnd();
      const IsJump = this.IsBranch(elemento);
      if (IsJump) {
          //Transformar BEQ
      elemento = this.cambiofinal(elemento);
      }
      this.instructions++;
      result.push(elemento);
      
    }
    return result;
  }
  IsBranch(instrucc: string): boolean {
    const finalCadena: string = instrucc.substring(
      instrucc.lastIndexOf(" ") + 1
    ); // Obtener la última palabra de la cadena
    const IsJump: boolean = finalCadena in this.etiquetas;
    return IsJump;
  }

  IsLabel(instrucc: string): boolean {
    const x: boolean = instrucc.endsWith(":");
    return x;
  }

  cambiofinal(instrucc: string): string {
    const finalCadena: string = instrucc.substring(
      instrucc.lastIndexOf(" ") + 1
    );
    const newjump = (this.instructions + 1 - this.etiquetas[finalCadena]) * -2;

    const palabras = instrucc.split(" ");

    palabras[palabras.length - 1] = newjump.toString();

    // Unir las palabras nuevamente en una cadena
    const nuevoTexto = palabras.join(" ");

    return nuevoTexto;
  }

  globltreat(instruccs: string[]) {
    let pivot = -1
    for (let j = 0; j < instruccs.length; j++) {
      let instruc = instruccs[j];
      instruc = instruc.trimStart();
      instruc = instruc.trimEnd();
      const isLabel: boolean = this.IsLabel(instruc);
      if(isLabel) {
        instruc = instruc.slice(0, -1);
        this.etiquetas[instruc] = pivot + 1;
        instruccs.splice(j, 1);
      } else {
        pivot++;
      }

    }
    return instruccs
  }
}
