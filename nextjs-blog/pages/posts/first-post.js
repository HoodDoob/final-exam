import Link from 'next/link';
import Head from 'next/head';
import Layout from '../../components/layut';


export default function FirstPost() {
  return (
     <Layout>
    <Head>
        <title>New Relesae</title>
      </Head>
      <h1>First Post</h1>
      <h2>
        <Link href="/">Back to home</Link>
      </h2>
      <h1>
        Read <Link href="/posts/second-post">the second post!</Link>
        </h1>
        </Layout>
  );
}