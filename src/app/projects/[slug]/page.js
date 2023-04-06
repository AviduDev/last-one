import Image from "next/image";
import styles from "./project.module.css";

import { Metadata } from "next";

import { GraphQLClient } from "graphql-request";

// Fetching data from hygraph

const hygraph = new GraphQLClient(
  "https://eu-central-1-shared-euc1-02.cdn.hygraph.com/content/cl9s32g1q2oun01td822bh5s6/master"
);

const getProject = async (params) => {
  const { project } = await hygraph.request(
    `
        query ProjectPageQuery($slug: String!) {
            project(where: {slug: $slug}) {
              title
              mainImage {
                url
                width
                height
              }
              slug
            }
          }
        `,

    {
      slug: params.slug,
    }
  );

  return project;
};

// SEO
export async function generateMetadata({ params, searchParams }) {
  const project = await getProject(params);
  return { title: project.title };
}

// ---------------------------------------------------

export default async function Project({ params }) {
  const project = await getProject(params);
  return (
    <main>
      <h1 className={styles.title}>{project.title}</h1>

      <Image
        src={project.mainImage.url}
        width={project.mainImage.width}
        height={200}
        alt={project.title}
        className={styles.mainImage}
      />
    </main>
  );
}
