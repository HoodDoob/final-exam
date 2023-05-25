import Layout from "../components/layout";
import Head from "next/head";
import { useState, useEffect } from "react";
import Landing from "../components/landing";
import AboutUs from "../components/aboutus";
import Shows from "@/components/shows";
import Contact from "../components/contact";
import ChairTV from "@/components/chairtv";
import GloryHole from "@/components/gloryhole";
import Wordpress from "@/components/wordpress";

export default function Home({ data }) {
  const [pageState, setPageState] = useState(1);
  const [burgerState, setBurgerState] = useState(false);
  const [images, setImages] = useState([]);
  // const url = `https://lucaszago.dk/vlp/wp-json/wp/v2/artworks`;
  useEffect(() => {
    function getData() {
      setImages(data);
    }
    getData();
  }, []);

  function changePage(x) {
    setBurgerState(!burgerState);
    setPageState(x);
  }
  function openBurger() {
    setBurgerState(!burgerState);
    console.log("burger menu is open " + burgerState);
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
      {pageState == 5 ? <ChairTV /> : ""}
      {pageState == 6 ? <GloryHole /> : ""}
    </Layout>
  );
}
export async function getServerSideProps() {
  // Get data from api
  const res = await fetch(
    "https://chair.band/wp-json/wp/v2/image?per_page=100&_embed"
  );
  // https://chair.band/index.php/wp-json/wp/v2
  const data = await res.json();

  // Return the data inside props
  return {
    props: {
      data,
    },
  };
}
