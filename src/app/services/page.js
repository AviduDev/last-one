import Link from "next/link";
import styles from "./services.module.css";
import Services from "@/components/Services";
import { cache } from "react";

// ------------------------------------------
import { GraphQLClient } from "graphql-request";
// ------------------------------------------

const getServices = cache(async () => {
  const hygraph = new GraphQLClient(
    "https://eu-central-1-shared-euc1-02.cdn.hygraph.com/content/cl9s32g1q2oun01td822bh5s6/master"
  );

  const { services } = await hygraph.request(
    `{
      services {
        serviceTitle
        serviceDescription
        relatedServices {
          html
        }
        relatedTools {
          html
        }
        slug
      }
      }`
  );

  return services;
});

// ---------------------------------------------
export const metadata = {
  title: "Services | Web design and development related services",
  description:
    "Avidu provides many services related to web design and development such as branding, logo designing, domain names, web servers and many more.",
};

export default async function ServicesPage() {
  const services = await getServices();

  return (
    <main>
      <section className={styles.section}>
        <h1 className={styles.heroTitle}>services</h1>
        <div className={styles.bottom}>
          <div className={styles.arrow}>🡥</div>
          <ul className={styles.description}>
            {/* ----------------------------------------------------- */}
            <ul className={styles.ul}>
              {services.map(
                ({ serviceTitle, serviceDescription, id, slug }) => (
                  <li key={id} className={styles.projectItem}>
                    <Link href={`/services/${slug}`}>
                      <h2 className={styles.serviceTitle}>{serviceTitle}</h2>
                    </Link>
                  </li>
                )
              )}
            </ul>
            {/* ----------------------------------------------------- */}
          </ul>
        </div>
      </section>
    </main>
  );
}
