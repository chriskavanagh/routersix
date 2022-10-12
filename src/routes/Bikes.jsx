import React from "react";
import styles from "../styles/Bikes.module.css";

export default function Bikes() {
  return (
    <div className={styles.top}>
      <h1 className={styles.top__text}>Bikes</h1>
      <h2 className={styles.bottom__text}>We sell bikes too!</h2>
    </div>
  );
}
