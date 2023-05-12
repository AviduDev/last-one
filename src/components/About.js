import Nav from "./Nav";
import styles from "./about.module.css";

export default function About() {
  return (
    <section className={styles.section}>
      <h1 className={styles.heroTitle}>about</h1>

      <div className={styles.bottom}>
        <p className={styles.arrow}>🡥</p>
        <p className={styles.description}>
          Get to know more about my educations, previous work experiences, and skills I had
          developed.
        </p>
      </div>
    </section>
  );
}
