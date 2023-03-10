import Head from 'next/head';
import Layout, { siteTitle } from '../components/layout';
import utilStyles from '../styles/utils.module.css';
import homeStyles from '../styles/home.module.css';
import Link from 'next/link';
import { getSortedPostsData } from '../lib/posts';
import Date from '../components/date';
import Image from 'next/image';

export async function getStaticProps() {
  const allPostsData = getSortedPostsData();
  return {
    props: {
      allPostsData,
    },
  };
}

export default function Home({ allPostsData }) {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>

      <section className={homeStyles.nav}>
        <Link href="/posts/my-skills">
          <div className={homeStyles.navItem}>
            <Image
                priority
                src="/images/code.png"
                className={homeStyles.image}
                height={500}
                width={500}
              />      
              <h2 className={homeStyles.imageTitle}>MY SKILLS</h2>
          </div>
        </Link>   
        <Link href="/posts/my-work">
        <div className={homeStyles.navItem}>
            <Image
                priority
                src="/images/skills.webp"
                className={homeStyles.image}
                height={500}
                width={500}
              />      
              <h2 className={homeStyles.imageTitle}>MY WORK</h2>
          </div>
        </Link>
        <Link href="/posts/about-me">
        <div className={homeStyles.navItem}>
            <Image
                priority
                src="/images/aboutme.jpg"
                className={homeStyles.image}
                height={500}
                width={500}
              />      
              <h2 className={homeStyles.imageTitle}>ABOUT ME</h2>
          </div>
        </Link>
        <Link href="/posts/contact-me">
          <div className={homeStyles.navItem}>
            <Image
                priority
                src="/images/contactMe.png"
                className={homeStyles.image}
                height={500}
                width={500}
            />      
            <h2 className={homeStyles.imageTitle}>CONTACT ME</h2>
          </div>
        </Link>
      </section>

      <section className={`${utilStyles.headingMd} ${homeStyles.blogContainer}`}>
        <h2 className={utilStyles.headingLg}>Blog</h2>
        <ul className={utilStyles.list}>
          {allPostsData.map(({ id, date, title }) => (
            <li className={utilStyles.listItem} key={id}>
              <Link href={`/posts/${id}`}>{title}</Link>
              <br />
              <small className={utilStyles.lightText}>
                <Date dateString={date} />
              </small>
            </li>
          ))}
        </ul>
      </section>
    </Layout>
  )
}
