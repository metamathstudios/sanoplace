import { NextPage } from "next";
import Head from "next/head";
import { useRouter } from "next/router";
import Auth from "../../components/Auth";

const Authentication: NextPage = () => {
  const authType = useRouter().query;
  return (
    <>
      <Head>
        <title>Nicometa - Cadastro</title>
        <meta name="description" content="Website description" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Auth type={JSON.stringify(authType.type)} />
    </>
  );
};

export default Authentication;
