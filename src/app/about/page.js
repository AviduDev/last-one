import styles from "./about.module.css";
import About from "@/components/About";

// SEO
export const metadata = {
  title: "Get to know about avidu and his background",
  description:
    "Learn more about his educational, work experience, skills, and technologies he use.",
};

export default function AboutPage() {
  return (
    <main>
      <About />

      {/* ------------------education------------------ */}
      <section className={styles.education}>
        <h2>education</h2>
        <table className={styles.table}>
          <tbody>
            <tr>
              <td className={styles.year}>2022</td>
              <td className={styles.data}>
                Trainee Fullstack Web Developer
                <br />
                Open Univercity of Moratuwa
              </td>
            </tr>
          </tbody>
        </table>
      </section>
      {/* ------------------skills----------------- */}
      <section className={styles.skills}>
        <h2>skills</h2>

        <table className={styles.table}>
          <tbody>
            <tr>
              <td className={styles.year}>2018</td>
              <td className={styles.data}>Logo Design</td>
            </tr>

            <tr>
              <td className={styles.year}>2019</td>
              <td className={styles.data}>Web Design</td>
            </tr>

            <tr>
              <td className={styles.year}>2021</td>
              <td className={styles.data}>Video Editing</td>
            </tr>
          </tbody>
        </table>
      </section>
      {/* ------------------technologies---------------- */}
      <section className={styles.technologies}>
        <h2>technologies</h2>

        <table className={styles.table}>
          <tbody>
            <tr>
              <td className={styles.year}>2019</td>
              <td className={styles.data}>WordPress</td>
            </tr>

            <tr>
              <td className={styles.year}>2020</td>
              <td className={styles.data}>Webflow</td>
            </tr>

            <tr>
              <td className={styles.year}>2021</td>
              <td className={styles.data}>Next.js</td>
            </tr>

            <tr>
              <td className={styles.year}>2022</td>
              <td className={styles.data}>SvelteKit</td>
            </tr>
          </tbody>
        </table>
      </section>
      {/* ------------------work experience--------------- */}
      <section className={styles.experience}>
        <h2>experience</h2>

        <table className={styles.table}>
          <tbody>
            <tr>
              <td className={styles.year}>2022</td>
              <td className={styles.data}>Freelancer</td>
            </tr>
          </tbody>
        </table>
      </section>
    </main>
  );
}
