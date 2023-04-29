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
          Avidu is a creative website designer and front-end developer. Who uses
          modern technologies to create best possible experience to the user
          and, also cost effectiveness to the client.
        </p>
      </div>
    </section>
  );
}
