import Head from "next/head";
import styles from "../styles/page.module.css";
import Link from "next/link";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Chair Website</title>
        <link rel="icon" href="../public/images/chair.webp" />
      </Head>

      <main>
        <h1 className={styles.title}>
          <Link href="/newrelease">OUT NOW</Link>
        </h1>
      </main>
    </div>
  );
}
