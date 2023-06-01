# Edison

Edison is a RISCV code IDE for simulating and debugging RISCV code. Its written in typescript and uses react for UI. It is made for educational purposes and is not intended to be used in production. It is not fully compliant with RISC-V specification, but it can run some simple programs. Also emulates pipelined CPU with 4 stages: fetch, decode, execute, writeback.

Its powered by Vega engine, which is a RISC-V emulator written in typescript for RCV32I instruction set. You can find more information about Vega engine [here]()

## Code editor features

- [x] Syntax highlighting
- [x] Code completion
- [x] Code formatting
- [x] Code folding
- [x] Code snippets
- [x] Code linting
- [x] Code debugging
- [x] Code breakpoints

## Simulation view features

- [x] General purpose registers view
- [x] Instruction Memory view
- [x] Data Memory view
- [x] Pipeline view
- [x] Disassembly view
- [x] Datapath simulation view

## Usage

To run the IDE you need to have nodejs installed on your machine. You can install it from [here](https://nodejs.org/en/).

To start using edison you can simply clone this repository and install dependencies:

```bash
git clone
cd edison
npm install
```

Then you can start the IDE:

```bash
npm run dev
```

or if you are using yarn:

```bash
yarn dev
```
