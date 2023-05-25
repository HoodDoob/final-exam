import styles from "../styles/page.module.scss";
import Image from "next/image";
import aboutus_1 from "../public/images/aboutus_1.jpg";
import aboutus_2 from "../public/images/aboutus_2.jpg";
import aboutus_3 from "../public/images/aboutus_3.jpg";
import { useState, useEffect } from "react";
import Link from "next/link";
import Wordpress from "./wordpress";
import fetchPosts from "./wordpress";
require("isomorphic-fetch");
// npm install --save isomorphic-fetch

export default function AboutUs({ images }) {
  console.log(
    images[0]._embedded["wp:featuredmedia"][0].media_details.sizes.full
      .source_url
  );

  return (
    <div>
      <div className={`${styles.gridSetup} ${styles.grid2}`}>
        <div className={styles.imgcont} id={styles.firstimage}>
          <Image
            src={
              images[2]._embedded["wp:featuredmedia"][0].media_details.sizes
                .full.source_url
            }
            alt=""
            // width={`100`}
            // height={100}
            layout="fill"
            // objectFit="contain"
          />
        </div>
        {/* <Wordpress images={images} /> */}
        <div className={styles.title}>
          <h1>about us</h1>
          <h2>(the band called Chair)</h2>
        </div>
        <div className={styles.text_div} id={styles.firsttext}>
          <p>
            Chair is an international duo of multimedia artists — Cura and
            Hubert Kurkiewicz. In our works, we include observations of everyday
            life lined with extraordinary humor. We make music to get attention
            and to feel appreciated. Since we formed Chair, we have paid special
            attention to the visual aspect of their work, confidently using
            social media and appearing within art galleries. We like to
            collaborate with photographers, musicians and artists in general, so
            pop us a message if you feel like we could work together.
          </p>
        </div>
        <div className={styles.imgcont} id={styles.secondimage}>
          <Image
            src={
              images[1]._embedded["wp:featuredmedia"][0].media_details.sizes
                .full.source_url
            }
            alt=""
            // width={`100`}
            // height={100}
            layout="fill"
            // objectFit="contain"
          />
        </div>
        <div className={styles.text_div} id={styles.secondtext}>
          <p>
            We like to call our music slay punk, from the lack of a better term.
            The grotesque and absurdity surrounding Chair, however, do not
            distract from what is most important - music filled with true
            emotions and fears.
          </p>
        </div>
        <div className={styles.imgcont} id={styles.thirdimage}>
          <Image
            src={
              images[0]._embedded["wp:featuredmedia"][0].media_details.sizes
                .full.source_url
            }
            alt=""
            // width={`100`}
            // height={100}
            layout="fill"
            // objectFit="contain"
          />
        </div>{" "}
        <div className={styles.text_div} id={styles.thirdtext}>
          <p>
            In June 2022, a year after the band was founded, we debuted with an
            EP “Po Co Muzyka”(“Why bother with music”, eng.). The mini-album,
            despite being quite absurd, was met with a very positive feedback,
            becoming the album of the week of most Polish radio stations, thus
            opening us the way to the largest festivals in Poland (Off Festival,
            Meskie Granie, Soundrive, Great September).
          </p>
        </div>
      </div>
    </div>
  );
}

// export async function getStaticProps() {
//   const res = await fetch("https://lucaszago.dk/vlp/wp-json/wp/v2/artworks");
//   const data = await res.json();
//   console.log(data);
//   return {
//     props: {
//       data,
//     },
//   };
// }
