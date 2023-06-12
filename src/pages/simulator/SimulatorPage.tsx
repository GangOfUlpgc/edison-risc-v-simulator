import React from "react";
import { Outlet } from "react-router-dom";
import SidebarContainer from "../../components/navigation/sidebar/SidebarContainer";
import HeaderContainer from "../../components/navigation/header/HeaderContainer";

export default function SimulatorPage() {
  return (
    <HeaderContainer>
      <SidebarContainer>
        <Outlet></Outlet>
      </SidebarContainer>
    </HeaderContainer>
  );
}
