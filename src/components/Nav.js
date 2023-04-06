import Link from "next/link";
import styles from "./nav.module.css";

export default function Nav() {
    return(
        <nav className={styles.nav}>
        <Link href="/">
          Home
        </Link>
        <Link href="/services">
          Services
        </Link>
        <Link href="/projects">
          Projects
        </Link>
        <Link href="/about">
          About
        </Link>
        <Link href="/contact">
          Contact
        </Link>
      </nav>
    )
}