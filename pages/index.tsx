import type { NextPage } from "next";
import Head from "next/head";
import Footer from "../components/Landing/Footer";
import Header from "../components/Landing/Header";
import Hero from "../components/Landing/Hero";
import Stats from "../components/Landing/Stats";

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
      <Footer />
    </>
  );
};

export default Home;
