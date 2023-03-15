import Head from 'next/head'
import Link from 'next/link'
import Layout from '../../components/layout'
import style from '../../styles/mySkills.module.css';

export default function MySkills() {
  return (
    <Layout>
      <Head>
        <title>My Skills</title>
      </Head>
      <h1>My Skills</h1>
      
      <div className={style.container}>
        <div className={style.topContainer}>
          <div className={style.div1}></div>
          <div className={style.div2}></div>
        </div>
        <div className={style.div3}></div>
      </div>
    </Layout>
  )
}
