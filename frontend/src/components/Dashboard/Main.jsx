import React from "react";
import PageTitle from "../Dashboard/PageTitle"
import DashboardContainer from "./DashboardContainer";

function Main() {
  return (
    <main id="main" className="main">
      <PageTitle page="Dashboard"/>
      <DashboardContainer />
    </main>
  );
}

export default Main;
