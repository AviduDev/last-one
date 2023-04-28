import Link from "next/link";
import styles from "./nav.module.css";

export default function Nav() {
  return (
    <nav className={styles.nav}>
      <ul>
        <li>
          <Link href="/">Home</Link>
        </li>

        <li>
          <Link href="/services">Services</Link>
        </li>

        <li>
          <Link href="/projects">Works</Link>
        </li>

        <li>
          <Link href="/about">About</Link>
        </li>

        <li>
          <Link href="/contact">Contact</Link>
        </li>
      </ul>
    </nav>
  );
}
