import Image from "next/image";
import { Inter } from "next/font/google";
import Head from "next/head";
import Timeline from "@/components/Timeline";

export default function Home() {
  return (
    <>
      <Head>
        <title>SNS</title>
      </Head>
      <div>
        <Timeline />
      </div>
    </>
  );
}
