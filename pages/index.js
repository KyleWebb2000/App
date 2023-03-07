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
        <Link href="/posts/my-skills" style={{textDecoration: 'none'}}>
        <div className={`${homeStyles.navItem} ${homeStyles.mySkills}`}>MY SKILLS</div>
        </Link>   
        <Link href="/posts/my-work" style={{textDecoration: 'none'}}>
          <div className={`${homeStyles.navItem} ${homeStyles.myWork}`}>MY WORK</div>
        </Link>
        <Link href="/posts/about-me" style={{textDecoration: 'none'}}>
          <div className={`${homeStyles.navItem} ${homeStyles.aboutMe}`}>ABOUT ME</div>
        </Link>
        <Link href="/posts/contact-me" style={{textDecoration: 'none'}}>
          <div className={`${homeStyles.navItem} ${homeStyles.contactMe}`}>CONTACT ME</div>
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
