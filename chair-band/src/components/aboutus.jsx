import Head from "next/head";
import styles from "../styles/page.module.scss";
import Link from "next/link";
import Layout from "../components/layout";

export default function AboutUs() {
  return (
    <Layout>
      <div className={styles.container}>
        <Head>
          <title>Chair Website</title>
          <link rel="icon" href="../public/images/chair.webp" />
        </Head>

        <div>
            <img src="" alt="" />
        </div>

        <div className={styles.aboutus_div}>
          <div className={styles.title}>
            <h1>About us</h1>
            <h2>(the band called Chair)</h2>
          </div>



        </div>
      </div>{" "}
    </Layout>
  );
}