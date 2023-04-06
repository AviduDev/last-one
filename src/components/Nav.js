import Link from "next/link";
import "./Nav.css";

export default function Nav() {
    return(
        <nav className="nav">
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