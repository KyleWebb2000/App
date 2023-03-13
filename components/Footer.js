import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import {faGithub, faLinkedin} from '@fortawesome/free-brands-svg-icons'
import footerStyles from '../styles/footer.module.css';
import Link from 'next/link';


const Footer = () => {
    return (
        <div className={footerStyles.icons}>
                <Link href="/posts/contact-me"><div className={footerStyles.icon}><FontAwesomeIcon icon={faEnvelope} size="2xl"></FontAwesomeIcon></div></Link>
                <a href="https://github.com/KyleWebb2000" target="_blank"><div className={footerStyles.icon}><FontAwesomeIcon icon={faGithub} size="2xl"></FontAwesomeIcon></div></a>
                <a href="https://www.linkedin.com/in/kyle-webb-7215481a3/" target="_blank"><div className={footerStyles.icon}><FontAwesomeIcon icon={faLinkedin} size="2xl"></FontAwesomeIcon></div></a>
        </div>
    )
}

export default Footer;