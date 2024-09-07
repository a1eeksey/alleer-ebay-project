import React, {useEffect, useState} from "react";
import Tasks_Card from "./Tasks_Card";
import Deals_Card from "./Deals_Card";
import Info_Card from "./Information_Card";
import Orders_Card from "./Orders_Card";

import PageTitle from "../../Dashboard/PageTitle"

function DashboardContainer({pageTitle}) {
  return (
    <section>
      <PageTitle pageTitle={pageTitle}/>

        <div className="row">
            <Tasks_Card />
            <Deals_Card />
            <Info_Card />
            <Orders_Card />
        </div>
    </section>
  );
}

export default DashboardContainer;
