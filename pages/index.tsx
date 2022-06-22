import type { NextPage } from "next";
import Head from "next/head";
import Header from "../components/Landing/Header";
import Main from "../components/Landing/Main";
import Slider from "../components/Landing/Slider";
import Soluctions from "../components/Landing/Soluctions";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Nicometa</title>
        <meta name="description" content="Website description" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <Main />
      <Soluctions />
      <Slider />
    </>
  );
};

export default Home;
