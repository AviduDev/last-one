import styles from "./contact.module.css";

import Nav from "./Nav";

import Form from "@/components/Form";
import Faqs from "@/components/Faqs";
import Link from "next/link";

export default function Contact() {
  return (
    <section className={styles.section}>
      <h1 className={styles.heroTitle}>contact</h1>

      {/* <Nav /> */}

      <div className={styles.bottom}>
        <div className={styles.arrow}>🡥</div>
        <ul className={styles.description}>
          <li>
            <Link href="https://www.linkedin.com/in/avidu-web-designer-from-sri-lanka/" target="_blank" className={styles.contactLink}>
              LinkedIn 🡥
            </Link>
          </li>
          <li>
            <Link href="https://www.behance.net/avidu" target="_blank" className={styles.contactLink}>
              Behance 🡥
            </Link>
          </li>
          <li>
            <Link href="https://github.com/AviduDev" target="_blank" className={styles.contactLink}>
              GitHub 🡥
            </Link>
          </li>
          <li>
            <a href="mailto:avidu97@gmail.com" className={styles.contactLink}>
              avidu97@gmail.com 🡥
            </a>
          </li>
        </ul>
      </div>
    </section>
  );
}
