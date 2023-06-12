import React, { useState } from "react";
import { Box } from "@chakra-ui/react";
import {
  VscDebugAlt,
  VscSettingsGear,
  VscSearch,
  VscFiles,
} from "react-icons/vsc";
import SidebarElement from "./SidebarElement";
import SidebarExplorer from "./windows/SidebarExplorer";
import SidebarSearch from "./windows/SidebarSearch";
import SidebarRegMem from "./windows/SidebarRegMem";
import { useUI } from "../../../storage/ui.storage";
import SidebarConfig from "./windows/SidebarConfig";

const sidebarNav: { [name: string]: React.ReactNode } = {
  explorer: <SidebarExplorer />,
  regs: <SidebarRegMem />,
  search: <SidebarSearch />,
  config: <SidebarConfig />,
};

export function Sidebar() {
  const window = useUI((state) => state.sidebarWindow);

  return (
    <Box h="100%" display="flex">
      <Box
        display="flex"
        flexDir="column"
        minW="4.5rem"
        w="4.5rem"
        bgColor="gray.100"
        h="100%"
        borderRight="2px"
        borderRightColor="gray.300"
        justifyContent="space-between"
        py="1.6rem"
      >
        <Box display="flex" flexDir="column" gap="2.5rem">
          <SidebarElement name="Explorador" slug="explorer">
            <VscFiles />
          </SidebarElement>
          <SidebarElement name="Registros y memoria" slug="regs">
            <VscDebugAlt />
          </SidebarElement>
        </Box>
        <SidebarElement name="Configuracion" slug="config">
          <VscSettingsGear />
        </SidebarElement>
      </Box>
      {window && (
        <Box
          width="20rem"
          height="100%"
          overflow="auto"
          bgColor="gray.100"
          borderRight="2px"
          borderRightColor="gray.300"
          resize="horizontal"
        >
          {sidebarNav[window]}
        </Box>
      )}
    </Box>
  );
}
