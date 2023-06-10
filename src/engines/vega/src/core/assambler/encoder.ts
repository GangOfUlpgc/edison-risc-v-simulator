import { EncodedInstruction } from "@vega/types/assambler";

const opCode: { [op: string]: string } = {
  ld: "0010011",
  sd: "0100011",
  beq: "1100011",
};

const funCode: { [op: string]: string } = {
  ld: "011",
  sd: "011",
  beq: "000",
  add: "000",
  sub: "000",
  and: "111",
  or: "110",
};

const rcode: { [op: string]: string } = {
  add: "0000000",
  sub: "0100000",
  and: "0000000",
  or: "0000000",
};

const instructionsFun: { [instruction: string]: (load: string[]) => any } = {
  add: rtype,
  sub: rtype,
  ld: itype,
  sd: stype,
  beq: sbtype,
  default: rtype,
};

export class Encoder {
  encode(instruction: string): EncodedInstruction {
    const flako = instruction.replace(",", "");

    const string_s = flako.split(" ");

    let resul: any = [null, null];

    resul = instructionsFun[string_s[0]](string_s);

    return {
      instruction: instruction,
      hex: resul[0],
      bin: parseInt(resul[0], 2),
      meta: {
        type: resul[1][0],
        rs: parseInt(resul[1][1], 2),
        rt: parseInt(resul[1][2], 2),
        rd: parseInt(resul[1][3], 2),
        inmm: parseInt(resul[1][4], 2),
        aluOp: parseInt(resul[1][5], 2),
        instruction: instruction,
      },
    };
  }
}

function itype(load: string[]) {
  let inmediato = load[2].substring(0, load[2].indexOf("("));
  inmediato = parseInt(inmediato, 10).toString(2);
  inmediato = inmediato.padStart(12, "0");
  let r1 = load[2].substring(load[2].indexOf("x") + 1, load[2].indexOf(")"));
  r1 = parseInt(r1, 10).toString(2);
  r1 = r1.padStart(5, "0");
  let rd = load[1].replace("x", "");
  rd = parseInt(rd, 10).toString(2);
  rd = rd.padStart(5, "0");

  const fun3 = funCode[load[0]];
  const opcode = opCode[load[0]];
  const result = inmediato + r1 + fun3 + rd + opcode;
  const result2 = [load[0], r1, null, rd, inmediato, fun3];
  return [result, result2];
}

function stype(save: string[]) {
  let inmediato1 = save[2].substring(0, save[2].indexOf("("));
  inmediato1 = parseInt(inmediato1, 10).toString(2);
  inmediato1 = inmediato1.padStart(12, "0");
  let r1 = save[2].substring(save[2].indexOf("x") + 1, save[2].indexOf(")"));
  r1 = parseInt(r1, 10).toString(2);
  r1 = r1.padStart(5, "0");
  let r2 = save[1].replace("x", "");
  r2 = parseInt(r2, 10).toString(2);
  r2 = r2.padStart(5, "0");
  const fun3 = funCode[save[0]];
  const opcode = opCode[save[0]];
  const result =
    inmediato1.substring(0, 6) +
    r2 +
    r1 +
    fun3 +
    inmediato1.substring(6) +
    opcode;
  const result2 = [save[0], r1, r2, null, inmediato1, fun3];
  return [result, result2];
}

function sbtype(branch: string[]) {
  let inmediato = branch[3];
  inmediato = parseInt(inmediato, 10).toString(2);
  inmediato = inmediato.padStart(12, "0");

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
  const result2 = [branch[0], r1, r2, null, inmediato, fun3];
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
  const result2 = [registros[0], r1, r2, rd, null, fun3];
  return [result, result2];
}
