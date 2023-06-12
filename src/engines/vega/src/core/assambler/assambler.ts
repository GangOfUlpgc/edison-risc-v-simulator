import { EncodedInstruction } from "@vega/types/assambler";
import { Encoder } from "./encoder";
import { Preprocessor } from "./preprocessor";

export class Assambler {
  encoder: Encoder;
  preprocessor: Preprocessor;

  constructor() {
    this.encoder = new Encoder();
    this.preprocessor = new Preprocessor();
  }

  decode(program: string): { code: EncodedInstruction[]; data: number[] } {
    /*
    .global main
    main:
    addi x0, x0, 1
    jalr x0, main
    */

    const splitted = this.splitCodeSections(program);

    const processed_program = this.preprocessor.preprocess(splitted[0]);

    const data = this.parseData(this.removeLabels(splitted[1]));
    console.log(data);
    console.log("processed program");
    console.log(processed_program);

    /*
    addi x0, x0, 1
    jalr x0, 0x00000000
    */

    const final_lines: EncodedInstruction[] = [];

    for (let x = 0; x < processed_program.length; x++) {
      final_lines.push(this.encoder.encode(processed_program[x]));
    }

    return { code: final_lines, data };
  }

  splitCodeSections(code: string): string[] {
    const sections = code.split(/\n(?=\.\w+)/);
    const formattedSections = sections.map((section) => section.trim());
    const textSectionIndex = formattedSections.findIndex((section) =>
      section.startsWith(".text")
    );
    const dataSectionIndex = formattedSections.findIndex((section) =>
      section.startsWith(".data")
    );

    if (textSectionIndex >= 0) {
      const textSection = formattedSections[textSectionIndex].replace(
        ".text",
        ""
      );
      const dataSection =
        dataSectionIndex >= 0
          ? formattedSections[dataSectionIndex].replace(".data", "")
          : "";
      return [textSection.trim(), dataSection.trim()];
    } else if (dataSectionIndex >= 0) {
      const dataSection = formattedSections[dataSectionIndex].replace(
        ".data",
        ""
      );
      return [dataSection.trim(), ""];
    } else {
      return [formattedSections[0].trim(), ""];
    }
  }

  removeLabels(text: string): string {
    const lines = text.split("\n");
    const resultLines: string[] = [];

    for (let line of lines) {
      const labelIndex = line.indexOf(":");
      if (labelIndex !== -1) {
        line = line.substring(labelIndex + 1).trim();
      }
      resultLines.push(line);
    }

    return resultLines.join("\n");
  }

  parseData(dataString: string): number[] {
    function parseNumber(value: string): number {
      if (value.startsWith("0x")) {
        return parseInt(value, 16);
      } else {
        return parseInt(value, 10);
      }
    }
    const lines = dataString.split("\n");
    const data: number[] = [];
    let currentByte: number[] = [];

    for (let line of lines) {
      line = line.trim();

      if (line.startsWith(".word")) {
        const values = line.split(" ").slice(1);

        for (let value of values) {
          value = value.trim();
          const parsedValue = parseNumber(value);
          data.push(parsedValue);
        }
      } else if (line.startsWith(".byte")) {
        const values = line.split(" ").slice(1);

        for (let value of values) {
          value = value.trim();
          const parsedValue = parseNumber(value);
          currentByte.unshift(parsedValue);

          if (currentByte.length === 4) {
            const paddedByte = currentByte.reduce(
              (acc, byte) => (acc << 8) + byte
            );
            data.push(paddedByte);
            currentByte = [];
          }
        }
      }
    }

    if (currentByte.length > 0) {
      const paddedByte = currentByte.reduce((acc, byte) => (acc << 8) + byte);
      data.push(paddedByte);
    }

    return data;
  }
}
