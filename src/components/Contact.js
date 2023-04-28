import styles from "./contact.module.css";

import Nav from "./Nav";

import Form from "@/components/Form";
import Faqs from "@/components/Faqs";

export default function Contact() {
  return (
    <main>
      <section className={styles.section}>
        <h1 className={styles.heroTitle}>contact</h1>

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
      <Form />
      <Faqs />
    </main>
  );
}
