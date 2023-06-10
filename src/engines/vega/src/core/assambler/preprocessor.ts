const etiquetas: Record<string, number> = {};
let instructions : number = -1
let i : number = 0

export class Preprocessor {
  preprocess(program: string): string[] {
    
    let result : string[] = []
    const lineas = program.split("\n")

    globltreat(lineas[0])

    for (i; i < lineas.length; i++) {
      let elemento = lineas[i];
      elemento = elemento.trimStart();
      elemento = elemento.trimEnd();
      const isLabel: boolean = IsLabel(elemento);
      if(isLabel)
      {
        elemento = elemento.slice(0, -1);
        etiquetas[elemento] = instructions+1
      } else {
        const IsJump = IsBranch(elemento)
        if(IsJump) {
          //Transformar BEQ
          elemento = cambiofinal(elemento)
        }
        instructions++
        result.push(elemento)
      }
      
    }
    return result;
  }
}

function IsBranch(instrucc : string) : boolean {
  const finalCadena: string = instrucc.substring(instrucc.lastIndexOf(" ") + 1); // Obtener la última palabra de la cadena
  const IsJump: boolean = finalCadena in etiquetas
  return IsJump
  
}

function IsLabel(instrucc : string) : boolean {
  const x : boolean = instrucc.endsWith(":");
  return x
}

function cambiofinal(instrucc : string) : string {
  const finalCadena: string = instrucc.substring(instrucc.lastIndexOf(" ") + 1);
  const newjump = (instructions+1-etiquetas[finalCadena])*(-4)

  const palabras = instrucc.split(' ');

  palabras[palabras.length - 1] = newjump.toString();

  // Unir las palabras nuevamente en una cadena
  const nuevoTexto = palabras.join(' ');

  return nuevoTexto
}

function globltreat(instrucc : string) {
  let words = instrucc.split(' ')
  if(words[0] == ".globl") {
    i=1
  }
}