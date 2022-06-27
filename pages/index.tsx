import type { NextPage } from "next";
import Head from "next/head";

import Header from "../components/Landing/Header"
import Hero from "../components/Landing/Hero"
import Stats from "../components/Landing/Stats"
import Apresentation1 from "../components/Landing/Apresentation1/indes"
import Footer from "../components/Landing/Footer"

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Nicometa</title>
        <meta name="description" content="Website description" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <Hero />
      <Stats />
      <Apresentation1 />
      <Footer />
    </>
  );
};

export default Home;
