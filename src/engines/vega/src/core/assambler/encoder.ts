import { EncodedInstruction } from "@vega/types/assambler";

const opCode: { [op: string]: string } = {
  srl: "0110011",
  sll: "0110011",
  ld: "0010011",
  sd: "0100011",
  beq: "1100011",
  lw: "0000011",
  sw: "0100011",
  xor: "0110011",
};

const funCode: { [op: string]: string } = {
  srl: "101",
  sll: "001",
  lw: "010",
  sw: "010",
  ld: "011",
  sd: "011",
  beq: "000",
  add: "000",
  sub: "000",
  and: "111",
  or: "110",
  xor: "100",
};

const rcode: { [op: string]: string } = {
  add: "0000000",
  sub: "0100000",
  and: "0000000",
  or: "0000000",
  xor: "0000000",
  sll: "0000000",
  srl: "0000000",
};

const instructionsFun: { [instruction: string]: (load: string[]) => any } = {
  xor: rtype,
  sll: rtype,
  srl: rtype,
  add: rtype,
  sub: rtype,
  ld: itype,
  sd: stype,
  beq: sbtype,
  default: rtype,
  lw: itype,
  sw: stype,
  and: rtype,
  or: rtype,
};

export class Encoder {
  encode(instruction: string): EncodedInstruction {
    const flako = instruction.replace(",", "");

    const string_s = flako.split(" ");

    let resul: any = [0, 0];

    resul = instructionsFun[string_s[0]](string_s);

    console.log("El inmediato que se va a poner es: " + resul[1][4]);

    return {
      instruction: instruction,
      hex: resul[0],
      bin: parseInt(resul[0], 2), //.toString(16),
      meta: {
        type: resul[1][0],
        rs: parseInt(resul[1][1], 2),
        rt: parseInt(resul[1][2], 2),
        rd: parseInt(resul[1][3], 2),
        inmm: parseInt(resul[1][4]),
        aluOp: parseInt(resul[1][5], 2),
        instruction: instruction,
      },
    };
  }
}

function itype(load: string[]) {
  let inmediato: any = parseInt(load[2].substring(0, load[2].indexOf("(")));
  let inmediato_sin_cambios = inmediato;
  if (inmediato < 0) {
    let inmediatoprueba = inmediato;
    inmediato = "";
    inmediatoprueba = Math.abs(inmediatoprueba);
    inmediatoprueba = inmediatoprueba.toString(2);
    inmediatoprueba = inmediatoprueba.padStart(12, "0");
    for (let i = 0; i < inmediatoprueba.length; i++) {
      let bit = inmediatoprueba[i];
      let invertido = bit ^ 1;
      inmediato += invertido;
    }
    inmediato = sumaBinaria(inmediato, "1");
  } else {
    inmediato = inmediato.toString(2);
    inmediato = inmediato.padStart(12, "0");
  }
  let r1 = load[2].substring(load[2].indexOf("x") + 1, load[2].indexOf(")"));
  r1 = parseInt(r1, 10).toString(2);
  r1 = r1.padStart(5, "0");
  let rd = load[1].replace("x", "");
  rd = parseInt(rd, 10).toString(2);
  rd = rd.padStart(5, "0");

  const fun3 = funCode[load[0]];
  const opcode = opCode[load[0]];
  const result = inmediato + r1 + fun3 + rd + opcode;
  const result2 = [load[0], r1, 0, rd, inmediato_sin_cambios, fun3];
  return [result, result2];
}

