import styles from "./page.module.css";
import Hero from "@/components/Hero";
import Script from "next/script";

<Script src="//code.jquery.com/jquery.min.js"></Script>


{/* <Script src="//code.jquery.com/jquery.min.js"></Script>
<Script src="dist/descrambler.min.js"></Script> */}


export default function Home() {
  return (
    <main>
      <Hero />
    </main>
  );
}
