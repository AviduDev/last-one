import Nav from "./Nav";
import styles from "./about.module.css";

export default function About() {
  return (
    <section className={styles.section}>
      <h1 className={styles.heroTitle}>about</h1>

      <Nav />

      <div className={styles.bottom}>
        <p className={styles.arrow}>🡥</p>
        <p className={styles.description}>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Harum,
          dolores? Odit explicabo vel corrupti id facilis voluptates amet illo
          non.
        </p>
      </div>
    </section>
  );
}
