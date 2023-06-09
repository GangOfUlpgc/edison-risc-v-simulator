import { Box } from "@chakra-ui/react";
import React from "react";

interface IHeaderControlList {
  children: React.ReactNode;
}

export function List({ children }: IHeaderControlList) {
  return (
    <Box
      gap="0.6rem"
      display="flex"
      bgColor="gray.200"
      borderRadius="lg"
      paddingX="0.5rem"
      paddingY="0.3rem"
    >
      {children}
    </Box>
  );
}
