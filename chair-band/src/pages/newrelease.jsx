import Link from "next/link";
import Head from "next/head";

export default function NewRelease() {
  return (
    <>
      <Head>
        <title>Chair New Release</title>
      </Head>
      <h1>New release heehee</h1>
      <h2>
        <Link href="/">Back to home</Link>
      </h2>
    </>
  );
}
