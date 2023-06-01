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
import SidebarReg from "./windows/SidebarReg";

const sidebarNav: { [name: string]: React.ReactNode } = {
  "explorador": <SidebarExplorer></SidebarExplorer>,
  "buscador": <SidebarSearch></SidebarSearch>,
  "regmem": <SidebarReg></SidebarReg>
}

export function Sidebar() {
  const [activeElement, setActiveElement] = useState('Explorador')

  const handleElementClick = (name: any) => {
    setActiveElement(name)
    console.log(name)
  }


  return (
    <Box
      h="100%"
      display="flex"
    >
      <Box
        display="flex"
        flexDir="column"
        minW="4.5rem"
        w="4.5rem"
        bgColor="gray.100"
        h="100%"
        borderRight="2px"
        borderRightColor="gray.200"
        justifyContent="space-between"
        py="1.6rem"
      >
        <Box display="flex" flexDir="column" gap="2.5rem">
          <SidebarElement name="Explorador" active={activeElement === 'explorador'} onClick={() => handleElementClick('explorador')}>
            <VscFiles />
          </SidebarElement>
          <SidebarElement name="Registros y memoria" active={activeElement === 'regmem'} onClick={() => handleElementClick('regmem')}>
            <VscDebugAlt />
          </SidebarElement>
          <SidebarElement name="Buscador" active={activeElement === 'buscador'} onClick={() => handleElementClick('buscador')}>
            <VscSearch />
          </SidebarElement>
        </Box>
        <SidebarElement name="Configuracion" active={activeElement === 'configuracion'} onClick={() => handleElementClick('configuracion')}>
          <VscSettingsGear />
        </SidebarElement>
      </Box>
      <Box width="20rem" height="100%" overflow="auto" bgColor="red" resize="horizontal">
        {
          sidebarNav[activeElement]
        }
      </Box>
    </Box>
  );
}
