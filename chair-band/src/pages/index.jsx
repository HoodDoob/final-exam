import Head from "next/head";
import styles from "../styles/page.module.scss";
import Link from "next/link";
import Layout from "../components/layout";
import Outnow from "@/components/outnow";
import { useState, useEffect } from "react";

export default function Home() {
  const [pageState, setPageState] = useState(1);

  function changePage(x) {
    setPageState(x);
    console.log("the funniest bumber ever is " + pageState);
  }
  return (
    <Layout
      pageState={pageState}
      setPageState={setPageState}
      changePage={changePage}
    >
      <div className={styles.container}>
        <Head>
          <title>Chair Website</title>
          <link rel="icon" href="../public/images/chair.webp" />
        </Head>

        <div className={styles.landing_div}>
          <div className={styles.title}>
            <h1>Chair</h1>
            <h2>website</h2>
          </div>

          <Outnow></Outnow>
        </div>
      </div>
    </Layout>
  );
}
