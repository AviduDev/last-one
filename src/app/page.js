import Image from 'next/image'
import styles from './page.module.css'
import Link from 'next/link'
import Hero from '@/components/Hero'



export default function Home() {
  return (
    <main className={styles.main}>
      <Hero />
    </main>
  )
}
