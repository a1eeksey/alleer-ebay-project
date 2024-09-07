import React, {useEffect} from "react";
// import { useAuthContext } from "../hooks/useAuthContext"

import SideBar from "../components/Dashboard/SideBar/SideBar";
import Header from "../components/Dashboard/Header/Header";
import Main from "../components/Dashboard/Main";

function Dashboard() {
  // const {user} = useAuthContext()
  return (
    <div className="page dashboard-container">
      <Header />
      <SideBar />
      <Main /> 
    </div>
  );
}

export default Dashboard;
