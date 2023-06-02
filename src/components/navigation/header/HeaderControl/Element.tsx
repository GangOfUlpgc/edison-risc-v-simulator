import { Box, BoxProps } from "@chakra-ui/react";
import React from "react";

interface props extends BoxProps {
  children: React.ReactNode;
}

export function Element({ children, ...other }: props) {
  return (
    <Box
      textColor="gray.500"
      display="flex"
      alignItems="center"
      justifyContent="center"
      borderRadius="md"
      width="1.9rem"
      height="1.9rem"
      cursor="pointer"
      _hover={{ bgColor: "gray.300", textColor: "gray.600" }}
      {...other}
    >
      {children}
    </Box>
  );
}
