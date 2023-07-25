import Head from 'next/head'
import Link from 'next/link'
import Layout from '../../components/layout'
import style from '../../styles/mySkills.module.css';
import Header from '../../components/Header';
import { test } from 'gray-matter';

export default function MySkills() {
  return (
    <Layout>
      <Head>
        <title>My Skills</title>
      </Head>

      <Header title="My Skills"/>

      <div className={style.contactInfo}>
      
        <div className={style.container}>
          <div className={style.skillDiv}>
            <img src='\images\my-skills\nextjs.webp' className={style.skillImg}/>
          </div>
          <div className={style.skillDiv}>
            <img src='\images\my-skills\javascript.jpg' className={style.skillImg}/>
          </div>
          <div className={style.skillDiv}>
            <img src='\images\my-skills\coldfusion.jpg' className={style.skillImg}/>
          </div>
          <div className={style.skillDiv}>
            <img src='\images\my-skills\SalesforceApex.png' className={style.skillImg}/>
          </div>
          <div className={style.skillDiv}>
            <img src='\images\my-skills\HTML.jpg' className={style.skillImg}/>
          </div>
          <div className={style.skillDiv}>
            <img src='\images\my-skills\SalesforceLightning.jpg' className={style.skillImg}/>
          </div>
          <div className={style.skillDiv}>
            <img src='\images\my-skills\docker.jpg' className={style.skillImg}/>
          </div>
          <div className={style.skillDiv}>
            <img src='\images\my-skills\sass.png' className={style.skillImg}/>
          </div>
          <div className={style.skillDiv}>
            <img src='\images\my-skills\wordpress.png' className={style.skillImg}/>
          </div>
        </div>
        
      </div>
    </Layout>
  )
}
