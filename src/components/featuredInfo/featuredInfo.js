import React from "react";
import styles from "./styles.js";
import { ArrowDownward, ArrowUpward } from "@material-ui/icons";

export default function FeacturedInfo({ data }) {
  const result = data.length;
  return (
    <div style={styles.featured}>
      <div style={styles.featuredItem}>
        <span style={styles.featuredTitle}>Users</span>
        <div style={styles.featuredMoneyContainer}>
          <span style={styles.featuredMoney}>{result}</span>
          <span style={styles.featuredMoneyRate}>
            -12 <ArrowDownward style={styles.featuredIconNegative} />
          </span>
        </div>
        <span style={styles.featureSub}>Compared to last Year</span>
      </div>
      <div style={styles.featuredItem}>
        <span style={styles.featuredTitle}>Dapartments</span>
        <div style={styles.featuredMoneyContainer}>
          <span style={styles.featuredMoney}>15</span>
          <span style={styles.featuredMoneyRate}>
            -4% <ArrowDownward style={styles.featuredIconNegative} />
          </span>
        </div>
        <span style={styles.featureSub}>Improvement compared to last year</span>
      </div>
      <div style={styles.featuredItem}>
        <span style={styles.featuredTitle}>Performents</span>
        <div style={styles.featuredMoneyContainer}>
          <span style={styles.featuredMoney}>4,505</span>
          <span style={styles.featuredMoneyRate}>
            +3.4% <ArrowUpward style={styles.featuredIconPositive} />
          </span>
        </div>
        <span style={styles.featureSub}>Compared to last Year</span>
      </div>
    </div>
  );
}
