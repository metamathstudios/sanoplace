import { NextPage } from "next";
import Head from "next/head";
import Dash from "../components/Dashboard";

const Dashboard: NextPage = () => {
  return (
    <>
      <Head>
        <title>Nicometa - Dashboard</title>
        <meta name="description" content="Website description" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Dash />
    </>
  );
};

export default Dashboard;
