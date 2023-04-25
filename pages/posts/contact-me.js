import Head from 'next/head'
import Link from 'next/link'
import Layout from '../../components/layout'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome } from '@fortawesome/free-solid-svg-icons'
import styles from '../../styles/contact-me.module.css';

export default function ContactMe() {
  return (
    <Layout>
      <Head>
        <title>Contact Me</title>
      </Head>
      <div className={styles.header}>
        <div><h1>Contact Me</h1></div>
        <div>
        <h2>
          <Link href="/"><FontAwesomeIcon icon={faHome}></FontAwesomeIcon></Link>
        </h2>
        </div>
      </div>
      <div className={styles.contactInfo}>
        <p>Email: Kylewebb3577@gmail.com</p>
      </div>
    </Layout>
  )
}