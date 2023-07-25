import Head from 'next/head'
import Layout from '../../components/layout'
import Header from '../../components/Header';
import aboutMe from '../../styles/about-me.module.css'

export default function AboutMe() {
  return (
    <Layout>
      <Head>
        <title>About Me</title>
      </Head>
      <Header title="About Me"/>

      <div className={aboutMe.container}>
        <p>Hey there! I'm Kyle, welcome to my Next.JS portfolio. I'm a Junior Full Stack Developer and have a passion for taking an idea, a concept, and bringing it to life through the language of computers.</p>

        <p>As I embarked on this adventure, I realized that programming isn't just about writing lines of code; it's about solving problems and creating solutions that can make a genuine impact on people's lives.</p>

        <p>One of the most fascinating aspects of programming is its ever-evolving nature. The technology landscape is constantly changing, presenting me with fresh challenges and opportunities to learn and grow! This is something I love.</p>

        <p>To find out more about me and my experience, please vist my <a href='https://www.linkedin.com/in/kyle-webb-7215481a3/' target='_blank'>LinkedIn</a>.</p>
      </div>
    </Layout>
  )
}