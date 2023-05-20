import Layout from "../components/layout";
import Head from "next/head";
import { useState } from "react";
import Landing from "../components/landing";
import AboutUs from "../components/aboutus";
import Shows from "@/components/shows";
import Contact from "../components/contact";
import ChairTV from "@/components/chairtv";
import GloryHole from "@/components/gloryhole";

export default function Home() {
  const [pageState, setPageState] = useState(1);
  const [burgerState, setBurgerState] = useState(false);

  function changePage(x) {
    setBurgerState(!burgerState);
    setPageState(x);
    console.log("the funniest bumber ever is " + pageState);
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
      {pageState == 2 ? <AboutUs /> : ""}
      {pageState == 3 ? <Shows /> : ""}
      {pageState == 4 ? <Contact /> : ""}
      {pageState == 5 ? <ChairTV /> : ""}
      {pageState == 6 ? <GloryHole /> : ""}
    </Layout>
  );
}
