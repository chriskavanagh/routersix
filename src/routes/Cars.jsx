import React from "react";
import { Link } from "react-router-dom";
import styles from "../styles/cars.module.css";

export default function Cars() {
  return (
    <div style={{ marginTop: "3rem", color: "#E2DFD2" }}>
      <h1>Our Cars</h1>
      <h2 style={{ marginTop: "1rem", color: "white", alignText: "center" }}>
        Come see are huge lineup of Cars!
      </h2>
      <div className={styles.links}>
        <Link className={styles.link} to="/">
          Go back home.
        </Link>
        <Link className={styles.link} to="/bikes">
          Bikes
        </Link>
        <Link className={styles.link} to="/suvs">
          SUV'S
        </Link>
      </div>
    </div>
  );
}
