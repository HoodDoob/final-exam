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
import Wordpress from "@/components/wordpress";

export default function Home(props) {
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

  // const url = `https://lucaszago.dk/vlp/wp-json/wp/v2/artworks`;
  useEffect(() => {
    function getData() {
      setImages(props.dataImg);
      setVideos(props.videodata);
    }
    getData();
  }, []);

  function openVideo(video) {
    setPopupState(true);
    videos.map((item) => {
      if (item.name === video) setOpenedVideo(item);
    });

    setVideoState(video);
    console.log(video);
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
      <div
        className={pageState == 1 ? "background" : "background bckDark"}
      ></div>
      {/* className={
            !singleBandState ? "NavBarCont navBar1" : "NavBarCont navBar2"
          } */}
      <Head>
        <title>Chair Website</title>
        <link rel="icon" href="../public/images/chair.webp" />
      </Head>

      {pageState == 1 ? <Landing /> : ""}
      {pageState == 2 ? <AboutUs images={images} /> : ""}
      {pageState == 3 ? <Shows /> : ""}
      {pageState == 4 ? <Contact /> : ""}
      {pageState == 5 ? <ChairTV changePage={changePage} /> : ""}
      {pageState == 6 ? <GloryHole /> : ""}
      {pageState == 7 ? (
        <Clips
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
      {pageState == 8 ? <Liveshows changePage={changePage} /> : ""}
      {pageState == 9 ? <SillyStuff changePage={changePage} /> : ""}
    </Layout>
  );
}

export async function getStaticProps() {
  // Get data from api
  const resImg = await fetch(
    "https://chair.band/wp-json/wp/v2/image?per_page=100&_embed"
  );
  const dataImg = await resImg.json();

  // test
  const resImg2 = await fetch(
    "https://chair.band/wp-json/wp/v2/image?per_page=100&_embed"
  );
  const dataImg2 = await resImg2.json();

  // Return the data inside props
  return {
    props: {
      dataImg,
      dataImg2,
    },
  };
}

// export async function getStaticProps() {
//   const res = await fetch("https://bitter-grass-7071.fly.dev/bands");
//   const data = await res.json();

//   return {
//       props: {
//           videodata: data
//       }
//   }
// }
