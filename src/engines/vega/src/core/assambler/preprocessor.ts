export class Preprocessor {
  etiquetas: Record<string, number> = {};
  instructions = -1;
  i = 0;

  preprocess(program: string): string[] {
    const result: string[] = [];
    const lineas = program.split("\n");

    this.globltreat(lineas[0]);

    for (let i = 0; i < lineas.length; i++) {
      let elemento = lineas[i];
      elemento = elemento.trimStart();
      elemento = elemento.trimEnd();
      const isLabel: boolean = this.IsLabel(elemento);
      if (isLabel) {
        elemento = elemento.slice(0, -1);
        this.etiquetas[elemento] = this.instructions + 1;
      } else {
        const IsJump = this.IsBranch(elemento);
        if (IsJump) {
          //Transformar BEQ
          elemento = this.cambiofinal(elemento);
        }
        this.instructions++;
        result.push(elemento);
      }
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

  globltreat(instrucc: string) {
    const words = instrucc.split(" ");
    if (words[0] == ".globl") {
      this.i = 1;
    }
  }
}
