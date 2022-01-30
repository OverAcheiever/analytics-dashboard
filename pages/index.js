import Head from "next/head";
import Image from "next/image";
import Dashboard from "../components/dashboard";

export default function Home() {
  return (
    <>
      <Head>
        <title>Analytics Dashboard</title>
        <meta name="description" content="" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Dashboard />
    </>
  );
}
