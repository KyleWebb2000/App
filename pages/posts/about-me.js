import Head from 'next/head'
import Link from 'next/link'
import Layout from '../../components/layout'

export default function AboutMe() {
  return (
    <Layout>
      <Head>
        <title>About Me</title>
      </Head>
      <h1>What I Do</h1>
      <h2>
        <Link href="/">Back to home</Link>
      </h2>
    </Layout>
  )
}