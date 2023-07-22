import Head from 'next/head';
import Layout from '../../components/layout';
import Header from '../../components/Header';

export default function MyWork() {
  return (
    <Layout>
      <Head>
        <title>My Work</title>
      </Head>
      <Header title="My Work"/>
    </Layout>
  )
}