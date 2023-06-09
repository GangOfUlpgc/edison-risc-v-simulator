import { Box } from "@chakra-ui/react";
import React from "react";
import { Sidebar } from "./Sidebar";

interface props {
  children: React.ReactNode;
}

export default function SidebarContainer({ children }: props) {
  return (
    <Box height="100%" display="flex" overflow="hidden">
      <Sidebar></Sidebar>
      <Box height="100%" overflow="auto" padding="2rem" width="100%">
        {children}
      </Box>
    </Box>
  );
}
