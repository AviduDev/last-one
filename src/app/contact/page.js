import styles from "./contact.module.css";
import Contact from "@/components/Contact";

// SEO
export const metadata = {
  title: "Contact avidu for get more info",
  description:
    "You can ask anything related to web design and development.",
};

export default function ContactPage() {
  return (
    <main>
      <Contact />
    </main>
  );
}
