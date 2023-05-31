import Link from "next/link";
import Head from "next/head";
import styles from "../styles/newrelease.module.scss";

export default function NewRelease() {
  return (
    <>
      <Head>
        <title>Chair Game</title>
      </Head>

        <div className={styles.newrelCont}>
          <h1>Coming soon</h1>
          <h2>
            <Link href="/">Back to home</Link>
          </h2>
        </div>
    </>
  );
}