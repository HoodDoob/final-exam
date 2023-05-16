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

          <div className={styles.content_div}>
            <p>
              Chair is an international duo of multimedia artists, Cura and
              Hubert Kurkiewicz. In their works, they include observations of
              everyday life lined with extraordinary humor. They say that they
              make music for the attention and to feel appreciated. From the
              beginning of their existence, they have paid special attention to
              the visual aspect of their work, confidently using social media
              and appearing within art galleries.
            </p>

            <img src="" alt="" />

            <p>
              In June 2022, a year after the band was founded, they debut with
              the EP “Po Co Muzyka” (“Why bother with music”, eng.). The
              mini-album, despite being quite absurd, was met with a very
              positive feedback, becoming the album of the week of most Polish
              radio stations, thus opening the way to the largest festivals in
              Poland (Off Festival, Meskie Granie, Soundrive, Great September).
            </p>
          </div>
        </div>
      </div>{" "}
    </Layout>
  );
}
