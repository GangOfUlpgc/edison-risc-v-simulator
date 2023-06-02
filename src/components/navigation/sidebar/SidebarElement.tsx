import { Box, Tooltip } from "@chakra-ui/react";
import React from "react";
import { useUI } from "../../../storage/ui.storage";

interface props {
  name: string;
  slug: string;
  children: React.ReactNode;
}

export default function SidebarElement({ children, slug, name }: props) {
  const ui = useUI((state) => state);
  const active = ui.sidebarWindow === slug;

  function onClick() {
    if (active) ui.setSidebarWindow(null);
    else ui.setSidebarWindow(slug);
  }

  return (
    <Tooltip label={name} placement="right">
      <Box
        onClick={onClick}
        position="relative"
        w="100%"
        textColor={active ? "gray.800" : "gray.500"}
        display="flex"
        h="3rem"
        alignItems="center"
        justifyContent="center"
        borderRadius="md"
        cursor="pointer"
        _hover={{ textColor: "gray.800" }}
        fontSize="3xl"
      >
        {active && (
          <Box
            h="100%"
            bgColor="red"
            position="absolute"
            left="0"
            display="flex"
            alignItems="center"
          >
            <Box w="3px" h="3rem" bgColor="#F7B217" position="absolute" />
          </Box>
        )}
        {children}
      </Box>
    </Tooltip>
  );
}
