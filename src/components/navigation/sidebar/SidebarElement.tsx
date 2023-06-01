import { Box, Tooltip } from "@chakra-ui/react";
import React from "react";

interface props {
  name: string;
  children: React.ReactNode;
  active?: boolean;
}

export default function SidebarElement({ children, active, name }: props) {
  return (
    <Tooltip label={name} placement="right">
      <Box
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
            <Box w="2px" h="3rem" bgColor="#F7B217" position="absolute" />
          </Box>
        )}
        {children}
      </Box>
    </Tooltip>
  );
}
