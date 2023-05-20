import styles from "../styles/page.module.scss";
import Image from "next/image";
import aboutus_1 from "../public/images/aboutus_1.jpg";
import aboutus_2 from "../public/images/aboutus_2.jpg";
import Link from "next/link";

export default function AboutUs() {
  return (
    <div className={`${styles.gridSetup} ${styles.grid2}`}>
      <div className={styles.imgcont} id={styles.firstimage}>
        <Image priority src={aboutus_1} alt="" />
      </div>

      <div className={styles.title}>
        <h1>about us</h1>
        <h2>(the band called Chair)</h2>
      </div>

      <div className={styles.text_div} id={styles.firsttext}>
        <p>
          Chair is an international duo of multimedia artists, Cura and Hubert
          Kurkiewicz. In their works, they include observations of everyday life
          lined with extraordinary humor. They say that they make music for the
          attention and to feel appreciated. From the beginning of their
          existence, they have paid special attention to the visual aspect of
          their work, confidently using social media and appearing within art
          galleries.
        </p>
      </div>

      <div className={styles.imgcont} id={styles.secondimage}>
        <Image priority src={aboutus_2} alt="" />
      </div>

      <div className={styles.text_div} id={styles.secondtext}>
        <p>
          In June 2022, a year after the band was founded, they debut with the
          EP “Po Co Muzyka” (“Why bother with music”, eng.). The mini-album,
          despite being quite absurd, was met with a very positive feedback,
          becoming the album of the week of most Polish radio stations, thus
          opening the way to the largest festivals in Poland (Off Festival,
          Meskie Granie, Soundrive, Great September).
        </p>
      </div>
    </div>
  );
}
