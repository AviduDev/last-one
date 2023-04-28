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
          }
        }`
  );

  return projects;
};

// SEO
export const metadata = {
    title: 'Projects',
    description: 'Latest web design and development projects',
  };


export default async function Projects() {
  const projects = await getProjects();
  return (
    <main>
      <Project />

      <ul>
        {projects.map(({ title, slug, mainImage, id }) => (
          <li key={id}>
            <Image
              className={styles.projectImage}
              src={mainImage.url}
              width={mainImage.width}
              height="200"
              alt={title}
            />
            <Link href={`/projects/${slug}`}>
              <h2>{title}</h2>
            </Link>
          </li>
        ))}
      </ul>
    </main>
  );
}
