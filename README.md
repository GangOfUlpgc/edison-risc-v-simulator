# Edison

Edison is a RISCV code IDE for simulating and debugging RISCV code. Its written in typescript and uses react for UI. It is made for educational purposes and is not intended to be used in production. It is not fully compliant with RISC-V specification, but it can run some simple programs. Also emulates pipelined CPU with 4 stages: fetch, decode, execute, writeback.

Its powered by Vega engine, which is a RISC-V emulator written in typescript for RCV32I instruction set. You can find more information about Vega engine down below.

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
# Vega Engine

Vega engine is a RISC-V emulator written in typescript for RCV32I instruction set. Its made for educational purposes and is not intended to be used in production. It is not fully compliant with RISC-V specification, but it can run some simple programs. Also emulates pipelined CPU with 4 stages: fetch, decode, execute, writeback.

## Features

- [x] RCV32I instruction set
- [x] 4 stage pipelined CPU
- [x] 32 registers
- [x] 4KB memory

## Currently supported instructions

We have support only for this instructions. If you want to contribute adding new instructions it will be a great support.

- [x] srl x0, x0, x1
- [x] sll x0, x0, x1
- [x] lw x0, 0(x1)
- [x] sw x0, 0(x1)
- [x] ld x0, 0(x1)
- [x] sd x0, 0(x1)
- [x] beq x0, x1, x1
- [x] add x0, x0, x1
- [x] sub x0, x0, x1
- [x] and x0, x0, x1
- [x] or x0, x0, x1
- [x] xorx0, x0, x1

## Usage

To run the emulator you need to have nodejs installed on your machine. You can install it from [here](https://nodejs.org/en/).
To add vega engine to your project you need to install it from npm:

```bash
npm install @riscv/vega
```

Then you can import it in your project:

```javascript
import { Vega } from "@riscv/vega";
```

To run the emulator you need to create an instance of Vega class use the run method passing the path to the binary file as an argument:

```javascript
const vega = new Vega();
vega.run("path/to/binary/file");
```
## Contributing

If you are interested in contributing to the development of Edison or the Vega engine, your contributions are more than welcome! You can contribute in various ways such as adding new features, improving the UI, writing documentation, fixing bugs, and adding more RISC-V instructions to the Vega engine.

To contribute, please follow these steps:

1. Fork the repository.
2. Create a new branch for your feature (`git checkout -b feature/amazing-feature`).
3. Commit your changes (`git commit -am 'Add some amazing feature'`).
4. Push to the branch (`git push origin feature/amazing-feature`).
5. Open a new Pull Request.

Before sending a Pull Request, please make sure your code adheres to the coding conventions used throughout the project (indentation, comments, naming conventions, etc.) and that all tests are passing.

## Reporting Issues

If you encounter any bugs or issues with Edison or the Vega engine, please report them using the GitHub issues tracker. Be sure to include detailed steps to reproduce the issue, as well as information about your environment (operating system, Node.js version, etc.).

## Documentation

You can find more detailed documentation on how to use Edison and the Vega engine within the `docs` directory of this repository. This includes tutorials on how to write RISC-V programs, how to use the code editor and simulation view features, and how to extend the Vega engine with additional RISC-V instructions.

## License

Edison and the Vega engine are open-source projects licensed under the MIT license. This means you are free to use, share, and modify the software as long as you include the original copyright and license notice in any copies or substantial portions of the software.

## Acknowledgments

This project would not be possible without the contributions of the RISC-V community and everyone who has contributed to the development of Edison and the Vega engine. Thank you!

## Support

If you find this project useful, please consider supporting it by starring the repository on GitHub, contributing to the project, or donating to the developers.

For more information, support, or to discuss Edison and the Vega engine with other users and developers, please join our Discord server or subscribe to our mailing list.

## Contact

For further inquiries or if you need help, feel free to contact the maintainers via email at [edison-support@example.com](mailto:edison-support@example.com).

Enjoy coding with Edison and exploring the RISC-V architecture!
