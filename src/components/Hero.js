"use client";

import { useRef, useEffect } from "react";

import styles from "./hero.module.css";
import Nav from "./Nav";

export default function Hero() {
  useEffect(() => {
    // --------------------------------------------

    const letters = "abcdefghijklmnopqrstuvwxyz";

    const b = document.querySelector(`.${styles.section}`);

    document.querySelectorAll(`.${styles.heroTitle}`).forEach((h1) => {
      h1.dataset.value = h1.innerText;

      h1.onclick = (event) => {
        let interactions = 0;
        const interval = setInterval(() => {
          event.target.innerText = event.target.innerText
            .split("")
            .map((letter, index) => {
              if (index < interactions) {
                return event.target.dataset.value[index];
              }
              return letters[Math.floor(Math.random() * 26)];
            })
            .join("");

          if (interactions >= event.target.innerText.length) {
            clearInterval(interval);
          }

          interactions += 1 / 3;
        }, 30);
      };
    });

    // --------------------------------------------
  }, []);

  return (
    <section className={styles.section}>
      <h1 className={styles.heroTitle}>
        avidu
        <br />
        sampath
      </h1>

      {/* <Nav /> */}

      <div className={styles.bottom}>
        <div className={styles.arrow}>🡥</div>
        <p className={styles.description}>
          Avidu is a creative website designer and front-end developer. Who uses
          modern technologies to create best possible experience to the user
          and, also cost effectiveness to the client.
        </p>
      </div>
    </section>
  );
}
