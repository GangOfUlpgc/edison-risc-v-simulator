import { Box } from "@chakra-ui/react";
import {
  VscFolder,
  VscDebugAlt,
  VscSettingsGear,
  VscSearch,
  VscFiles,
} from "react-icons/vsc";
import React from "react";
import SidebarElement from "./SidebarElement";

export function Sidebar() {
  return (
    <Box h="100%" pt="4rem" position="fixed">
      <Box
        display="flex"
        flexDir="column"
        w="4.5rem"
        bgColor="gray.100"
        h="full"
        borderRight="2px"
        borderRightColor="gray.200"
        justifyContent="space-between"
        py="1.6rem"
      >
        <Box display="flex" flexDir="column" gap="2.5rem">
          <SidebarElement name="Explorador" active>
            <VscFiles />
          </SidebarElement>
          <SidebarElement name="Registros y memoria">
            <VscDebugAlt />
          </SidebarElement>
          <SidebarElement name="Buscador">
            <VscSearch />
          </SidebarElement>
        </Box>
        <SidebarElement name="Configuracion">
          <VscSettingsGear />
        </SidebarElement>
      </Box>
    </Box>
  );
}
