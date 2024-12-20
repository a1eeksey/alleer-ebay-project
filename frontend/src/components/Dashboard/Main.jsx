import React from "react";
import { Routes, Route, Navigate } from 'react-router-dom';

import DashboardContainer from "./Dashboard_Block/DashboardContainer";
import StockContainer from "./StockManagement_Block/StockContainer";
import CreateItem from "./StockManagement_Block/CreateItem";
import ViewItem from "./StockManagement_Block/ViewItem";
import InboxContainer from "./Email_Block/InboxContainer";
import ComposeContainer from "./Email_Block/ComposeContainer";
import CalendarContainer from "./Calendar_Block/CalendarContainer";
import EbayContainer from "./Ebay/EbayContainer";
import AmazonContainer from "./Amazon_Block/AmazonContainer";

function Main() {
  return (
    <main id="main" className="main">
      <Routes>
        <Route path='/' element={<DashboardContainer pageTitle={"Dashboard"} />}/>
        <Route path='/dashboard/stock-management' element={<StockContainer pageTitle={"Stock Management"} />}/>
        <Route path='/dashboard/add-item' element={<CreateItem pageTitle={"Add item"} />}/>
        <Route path='/dashboard/view-item/:itemId' element={<ViewItem pageTitle={ "Item details"} />}/>
        <Route path='/apps/calendar' element={<CalendarContainer pageTitle={"Calendar"} />}/>
        <Route path='/apps/email' element={<InboxContainer pageTitle={"Inbox"} />}/>
        <Route path='/email/inbox' element={<InboxContainer pageTitle={"Inbox"} />}/>
        <Route path='/e-commerce/ebay' element={<EbayContainer pageTitle={"Ebay"} />}/>
        <Route path='/e-commerce/amazon' element={<AmazonContainer pageTitle={"Amazon"} />}/>
        <Route path='/email/compose' element={<ComposeContainer pageTitle={"Compose"} />}/>
      </Routes>
    </main>
  );
}

export default Main;
