import { LuHexagon } from "react-icons/lu"

interface CodedInstruction{
    instruct: string
}

const instructionsFun : {[instruction : string] : (load: string[]) => any} = {
    "0010011" : codei,
    "0100011" : codes,
    "1100011" : codesb,
    "0110011" : coder
}

const rnames : {[op: string] : string} = {
    "000" : "todefi",
    "111" : "and",
    "110" : "or",
    "0000000" : "add",
    "0100000" : "sub"
}  


const names : {[op: string] : string} = {
    "0110011" : "r", 
    "0010011" : "ld",
    "0100011": "sd",
    "1100011": "beq"
}

export function codeInstruction(instruction : string): CodedInstruction{ 
    /**
     * Decodes a RISCV instruction to hex, bin and numeric
     */

    const flako = instruction.replace(",", "")

    const string_s = flako.split(" ")
    let resultado = ""

    instructionsFun[string_s[0]](string_s)

    return {
        instruct : resultado
    }
}


function codei(load : string[]) {

    let inmediato = load[2].substring(0, load[2].indexOf("("))
    inmediato = parseInt(inmediato, 10).toString(2)
    inmediato = inmediato.padStart(12,"0")
    let r1 = load[2].substring(load[2].indexOf("x")+1, load[2].indexOf(")"))
    r1 = parseInt(r1, 10).toString(2)
    r1 = r1.padStart(5,"0")
    let rd = load[1].replace("x", "")
    rd = parseInt(rd, 10).toString(2)
    rd = rd.padStart(5,"0")

    const fun3 = ""
    const opcode = ""

    const result = inmediato + r1 + fun3 + rd + opcode
    return result

}

function codes(save : string[]) {

    let inmediato1 = save[2].substring(0, save[2].indexOf("("))
    inmediato1 = parseInt(inmediato1, 10).toString(2)
    inmediato1 = inmediato1.padStart(12,"0")
    let r1 = save[2].substring(save[2].indexOf("x")+1, save[2].indexOf(")"))
    r1 = parseInt(r1, 10).toString(2)
    r1 = r1.padStart(5,"0")
    let r2 = save[1].replace("x", "")
    r2 = parseInt(r2, 10).toString(2)
    r2 = r2.padStart(5,"0")

    const fun3 = ""
    const opcode = ""


    const result = inmediato1.substring(0, 6) +  r2 + r1 + fun3 + inmediato1.substring(6) + opcode
    return result
}

function codesb(branch : string[]) {
    let inmediato = branch[3]
    inmediato = parseInt(inmediato, 10).toString(2)
    inmediato = inmediato.padStart(12,"0")

    let r1 = branch[1].replace("x", "")
    r1 = parseInt(r1, 10).toString(2)
    r1 = r1.padStart(5,"0")
    let r2 = branch[2].replace("x", "")
    r2 = parseInt(r2, 10).toString(2)
    r2 = r2.padStart(5,"0")

    const fun3 = "add"
    const opcode = "add"

    const result = inmediato[0] + inmediato.substring(1, 7) + r2 + r1 + fun3 + inmediato.substring(7,11) + inmediato[1] + opcode
    return result
}

function coder(registros : string[]) {
    
    let rd = registros[1].replace("x", "")
    rd = parseInt(rd, 10).toString(2)
    rd = rd.padStart(5,"0")

    let r1 = registros[2].replace("x", "")
    r1 = parseInt(r1, 10).toString(2)
    r1 = r1.padStart(5,"0")
    let r2 = registros[3].replace("x", "")
    r2 = parseInt(r2, 10).toString(2)
    r2 = r2.padStart(5,"0")

    const fun3 = "add"
    const opcode = "0110011"
    const codigo = "add"

    if(codigo == undefined) {
            console.log("Estas usando una instruccion que no existe error")
    }

    const result =   codigo + r2 + r1 + fun3 + rd + opcode  
    return result

}
