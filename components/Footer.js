import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import {faGithub, faLinkedin} from '@fortawesome/free-brands-svg-icons'
import footerStyles from '../styles/footer.module.css';


const Footer = () => {
    return (
        <div className={footerStyles.icon}>
                <div><FontAwesomeIcon icon={faEnvelope} size="2xl"></FontAwesomeIcon></div>
                <div><FontAwesomeIcon icon={faGithub} size="2xl"></FontAwesomeIcon></div>
                <div><FontAwesomeIcon icon={faLinkedin} size="2xl"></FontAwesomeIcon></div>
        </div>
    )
}

export default Footer;