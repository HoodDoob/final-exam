import Head from "next/head";
import styles from "../styles/page.module.scss";
import Link from "next/link";
//import Layout from "../components/layout"

export default function Home() {
  return (
    <>
    <div className={styles.container}>
      <Head>
        <title>Chair Website</title>
        <link rel="icon" href="../public/images/chair.webp" />
      </Head>

      <main>
        <h1>Chair</h1>
        <h2>website</h2>
        <h1 className={styles.title}>
          new rlease here<Link href="/newrelease">OUT NOW</Link>
        </h1>
      </main>
    </div>
    </>
  );
}