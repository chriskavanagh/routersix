import React from "react";
import styles from "../styles/err.module.css";
import { useRouteError } from "react-router-dom";

export default function Error() {
  let error = useRouteError();
  console.error(error.status);
  return (
    <div className={styles.container}>
      <h1 className={styles.head}>Error: 404 Not Found!</h1>
      <div className={styles.txt}>
        <h2>Better Luck Next Time. . .</h2>
      </div>
    </div>
  );
}
