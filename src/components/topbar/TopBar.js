import React from "react";
import styles from "./styles.js";
import { NotificationsNone, Language, Settings } from "@material-ui/icons";

export default function TopBar() {
  return (
    <div style={styles.topBar}>
      <div style={styles.topbarWrapper}>
        <div style={styles.topLeft}>
          <span style={styles.logo}>Inspiration Admin</span>
        </div>
        <div style={styles.topRight}>
          <div style={styles.tobarIconContainer}>
            <NotificationsNone />
            <span style={styles.topIconBadge}>4</span>
          </div>
          <div style={styles.tobarIconContainer}>
            <Language />
            <span style={styles.topIconBadge}>2</span>
          </div>
          <div style={styles.tobarIconContainer}>
            <Settings />
          </div>
          <img
            src="https://secure.gravatar.com/avatar/e88a33fa0b1b874594a4782c46613eac?s=800&d=identicon"
            alt=""
            style={styles.topAvatar}
          />
        </div>
      </div>
    </div>
  );
}
