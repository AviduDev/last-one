import styles from "./project.module.css";
import Nav from "./Nav.js";

export default function Project() {
  return (
    <section className={styles.section}>
      <h1 className={styles.heroTitle}>works</h1>

      {/* <Nav /> */}

      <div className={styles.bottom}>
        <div className={styles.arrow}>🡥</div>
        <p className={styles.description}>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Harum,
          dolores? Odit explicabo vel corrupti id facilis voluptates amet illo
          non.
        </p>
      </div>
    </section>
  );
}
