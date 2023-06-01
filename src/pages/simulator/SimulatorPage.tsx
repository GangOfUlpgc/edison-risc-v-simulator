import React from "react";
import { Outlet } from "react-router-dom";
import SidebarContainer from "../../components/navigation/sidebar/SidebarContainer";
import { Sidebar } from "../../components/navigation/sidebar/Sidebar";
import HeaderContainer from "../../components/navigation/header/HeaderContainer";
import Header from "../../components/navigation/header/Header";
import { Box } from "@chakra-ui/layout";

export default function SimulatorPage() {
  return (
    <HeaderContainer>
      <SidebarContainer>
        <Box height="100%">
          <Outlet></Outlet>
        </Box>
      </SidebarContainer>
    </HeaderContainer>
  );
}
