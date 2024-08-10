import React, {useEffect, useState} from "react";
import Card from "./Card";
import Tasks_Card from "./Tasks_Card";
import Deals_Card from "./Deals_Card";
import Info_Card from "./Information_Card";
import Orders_Card from "./Orders_Card";

function DashboardContainer() {
  return (
    <section className="dashboard">
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
