import { Box } from "@chakra-ui/react";
import React from "react";
import Header from "./Header";

interface props {
  children: React.ReactNode;
}

export default function HeaderContainer({ children }: props) {
  return (
    <Box>
      <Header></Header>
      <Box>{children}</Box>
    </Box>
  );
}
