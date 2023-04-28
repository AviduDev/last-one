import styles from "./hero.module.css";
import Nav from "./Nav";

export default function Hero() {
  return (
    <section className={styles.section}>
      <h1 className={styles.heroTitle}>
        avidu
        <br />
        sampath
      </h1>

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
