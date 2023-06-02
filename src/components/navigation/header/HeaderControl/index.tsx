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
} from "react-icons/fa";
import { List } from "./List";
import { Element } from "./Element";
import { useUI } from "../../../../storage/ui.storage";

function Separator() {
  return (
    <Box py="0.4rem" h="100%" w="0.05rem">
      <Box h="100%" opacity="0.5" bgColor="gray.300" w="0.1rem" />
    </Box>
  );
}

export default function HeaderControl() {
  const ui = useUI();

  return (
    <Box display="flex" gap="1rem">
      <List>
        <Element>
          <FaSave></FaSave>
        </Element>
        <Separator />
        <Element>
          <FaFileDownload></FaFileDownload>
        </Element>
        <Separator />
        <Element onClick={() => ui.setAddingFile(true)}>
          <FaFile></FaFile>
        </Element>
      </List>
      <List>
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
        <Element>
          <FaForward />
        </Element>
      </List>
    </Box>
  );
}
