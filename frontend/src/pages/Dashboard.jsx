import React from "react";
import { useAuthContext } from "../hooks/useAuthContext"

import SideBar from "../components/Dashboard/SideBar";
import Header from "../components/Dashboard/Header";
import Main from "../components/Dashboard/Main";


function Dashboard() {
  const {user} = useAuthContext()
  
  return (
    <div className="dashboard-container">
      <Header />
      <SideBar />
      <Main /> 
    </div>
  );
}

export default Dashboard;
