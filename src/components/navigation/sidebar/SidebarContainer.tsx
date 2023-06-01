import { Box } from "@chakra-ui/react";
import React from "react";
import { Sidebar } from "./Sidebar";

interface props {
  children: React.ReactNode;
}

export default function SidebarContainer({ children }: props) {
  return (
    <Box>
      <Sidebar></Sidebar>
      <Box>{children}</Box>
    </Box>
  );
}
