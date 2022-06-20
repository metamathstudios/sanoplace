import { NextPage } from "next";
import Head from "next/head";
import Form from "../components/Login";

const Login: NextPage = () => {
  return (
    <>
      <Head>
        <title>Nicometa - Login</title>
        <meta name="description" content="Website description" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Form />
    </>
  );
};

export default Login;
