import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome } from '@fortawesome/free-solid-svg-icons';
import headerStyles from '../../Nextjs-project/styles/utils.module.css';
import Link from 'next/link'

function Header({title}){
    return(
        <div className={headerStyles.header}>
        <div><h1>{title}</h1></div>
        <div>
          <h2>
            <Link href="/"><FontAwesomeIcon icon={faHome}></FontAwesomeIcon></Link>
          </h2>
        </div>
      </div>
    )
}

export default Header;