import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';
import Layout from '../../components/layout';
import Header from '../../components/Header';
import myWorkStyles from '../../styles/my-work.module.css';

export default function MyWork() {
  return (
    <Layout>
      <Head>
        <title>My Work</title>
      </Head>
      <Header title="My Work"/>

      <div className={myWorkStyles.container}>
        <Link href="https://kylewebb2000.github.io/GitHubProfileAPI/" target='_blank' className={myWorkStyles.workContainerLink}>          
          <div className={myWorkStyles.workContainer}>
            <img src='\images\my-work\GitHub.png' className={myWorkStyles.image}/>
            <h2 className={myWorkStyles.imageTitle}>GitHub API</h2>
          </div>
        </Link>
        <Link href="https://kylewebb2000.github.io/JS-Number-Project/" target='_blank' className={myWorkStyles.workContainerLink}>          
          <div className={myWorkStyles.workContainer}>
            <img src='\images\my-work\numberCounter.png' className={myWorkStyles.image}/>
            <h2 className={myWorkStyles.imageTitle}>Number Counter</h2>
          </div>
        </Link>
        <Link href="https://kylewebb2000.github.io/#" target='_blank' className={myWorkStyles.workContainerLink}>          
          <div className={myWorkStyles.workContainer}>
            <img src='\images\my-work\portfolio.avif' className={myWorkStyles.image}/>
            <h2 className={myWorkStyles.imageTitle}>Portfolio</h2>
          </div>
        </Link>
      </div>
    </Layout>
  )
}