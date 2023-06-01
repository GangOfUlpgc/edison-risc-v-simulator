import { Box } from "@chakra-ui/react";
import React from "react";
import { Sidebar } from "./Sidebar";

interface props {
  children: React.ReactNode;
}

export default function SidebarContainer({ children }: props) {
  return (
    <Box height="100vh">
      <Sidebar></Sidebar>
      <Box pt="4rem" ml="4.5rem" height="100%">
        {children}
      </Box>
    </Box>
  );
}
