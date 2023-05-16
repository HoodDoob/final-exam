import Layout from "../components/layout";
import Head from "next/head";
import { useState, useEffect } from "react";
import Landing from "../components/landing";
import AboutUs from "../components/aboutus";

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
      changePage={changePage}>
      <Head>
        <title>Chair Website</title>
        <link rel="icon" href="../public/images/chair.webp" />
      </Head>

      {pageState == 1 ? <Landing /> : ""}
      {pageState == 2 ? <AboutUs /> : ""}
      
    </Layout>
  );
}
