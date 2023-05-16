import Link from 'next/link';
import Head from 'next/head';


export default function FirstPost() {
  return (
    <>
      <Head>
        <title>New sdfsdf</title>
      </Head>
      <h1>New release heehee</h1>
      <h2>
        <Link href="/">Back to home</Link>
      </h2>
      <h1>
        Read <Link href="/posts/second-post">another thing!</Link>
      </h1>
    </>
  );
}