function stype(save: string[]) {
  let inmediato: any = parseInt(save[2].substring(0, save[2].indexOf("(")));
  let inmediato_sin_cambios = inmediato;
  if (inmediato < 0) {
    inmediato = "";
    let inmediatoprueba = inmediato;
    inmediatoprueba = Math.abs(inmediatoprueba);
    inmediatoprueba = inmediatoprueba.toString(2);
    inmediatoprueba = inmediatoprueba.padStart(12, "0");
    for (let i = 0; i < inmediatoprueba.length; i++) {
      let bit = inmediatoprueba[i];
      let invertido = bit ^ 1;
      inmediato += invertido;
    }
    inmediato = sumaBinaria(inmediato, "1");
  } else {
    inmediato = inmediato.toString(2);
    inmediato = inmediato.padStart(12, "0");
  }
  let r1 = save[2].substring(save[2].indexOf("x") + 1, save[2].indexOf(")"));
  r1 = parseInt(r1, 10).toString(2);
  r1 = r1.padStart(5, "0");
  let r2 = save[1].replace("x", "");
  r2 = parseInt(r2, 10).toString(2);
  r2 = r2.padStart(5, "0");
  const fun3 = funCode[save[0]];
  const opcode = opCode[save[0]];
  const result =
    inmediato.substring(0, 6) +
    r2 +
    r1 +
    fun3 +
    inmediato.substring(6) +
    opcode;
  const result2 = [save[0], r1, r2, r2, inmediato_sin_cambios, fun3];
  return [result, result2];
}

function sbtype(branch: string[]) {
  let inmediato: any = parseInt(branch[3]);
  let inmediato_sin_cambios = inmediato;
  if (inmediato < 0) {
    let inmediatoprueba = inmediato;
    inmediato = "";
    inmediatoprueba = Math.abs(inmediatoprueba);
    inmediatoprueba = inmediatoprueba.toString(2);
    inmediatoprueba = inmediatoprueba.padStart(12, "0");
    for (let i = 0; i < inmediatoprueba.length; i++) {
      let bit = inmediatoprueba[i];
      let invertido = bit ^ 1;
      inmediato += invertido;
    }
    inmediato = sumaBinaria(inmediato, "1");
  } else {
    inmediato = inmediato.toString(2);
    inmediato = inmediato.padStart(12, "0");
  }

  let r1 = branch[1].replace("x", "");
  r1 = parseInt(r1, 10).toString(2);
  r1 = r1.padStart(5, "0");
  let r2 = branch[2].replace("x", "");
  r2 = parseInt(r2, 10).toString(2);
  r2 = r2.padStart(5, "0");

  const fun3 = funCode[branch[0]];
  const opcode = opCode[branch[0]];

  const result =
    inmediato[0] +
    inmediato.substring(1, 7) +
    r2 +
    r1 +
    fun3 +
    inmediato.substring(7, 11) +
    inmediato[1] +
    opcode;
  const result2 = [branch[0], r1, r2, 0, inmediato_sin_cambios, fun3];
  return [result, result2];
}

function rtype(registros: string[]) {
  let rd = registros[1].replace("x", "");
  rd = parseInt(rd, 10).toString(2);
  rd = rd.padStart(5, "0");

  let r1 = registros[2].replace("x", "");
  r1 = parseInt(r1, 10).toString(2);
  r1 = r1.padStart(5, "0");
  let r2 = registros[3].replace("x", "");
  r2 = parseInt(r2, 10).toString(2);
  r2 = r2.padStart(5, "0");

  const fun3 = funCode[registros[0]];
  const opcode = "0110011";
  const codigo = rcode[registros[0]];

  if (codigo == undefined) {
    console.log("Estas usando una instruccion que no existe error");
  }

  const result = codigo + r2 + r1 + fun3 + rd + opcode;
  const result2 = [registros[0], r1, r2, rd, 0, fun3];
  return [result, result2];
}

function sumaBinaria(binario: string, incremento: string) {
  while (incremento.length < binario.length) {
    incremento = "0" + incremento;
  }

  let resultado = "";
  let acarreo = 0;

  // Realizar la suma binaria teniendo en cuenta el acarreo
  for (let i = binario.length - 1; i >= 0; i--) {
    let bit1 = parseInt(binario[i]);
    let bit2 = parseInt(incremento[i]);

    let suma = bit1 + bit2 + acarreo;

    let bitResultado = suma % 2;
    acarreo = Math.floor(suma / 2);

    resultado = bitResultado.toString() + resultado;
  }

  if (acarreo > 0) {
    resultado = acarreo.toString() + resultado;
  }

  return resultado;
}
