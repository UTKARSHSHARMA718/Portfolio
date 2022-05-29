import React from "react";
import demo from './rr.PNG'
import resume from './Utkarsh_Sharma_Resume.pdf'
import './resume.css'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import { download} from '@fortawesome/free-brands-svg-icons'


import Particles from "react-tsparticles"; 
import { loadFull } from "tsparticles";

const Resume=(props)=>{

    return(
        <>
        <div className="resumeImg">
            <img src={demo} alt="" className="img_of_resume"/>
             <a href={resume} download="resume" className="downloadButton fa fa-download"> Download
            
             </a>
        </div>

        <Particles id="tsparticles" init={props.particlesInit} loaded={props.particlesLoaded}
	          options={props.particlesOptions} />
        </>
    )
}

export default Resume;