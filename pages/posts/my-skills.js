import Head from 'next/head'
import Link from 'next/link'
import Layout from '../../components/layout'
import style from '../../styles/mySkills.module.css';
import Header from '../../components/Header';

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
            <img src='https://images.ctfassets.net/c63hsprlvlya/IacLLeOBR5WCvdCPqKuff/6860b5cc464c4f54703a2befa3f706b4/nextjs3.webp' className={style.skillImg}/>
          </div>
          <div className={style.skillDiv}>
            <img src='https://geekflare.com/wp-content/uploads/2019/03/javascript-1200x385.jpg' className={style.skillImg}/>
          </div>
          <div className={style.skillDiv}>
            <img src='https://thehackernews.com/images/-v-MXvilZ8do/TwMB2PwxIbI/AAAAAAAAEYQ/22pufbQJ_rQ/w0/coldfusion-logo.jpg' className={style.skillImg}/>
          </div>
          <div className={style.skillDiv}>
            <img src='https://salesforcecodex.com/wp-content/uploads/2019/08/SalesforceCodex_Apex-e1566962527231.png' className={style.skillImg}/>
          </div>
          <div className={style.skillDiv}>
            <img src='https://www.lambdatest.com/blog/wp-content/uploads/2018/11/JPG-2.jpg' className={style.skillImg}/>
          </div>
          <div className={style.skillDiv}>
            <img src='https://smartdata.net/wp-content/uploads/2020/01/Salesforce-Lightning-logo.png' className={style.skillImg}/>
          </div>
          <div className={style.skillDiv}>
            <img src='https://geekflare.com/wp-content/uploads/2020/03/docker-security.jpg' className={style.skillImg}/>
          </div>
          <div className={style.skillDiv}>
            <img src='https://www.seekpng.com/png/detail/377-3772047_sass-logo.png' className={style.skillImg}/>
          </div>
          <div className={style.skillDiv}>
            <img src='https://snobmonkey.com/wp-content/uploads/2019/04/wordpress.png' className={style.skillImg}/>
          </div>
        </div>
        
      </div>
    </Layout>
  )
}
