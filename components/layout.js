import Head from 'next/head'
import Image from 'next/image'
import styles from './layout.module.css'
import utilStyles from '../styles/utils.module.css'
import Link from 'next/link'
import Footer from './Footer'

const name = 'Kyle Webb'
export const siteTitle = 'Kyle\'s Next.js App!'

export default function Layout({ children, home }) {
  return (
    <div className={styles.container}>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <meta
          name="Kyle Webb\'s first Next.js App"
          content="A simple but unique App built of Next.js"
        />
        <meta
          property="og:image"
          content={`https://og-image.vercel.app/${encodeURI(
            siteTitle
          )}.png?theme=light&md=0&fontSize=75px&images=https%3A%2F%2Fassets.zeit.co%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg`}
        />
        <meta name="og:title" content={siteTitle} />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>
      <header className={styles.header}>
        {home ? (
          <>
            <Image
              priority
              src="/images/me.jpg"
              className={utilStyles.borderCircle}
              height={300}
              width={300}
              alt={name}
            />
            <h1 className={utilStyles.heading2Xl}>{name}</h1>
            <h2 className={styles.centeredText}>A Junior Software Engineer</h2>
          </>
        ) : (
          <>
            <Link href="/">
              <Image
                priority
                src="/images/me.jpg"
                className={utilStyles.borderCircle}
                height={200}
                width={200}
                alt={name}
              />
            </Link>
            <h2 className={utilStyles.headingLg}>
              <Link href="/" className={utilStyles.colorInherit}>
                {name}
              </Link>
            </h2>
          </>
        )}
      </header>
      <main>{children}</main>
      {!home && (
        <div className={styles.backToHome}>
          <Link href="/">← Back to home</Link>
        </div>
      )}
      <Footer/>
    </div>
  )
}
