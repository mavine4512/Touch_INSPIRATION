import React, { useState } from "react";
import styles from "./styles.js";
import {
  ChatBubbleOutline,
  MailOutline,
  PermIdentity,
  Timeline,
  TrendingUp,
  Home,
} from "@material-ui/icons";
import { useNavigate } from "react-router-dom";
import { adminMenu } from "../../constants/Menu";

const menuItems = [
  {
    name: "Home",
    icon: <Home />,
    path: adminMenu.home,
  },
  {
    name: "Users",
    icon: <PermIdentity />,
    path: adminMenu.users,
  },
  {
    name: "Analytics",
    icon: <Timeline />,
    path: adminMenu.analytics,
  },
  {
    name: "Sales",
    icon: <TrendingUp />,
    path: adminMenu.sales,
  },
  {
    name: "Mail",
    icon: <MailOutline />,
    path: adminMenu.mail,
  },
  {
    name: "Messages",
    icon: <ChatBubbleOutline />,
    path: adminMenu.messages,
  },
];

export default function Sidebar() {
  const navigate = useNavigate();

  function isActive(routeName) {
    const pathName = window.location.pathname;

    return pathName === routeName;
  }

  const handleRedirect = (path) => {
    navigate(path);
  };

  return (
    <div style={styles.sidebar}>
      <div style={styles.sidebarWarapper}>
        <div style={styles.sidebarMenu}>
          <h3 style={styles.sidebarTitle}>Dashboard</h3>

          <ul style={styles.sidebarList}>
            {menuItems.map((item, key) => (
              <li
                key={key}
                style={
                  isActive(item.path)
                    ? { ...styles.sidebarListItem, ...styles.active }
                    : styles.sidebarListItem
                }
                onClick={() => handleRedirect(item.path)}
              >
                {item.icon}
                {item.name}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
