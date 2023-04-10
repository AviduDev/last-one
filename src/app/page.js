import Image from 'next/image'
import styles from './page.module.css'
import Link from 'next/link'
import Hero from '@/components/Hero'
import Description from '@/components/Description'
import Projects from '@/components/Projects'
import Services from '@/components/Services'
import Process from '@/components/Process'
import Contact from '@/components/Contact'



export default function Home() {
  return (
    <main className={styles.main}>
      {/* ----------------------------HERO---------------------------- */}
      <Hero />
      {/* ----------------------------DESCRIPTION---------------------------- */}
      <Description />
      {/* ----------------------------PROJECTS---------------------------- */}
      <Projects />
      {/* ----------------------------SERVICES---------------------------- */}
      <Services />
      {/* ----------------------------PROCESS---------------------------- */}
      <Process />
      {/* ----------------------------CONTACT---------------------------- */}
      <Contact />
    </main>
  )
}
