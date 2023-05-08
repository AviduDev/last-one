import styles from "./page.module.css";
import Hero from "@/components/Hero";
import Script from "next/script";



{/* <Script src="//code.jquery.com/jquery.min.js"></Script>
<Script src="dist/descrambler.min.js"></Script> */}


export const metadata = {
  title: "Avidu | Front-End Developer and Designer",
  description:
    "Avidu is a creative website designer and front-end developer from sri lanka. Who works with medium size businesses to individuals to increase their online appearance and get more sales.",
  keywords: [
    "Web Design",
    "Web Development",
    "Frontend",
    "NextJs",
    "Avidu",
    "Design",
  ],
  creator: "Avidu Sampath",
  publisher: "Avidu Sampath",
  siteName: "Avidu",
  type: "website",
};


export default function Home() {
  return (
    <main>
      <Hero />
    </main>
  );
}
