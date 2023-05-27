import React from "react";
import { Outlet } from "react-router-dom";

export default function SimulatorPage() {
  return (
    <div>
      SimulatorPage
      <Outlet></Outlet>
    </div>
  );
}
