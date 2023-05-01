import Image from "next/image";
import styles from "./project.module.css";
import Nav from "@/components/Nav";

import { Metadata } from "next";

import { GraphQLClient } from "graphql-request";
import Link from "next/link";

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
              description
              year
              company
              design
              liveSite
              sourceUrl
              tags
              collaboration
              gallery {
                id
                url
                width
                height
              }
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
  return { title: project.title, description: project.description };
}

// ---------------------------------------------------

export default async function ProjectPage({ params }) {
  const project = await getProject(params);
  return (
    <main>
      {/* ---------------top------------------ */}
      <section className={styles.section}>
        <h1 className={styles.heroTitle}>{project.title}</h1>

        {/* <Nav /> */}

        <div className={styles.bottom}>
          <div className={styles.arrow}>🡥</div>
          <p className={styles.description}>{project.description}</p>
        </div>
      </section>

      {/* ------------------details and links------------------- */}

      <section className={styles.detailsSection}>
        <table className={styles.table}>
          <tbody>
            <tr>
              <td className={styles.left}>Company</td>
              <td className={styles.right}>{project.company}</td>
            </tr>

            <tr>
              <td className={styles.left}>Year</td>
              <td className={styles.right}>{project.year}</td>
            </tr>

            <tr>
              <td className={styles.left}>Collaboration</td>
              <td className={styles.right}>{project.collaboration}</td>
            </tr>

            <tr>
              <td className={styles.left}>Company</td>
              <td className={styles.right}>{project.company}</td>
            </tr>

            <tr>
              <td className={styles.left}>Design</td>
              <td className={styles.right}>
                <Link href={project.design} target="_blank">
                  Behance
                </Link>
              </td>
            </tr>

            <tr>
              <td className={styles.left}>Source</td>
              <td className={styles.right}>
                <Link href={project.sourceUrl} target="_blank">
                  GitHub
                </Link>
              </td>
            </tr>

            <tr>
              <td className={styles.left}>Live</td>
              <td className={styles.right}>
                <Link href={project.liveSite} target="_blank">
                  URL
                </Link>
              </td>
            </tr>
          </tbody>
        </table>
      </section>

      {/* ------------------------images------------------------ */}

      <section className={styles.images}>
        <ul>
          {project.gallery.map((image) => {
            return (
              <li key={image.id}>
                <Image
                  className={styles.projectImages}
                  src={image.url}
                  alt={project.title}
                  width={image.width}
                  height={image.height}
                />
              </li>
            );
          })}
        </ul>
      </section>
    </main>
  );
}
