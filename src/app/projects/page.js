

import styles from "./projects.module.css";
import Link from "next/link";
import { Metadata } from "next";
import Project from "@/components/Project";
import { cache } from "react";


import { GraphQLClient } from "graphql-request";
import Image from "next/image";



// Fetching projects from hygraph

const getProjects = cache(async () => {
  const hygraph = new GraphQLClient(
    "https://eu-central-1-shared-euc1-02.cdn.hygraph.com/content/cl9s32g1q2oun01td822bh5s6/master"
  );

  const { projects } = await hygraph.request(
    `{
        projects {
            slug
            mainImage {
              width
              url
              height
            }
            title
            id
            year
          }
        }`
  );

  return projects;
});

// SEO
export const metadata = {
  title: "Works | eb design and development works",
  description:
    "Web design and development related works done for personal and commercial projects.",
};

export default async function Projects() {
  const projects = await getProjects();

  return (
    <main>
      <section className={styles.section}>
        {/* ------------------------------------------------ */}
        <h1 className={styles.heroTitle}>works</h1>

        {/* --------------------------------------------------- */}
        <div className={styles.bottom}>
          <div className={styles.arrow}>🡦</div>

          {/* ---------------WORK LIST---------------------- */}
          <ul className={styles.ul}>
            {projects.map(({ title, slug, id }) => (
              <li key={id} className={styles.projectItem}>
                <Link
                  href={`/projects/${slug}`}
                  className={styles.link}
                  scroll={false}
                  shallow={true}
                >
                  <h2 className={styles.projectTitle}>{title}</h2>
                </Link>

                {/* <a href={liveSite} target="_blank">Live</a> */}
              </li>
            ))}
          </ul>
        </div>

        {/* ---------------------------------------------------- */}
      </section>
    </main>
  );
}
