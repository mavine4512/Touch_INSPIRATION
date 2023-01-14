import React from "react";
import Sidebar from "../sidebar/Sidebar";
import TopBar from "../topbar/TopBar";
import Home from "../../pages/Home/Home";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import UserList from "../../pages/UsersList/UserList";
import User from "../../pages/user/User";
import SalesPage from "../../pages/sales/Sales";
import AnalyticsPage from "../../pages/analytics/Analytics";
import MailPage from "../../pages/mail/mail";
import MessagesPage from "../../pages/messages/messages";
import { adminMenu } from "../../constants/Menu";

function RouteApp() {
  return (
    <Router>
      <TopBar />
      <div style={{ display: "flex", marginTop: "10px" }}>
        <Sidebar />
        <Routes>
          <Route exact path={adminMenu.home} element={<Home />} />
          <Route path={adminMenu.sales} element={<SalesPage />} />
          <Route path={adminMenu.analytics} element={<AnalyticsPage />} />
          <Route path={adminMenu.users} element={<UserList />} />
          <Route path={adminMenu.user} element={<User />} />
          <Route path={adminMenu.mail} element={<MailPage />} />
          <Route path={adminMenu.messages} element={<MessagesPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default RouteApp;
