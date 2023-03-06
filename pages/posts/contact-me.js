import Head from 'next/head'
import Link from 'next/link'
import Layout from '../../components/layout'

export default function ContactMe() {
  return (
    <Layout>
      <Head>
        <title>Contact Me</title>
      </Head>
      <h1>Contact Me</h1>
      <h2>
        <Link href="/">Back to home</Link>
      </h2>
    </Layout>
  )
}