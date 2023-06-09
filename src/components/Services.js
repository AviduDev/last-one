import styles from "./services.module.css";
import Nav from "./Nav";
import Link from "next/link";

export default function Services() {
  return (
    <section className={styles.section}>
      <h1 className={styles.heroTitle}>services</h1>
      <div className={styles.bottom}>
        <div className={styles.arrow}>🡥</div>
        <ul className={styles.description}>
          <li>
            <Link href="/">Web Design</Link>
          </li>

          <li>
            <Link href="/">Front-end Development</Link>
          </li>

          <li>
            <Link href="/">Design</Link>
          </li>

          <li>
            <Link href="/">Other Stuff</Link>
          </li>
        </ul>
      </div>
    </section>
  );
}
