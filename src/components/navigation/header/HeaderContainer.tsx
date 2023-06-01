import { Box, Flex } from "@chakra-ui/react";
import React from "react";
import Header from "./Header";

interface props {
  children: React.ReactNode;
}

export default function HeaderContainer({ children }: props) {
  return (
    <Box>
      <Header></Header>
      <Box pt="4rem" height="100vh" >
        {children}
      </Box>
    </Box>
  );
}
