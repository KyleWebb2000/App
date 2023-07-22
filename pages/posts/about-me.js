import Head from 'next/head'
import Link from 'next/link'
import Layout from '../../components/layout'
import Header from '../../components/Header';

export default function AboutMe() {
  return (
    <Layout>
      <Head>
        <title>About Me</title>
      </Head>
      <Header title="About Me"/>
    </Layout>
  )
}