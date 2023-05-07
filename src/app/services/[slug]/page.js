import { GraphQLClient } from "graphql-request";
import { cache } from "react";

import styles from "./service.module.css";

// --------------------------------------------
// Fetching data from hygraph

const hygraph = new GraphQLClient(
  "https://eu-central-1-shared-euc1-02.cdn.hygraph.com/content/cl9s32g1q2oun01td822bh5s6/master"
);

const getService = cache(async (params) => {
  const { service } = await hygraph.request(
    `
          query ServicePageQuery($slug: String!) {
              service(where: {slug: $slug}) {
                id
                slug
                serviceDescription
                serviceTitle
                relatedServices {
                html
                }
                relatedTools {
                html
                }
              }
            }
          `,

    {
      slug: params.slug,
    }
  );

  return service;
});

// SEO-----------------------------------------------------
export async function generateMetadata({ params }) {
  const service = await getService(params);
  return {
    title: service.serviceTitle,
    description: service.serviceDescription,
    openGraph: {
      title: service.serviceTitle,
      description: service.serviceDescription,
    },
  };
}

// ---------------------------------------------------

export default async function Service({ params }) {
  const service = await getService(params);

  return (
    <main>
      <section className={styles.section}>
        <h1 className={styles.heroTitle}>{service.serviceTitle}</h1>

        <div className={styles.bottom}>
          <div className={styles.arrow}>🡥</div>
          <p className={styles.description}>{service.serviceDescription}</p>
        </div>
      </section>
    </main>
  );
}
