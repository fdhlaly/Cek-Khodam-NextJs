"use client";

import { useState } from "react";
import data from "./data";
import styles from "./page.module.css";

export default function Home() {
  const [result, setResult] = useState("");

  const submitValue = () => {
    const input = document.getElementById("input").value.trim();

    if (!input) {
      alert("Mohon isi nama kamu!");
    } else {
      const randomIndex = Math.floor(Math.random() * data.length);
      setResult(data[randomIndex]);
    }
    document.getElementById("input").value = "";
  };

  return (
    <div className={styles.container}>
      <div className={styles.box}>
        <div className={styles.formInput}>
          <input
            type="text"
            id="input"
            name="input"
            placeholder="Cek khodam kamu disini yuk!"
            className={styles.input}
          />
          <button id="cek" onClick={submitValue} className={styles.button}>
            Cek
          </button>
        </div>
        <div className={styles.result}>
          <p>{result}</p>
        </div>
      </div>
    </div>
  );
}
