import Head from "next/head";
import styles from "../styles/page.module.scss";
import Link from "next/link";
import Layout from "../components/layout";

export default function Home() {
  return (
    <Layout>
      <div className={styles.container}>
        <Head>
          <title>Chair Website</title>
          <link rel="icon" href="../public/images/chair.webp" />
        </Head>

        <main className={styles.landing_main}>
          <div className={styles.title}>
            <h1>Chair</h1>
            <h2>website</h2>
          </div>
        </main>
      </div>{" "}
    </Layout>
  );
}
