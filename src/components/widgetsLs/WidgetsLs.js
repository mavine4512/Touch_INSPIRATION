import React from "react";
import styles from "./styles.js";

export default function WidgetLg({ data }) {
  return (
    <div style={styles.widgetLg}>
      <h3 style={styles.widgetLgTitle}>Best Employee </h3>
      <table style={styles.widgetLgTable}>
        <thead>
          <tr>
            <th style={styles.widgetLgTh}>Name</th>
            <th style={styles.widgetLgTh}>Email</th>
            <th style={styles.widgetLgTh}>Occupation</th>
          </tr>
        </thead>
        <tbody>
          {data &&
            data.map((item, index) => {
              return (
                <tr key={index}>
                  <td style={styles.widgetLgUser}>
                    <img
                      src="https://i.pinimg.com/originals/6c/3d/03/6c3d03b8cfb03a71b34a7d8ec00acd2a.jpg"
                      alt=""
                      style={styles.widgetLgImg}
                    />
                    <span style={styles.widgetLgName}>{item.name}</span>
                  </td>
                  <td style={styles.widgetLgemail}>{item.email}</td>
                  <td style={styles.widgetLgemail}>{item.occupation}</td>
                </tr>
              );
            })}
        </tbody>
      </table>
    </div>
  );
}
