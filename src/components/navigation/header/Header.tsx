import React from "react";
import { Box, Text } from "@chakra-ui/react";
import HeaderControl from "./HeaderControl";
import HeaderSelector from "./HeaderSelector";

export default function Header() {
  return (
    <Box
      position="fixed"
      zIndex="10"
      w="100%"
      h="4rem"
      bgColor="gray.100"
      display="flex"
      justifyContent="space-between"
      alignItems="center"
      px="2rem"
      borderBottom="2px"
      borderBottomColor="gray.300"
    >
      {/* This is for the logo */}
      <Box>
        <Text fontSize="xl" fontWeight="bold">
          Riscv-simulator
        </Text>
      </Box>
      <Box>
        <HeaderSelector />
      </Box>
      {/* This is for the play button */}
      <Box>
        <HeaderControl />
      </Box>
    </Box>
  );
}
