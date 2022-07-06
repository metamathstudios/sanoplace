import type { NextPage } from "next"
import Head from "next/head"

import Navbar from "../components/Navbar"
import Footer from "../components/Footer"
import Filter from "../components/Marketplace/Filter"

const Marketplace: NextPage = () => {
  return (
    <>
      <Head>
        <title>Especialistas</title>
        <meta name="description" content="Website description" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <Filter />
      <Footer />
    </>
  )
}

export default Marketplace
