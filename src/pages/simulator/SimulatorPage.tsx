import React from "react";
import { Outlet } from "react-router-dom";
import SidebarContainer from "../../components/navigation/sidebar/SidebarContainer";
import { Sidebar } from "../../components/navigation/sidebar/Sidebar";
import HeaderContainer from "../../components/navigation/header/HeaderContainer";
import Header from "../../components/navigation/header/Header";

export default function SimulatorPage() {
  return (
    <HeaderContainer>
      <SidebarContainer>
        <Outlet></Outlet>
      </SidebarContainer>
    </HeaderContainer>
  );
}
