import { Box } from "@chakra-ui/react";
import {
  FaPlay,
  FaPause,
  FaStop,
  FaForward,
  FaBackward,
  FaFileDownload,
  FaFile,
  FaSave,
  FaUndo,
  FaBug,
} from "react-icons/fa";
import { List } from "./List";
import { Element } from "./Element";
import { useUI } from "../../../../storage/ui.storage";
import { rv32i } from "../../../../cpus/riscv-rv32i";
import { useNavigate } from "react-router";
import { useFileStorage } from "../../../../storage/file.storage";

function Separator() {
  return (
    <Box py="0.4rem" h="100%" w="0.05rem">
      <Box h="100%" opacity="0.5" bgColor="gray.300" w="0.1rem" />
    </Box>
  );
}

export default function HeaderControl() {
  const nav = useNavigate();
  const ui = useUI();
  const contents = useFileStorage((state) => state.currentFileContents);

  return (
    <Box display="flex" gap="1rem">
      <List>
        <Element
          onClick={() => {
            ui.toggleDebuMode();
          }}
        >
          <FaBug />
        </Element>
        <Separator />
        <Element>
          <FaSave></FaSave>
        </Element>
        <Separator />
        <Element
          onClick={() => {
            console.log(contents());
            rv32i.loadProgram(contents());
            nav("dissasembly");
            ui.setSidebarWindow("regs");
            ui.setRegisterWindow("mem");
          }}
        >
          <FaFileDownload></FaFileDownload>
        </Element>
        <Separator />
        <Element
          onClick={() => {
            ui.setSidebarWindow("explorer");
            ui.setAddingFile(true);
          }}
        >
          <FaFile></FaFile>
        </Element>
      </List>
      <List>
        <Element onClick={() => rv32i.reload()}>
          <FaUndo />
        </Element>
        <Element>
          <FaPlay />
        </Element>
        <Separator />
        <Element>
          <FaStop />
        </Element>
        <Separator />
        <Element>
          <FaPause />
        </Element>
        <Separator />
        <Element>
          <FaBackward />
        </Element>
        <Separator />
        <Element onClick={() => rv32i.next()}>
          <FaForward />
        </Element>
      </List>
    </Box>
  );
}
