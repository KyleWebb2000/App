import Head from 'next/head'
import Link from 'next/link'
import Layout from '../../components/layout'

export default function MyWork() {
  return (
    <Layout>
      <Head>
        <title>My Work</title>
      </Head>
      <h1>My Work</h1>
      <h2>
        <Link href="/">Back to home</Link>
      </h2>
    </Layout>
  )
}