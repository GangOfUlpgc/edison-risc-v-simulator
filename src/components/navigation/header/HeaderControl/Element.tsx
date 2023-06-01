import { Box } from "@chakra-ui/react";
import React from "react";

interface props {
  children: React.ReactNode;
}

export function Element({ children }: props) {
  return (
    <Box
      textColor="gray.800"
      display="flex"
      alignItems="center"
      justifyContent="center"
      borderRadius="md"
      width="1.9rem"
      height="1.9rem"
      cursor="pointer"
      _hover={{ bgColor: "gray.300" }}
    >
      {children}
    </Box>
  );
}
