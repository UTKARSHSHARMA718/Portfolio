import React from "react";
import './Footer.css'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import { faGithub,faTwitter,faInstagram,faLinkedin,faHashnode,faYoutube} from '@fortawesome/free-brands-svg-icons'

const Footer =()=>{
    const instagram='https://www.instagram.com/iking7sharma/';
    return(
        <>
        <footer class="footer" >

       <h6>Made with ❤️ by Utkarsh Sharma</h6> 
        <div class="socials">
          <a href="https://github.com/UTKARSHSHARMA718">
        <FontAwesomeIcon className='socials'  icon={faGithub} />
            
          </a>
          <a href="https://twitter.com/learningbeing18?t=HHau01-onE590wY8CGArIw&s=09">
             
        <FontAwesomeIcon className='socials'  icon={faTwitter} />
          </a>
          <a href="https://www.linkedin.com/in/utkarsh-sharma-98860520a?challengeId=AQEWdq3hUo66hAAAAYBPQuu6IBFiHYRT63JuuQSAgMLCzVIbqD5btcHpAyWOGbg-gbW_gCT62OlhRxA7WolDOr-erphVDH9zZw&submissionId=7db529c6-6e19-e816-fd26-5434f8d05a22&original_referer=">
            
        <FontAwesomeIcon className='socials'  icon={faLinkedin} />
          </a>
          <a href="https://hashnode.com/@Utkarsh-sharma">
        <FontAwesomeIcon className='socials'  icon={faHashnode} />
            
          </a>
        <a href={instagram}> 
        <FontAwesomeIcon className='socials' icon={faInstagram} />
        </a>
        <a href='#'> 
        <FontAwesomeIcon className='socials' icon={faYoutube} />
        </a>
      
        </div>
    </footer>
        </>
    )
}

export default Footer;