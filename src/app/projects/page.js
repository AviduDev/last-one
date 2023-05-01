import styles from "./projects.module.css";
import Link from "next/link";
import { Metadata } from "next";
import Project from "@/components/Project";

import { GraphQLClient } from "graphql-request";
import Image from "next/image";

// Fetching projects from hygraph

const getProjects = async () => {
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
};

// SEO
export const metadata = {
  title: "Web design and development works",
  description: "Web design and development related works done for personal and commercial projects.",
};

export default async function Projects() {
  const projects = await getProjects();

  return (
    <main>
      <Project />

      <ul className={styles.ul}>
        {projects.map(({ title, slug, mainImage, id, year, liveSite }) => (
          <li key={id} className={styles.projectItem}>
            <Image
              className={styles.projectImage}
              src={mainImage.url}
              width={mainImage.width}
              height="200"
              alt={title}
            />
            <div className={styles.projectDetails}>
              <Link href={`/projects/${slug}`} className={styles.link}>
                <h2 className={styles.projectTitle} scroll={false}>{title}</h2>
              </Link>
              <p>2022</p>
            </div>

          {/* <a href={liveSite} target="_blank">Live</a> */}
          </li>
        ))}
      </ul>
    </main>
  );
}
