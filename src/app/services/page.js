import styles from "./services.module.css";
import Services from "@/components/Services";

export const metadata = {
  title: "Web design and development related services",
  description:
    "Avidu provides many services related to web design and development such as branding, logo designing, domain names, web servers and many more.",
};

export default function ServicesPage() {
  return (
    <main>
      <section className={styles.section}>
        <Services />
      </section>
    </main>
  );
}
