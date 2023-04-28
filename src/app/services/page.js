import styles from "./services.module.css";
import Services from "@/components/Services";

export default function ServicesPage() {
  return (
    <main>
      <section className={styles.section}>
        <Services />
      </section>
    </main>
  );
}
