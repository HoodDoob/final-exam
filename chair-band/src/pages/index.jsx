import Layout from "../components/layout";
import Head from "next/head";
import { useState, useEffect } from "react";
import Landing from "../components/landing";
import AboutUs from "../components/aboutus";
import Shows from "@/components/shows";
import Contact from "../components/contact";
import ChairTV from "@/components/chairtv";
import GloryHole from "@/components/gloryhole";
import Clips from "@/components/clips";
import Liveshows from "@/components/liveshows";
import SillyStuff from "@/components/sillystuff";
import Flying from "../components/flying_chairs";
import { motion, AnimatePresence } from "framer-motion";
// import Icon1 from "../public/images/favicon-16x16.png";
// import Icon2 from "../public/images/favicon-32x32.png";
// import Icon3 from "../public/images/favicon.ico";

export default function Home({ imagedata, videodata }) {
  const [pageState, setPageState] = useState(1);
  const [burgerState, setBurgerState] = useState(false);
  const [images, setImages] = useState([]);
  const [videos, setVideos] = useState([]);
  const [openedVideo, setOpenedVideo] = useState();
  const [popupState, setPopupState] = useState(false);
  const [videoState, setVideoState] = useState();

  function changePage(x) {
    setBurgerState(false);
    setPageState(x);
  }
  function openBurger() {
    setBurgerState(!burgerState);
    console.log("burger menu is open " + burgerState);
  }

  useEffect(() => {
    function getData() {
      setImages(imagedata);
      setVideos(videodata);
    }
    getData();
  }, []);

  function openVideo(video) {
    setPopupState(true);
    videos.map((item) => {
      if (item.title.rendered === video) setOpenedVideo(item);
    });

    setVideoState(video);
    console.log(openedVideo);
    setPopupState(true);
  }

  return (
    <Layout
      burgerState={burgerState}
      setBurgerState={setBurgerState}
      openBurger={openBurger}
      pageState={pageState}
      setPageState={setPageState}
      changePage={changePage}
    >
      <Flying />
      <div
        className={pageState == 1 ? "background" : "background bckDark"}
      ></div>
      {/* className={
            !singleBandState ? "NavBarCont navBar1" : "NavBarCont navBar2"
          } */}
      <Head>
        <title>Chair Website</title>
        <meta name="theme-color" content="#07070f"></meta>
        <meta name="msapplication-navbutton-color" content="#07070f"></meta>
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta
          name="description"
          content="Polish band called Chair that plays inde rock and post punk. The band is a Polish multimedia artist duo consiting of Cura and Hubert Kurkiewicz"
        ></meta>
        <meta
          name="apple-mobile-web-app-status-bar-style"
          content="#07070f"
        ></meta>
      </Head>
      {pageState == 1 ? (
        <motion.div
          initial={{ opacity: 1, x: 1500 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1.5 }}
        >
          <Landing />
        </motion.div>
      ) : (
        ""
      )}{" "}
      {pageState == 2 ? (
        <motion.div
          initial={{ opacity: 1, x: 1500 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.3 }}
        >
          <AboutUs
            images={images}
            pageState={pageState}
            setPageState={setPageState}
          />
        </motion.div>
      ) : (
        ""
      )}
      {pageState == 3 ? (
        <motion.div
          initial={{ opacity: 1, x: 1500 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.3 }}
        >
          <Shows />
        </motion.div>
      ) : (
        ""
      )}
      <motion.div
        initial={{ opacity: 1, x: 1500 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.3 }}
      >
        <AnimatePresence>
          {pageState == 4 ? (
            <motion.div
              initial={{ opacity: 1, x: 1500 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.3 }}
            >
              <Contact />
            </motion.div>
          ) : (
            ""
          )}
        </AnimatePresence>
      </motion.div>
      {pageState == 5 ? (
        <motion.div
          initial={{ opacity: 1, x: 1500 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.3 }}
        >
          <ChairTV changePage={changePage} videos={videos} />
        </motion.div>
      ) : (
        ""
      )}
      {pageState == 6 ? (
        <motion.div
          initial={{ opacity: 1, x: 1500 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.3 }}
        >
          {" "}
          <GloryHole />
        </motion.div>
      ) : (
        ""
      )}
      {pageState == 7 ? (
        <motion.div
          initial={{ opacity: 1, x: 1500 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.3 }}
        >
          <Clips
            changePage={changePage}
            openVideo={openVideo}
            openedVideo={openedVideo}
            videos={videos}
            popupState={popupState}
            setPopupState={setPopupState}
            videoState={videoState}
            setVideoState={setVideoState}
          />{" "}
        </motion.div>
      ) : (
        ""
      )}
      {pageState == 8 ? (
        <Liveshows
          changePage={changePage}
          openVideo={openVideo}
          openedVideo={openedVideo}
          videos={videos}
          popupState={popupState}
          setPopupState={setPopupState}
          videoState={videoState}
          setVideoState={setVideoState}
        />
      ) : (
        ""
      )}
      {pageState == 9 ? (
        <SillyStuff
          changePage={changePage}
          openVideo={openVideo}
          openedVideo={openedVideo}
          videos={videos}
          popupState={popupState}
          setPopupState={setPopupState}
          videoState={videoState}
          setVideoState={setVideoState}
        />
      ) : (
        ""
      )}{" "}
    </Layout>
  );
}

export async function getStaticProps() {
  // Get data from api
  const resImg = await fetch(
    "https://chair.band/database/wp-json/wp/v2/image?per_page=100&_embed"
  );
  const imagedata = await resImg.json();

  const resVid = await fetch(
    "https://chair.band/database/wp-json/wp/v2/video?per_page=100&_embed"
  );
  const videodata = await resVid.json();

  // Return the data inside props
  return {
    props: {
      imagedata,
      videodata,
    },
  };
}
