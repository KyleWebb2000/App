import Head from 'next/head'
import Link from 'next/link'
import Layout from '../../components/layout'
import Header from '../../components/Header';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import {faGithub, faLinkedin} from '@fortawesome/free-brands-svg-icons'
import contactStyles from '../../styles/contact-me.module.css';

export default function ContactMe() {
  return (
    <Layout>
      <Head>
        <title>Contact Me</title>
      </Head>
      <Header title="Contact Me"/>

      <div className={contactStyles.methodContainer}>
        <div className={contactStyles.methodIcon}>
          <FontAwesomeIcon icon={faEnvelope}></FontAwesomeIcon>
        </div>
        <div>
          Kylewebb3577@gmail.com
        </div>
      </div>

      <a href="https://www.linkedin.com/in/kyle-webb-7215481a3/" target="_blank">
        <div className={contactStyles.methodContainer}>
          <div className={contactStyles.methodIcon}>
            <FontAwesomeIcon icon={faLinkedin}></FontAwesomeIcon>
          </div>
          <div>
            Kyle Webb
          </div>
        </div>
      </a>


      <a href="https://github.com/KyleWebb2000" target="_blank">        
        <div className={contactStyles.methodContainer}>
          <div className={contactStyles.methodIcon}>
            <FontAwesomeIcon icon={faGithub}></FontAwesomeIcon>
          </div>
          <div>
            Kylewebb2000
          </div>
        </div>
      </a>

    </Layout>
  )
}