import styles from "../styles/page.module.scss";
import Image from "next/image";
import ChairModeButton from "../components/chairmodeButton";
import { TextModifierContext } from "./TextModifier";
import { useEffect, useContext } from "react";
import babyCura from "../../public/images/babyCura.png";
import babyHubert from "../../public/images/babyHubert.png";

require("isomorphic-fetch");

// npm install --save isomorphic-fetch

export default function AboutUs({ images, pageState, setPageState }) {
  const { modifyEnabled, modifyAllText } = useContext(TextModifierContext);

  useEffect(() => {
    if (modifyEnabled) {
      modifyAllText();
    }
  }, []);

  console.log(
    images[0]._embedded["wp:featuredmedia"][0].media_details.sizes.full
      .source_url
  );

  return (
    <div className={styles.animationCont}>
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
            loading="eager"

            // objectFit="contain"
          />
        </div>
        {/* <Wordpress images={images} /> */}
        <div className={styles.title}>
          <h1>about us</h1>
          <h2>(written by AI)</h2>
        </div>
        <div className={styles.text_div} id={styles.firsttext}>
          <p>
            Chair is more than just a band; we're an international duo of
            multimedia artists - Cura and Hubert Kurkiewicz. Our passion lies in
            capturing the essence of everyday life with a twist of humor that
            keeps things extraordinary. We create music that demands attention
            and resonates with genuine emotions. From the moment Chair was
            formed, we've embraced the visual aspect of our work, leveraging
            social media and showcasing our art in multiple galleries. We love
            collaborating with photographers, musicians, and artists of all
            kinds, so don't hesitate to reach out if you'd like to join forces.
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
            loading="eager"
            // objectFit="contain"
          />
        </div>
        <div className={styles.text_div} id={styles.secondtext}>
          <p>
            We like to call our music style "slay punk," although it's hard to
            put a label on it. What matters most is the emotional depth we
            infuse into our songs, unapologetically expressing our fears and
            vulnerabilities.
          </p>
        </div>
        <div className={styles.imgcont} id={styles.thirdimage1}>
          <Image
            src={
              images[0]._embedded["wp:featuredmedia"][0].media_details.sizes
                .full.source_url
            }
            alt=""
            layout="fill"
            loading="eager"
          />{" "}
        </div>
        <div className={styles.babyImgCont}>
          <ChairModeButton pageState={pageState} setPageState={setPageState}>
            <Image
              id={styles.babyHubert2}
              className={`${styles.baby} `}
              src={babyHubert}
              alt="baby hubert"
              loading="eager"
            />{" "}
          </ChairModeButton>
          <div className={styles.imgcont} id={styles.thirdimage2}>
            <Image
              src={
                images[0]._embedded["wp:featuredmedia"][0].media_details.sizes
                  .full.source_url
              }
              alt=""
              layout="fill"
              loading="eager"
            />{" "}
          </div>
        </div>
        <div className={styles.text_div} id={styles.thirdtext}>
          <p>
            In June 2022, just a year after our band's formation, we released
            our debut EP, "Po Co Muzyka" ("Why bother with music" in English).
            Despite its absurdity, the mini-album received a very positive
            response and quickly became the album of the week on several Polish
            radio stations. This recognition propelled us into the spotlight,
            earning us coveted spots at renowned festivals in Poland, including
            Off Festival, Meskie Granie, Soundrive, and Great September.
          </p>
          <p>
            Chair is an adventure in music and art - a captivating journey that
            defies expectations. Join us as we continue to push the boundaries
            of creativity and share our passion for authentic expression.
          </p>
          <div className={styles.imgcont2}>
            <ChairModeButton pageState={pageState} setPageState={setPageState}>
              <Image
                id={styles.babyCura}
                className={styles.baby}
                src={babyCura}
                alt="baby cura"
                loading="eager"
              />
            </ChairModeButton>
            <ChairModeButton pageState={pageState} setPageState={setPageState}>
              <Image
                id={styles.babyHubert1}
                className={styles.baby}
                src={babyHubert}
                alt="baby hubert"
                loading="eager"
              />
            </ChairModeButton>
          </div>
        </div>
      </div>
      <div>
        {/* <ChairModeButton
          pageState={pageState}
          setPageState={setPageState}
        ></ChairModeButton> */}
      </div>
    </div>
  );
}
