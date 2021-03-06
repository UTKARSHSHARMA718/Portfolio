import React from "react";
import "./index.css";
import "./Front.css";

import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import $ from 'jquery';
import jQuery from 'jquery';

const Front = (props) => {

  jQuery(document).ready(function(){
    $('h1').mousemove(function(e){
      var rXP = (e.pageX - this.offsetLeft-$(this).width()/2);
      var rYP = (e.pageY - this.offsetTop-$(this).height()/2);
      $('h1').css('text-shadow', +rYP/10+'px '+rXP/80+'px rgba(227,6,19,.8), '+rYP/8+'px '+rXP/60+'px rgba(255,237,0,1), '+rXP/70+'px '+rYP/12+'px rgba(0,159,227,.7)');
    });
 });

  
  return (
    <>
      {/* <!-- Nav bar --> */}
      {/* <NavBar/>   */}

      {/* <div class="intro"> */}
      {/* <img className="me" src={me} alt="intro" /> */}
      {/* <h1 id="introPageHeading" style={{color:"white"}}>Hello, I'm Utkarsh a developer and Graphic Designer</h1> */}
      <div className="welcome">
        <div class="content">
          <h1 className="introduction" id="one">Hi,I am</h1>
          <h1 className="introduction" id="two">Utkarsh Sharma</h1>
          <h1 className="introduction" id="three">A software Engineer</h1>
         
        </div>
      </div>
      <Particles
        id="tsparticles"
        init={props.particlesInit}
        loaded={props.particlesLoaded}
        options={props.particlesOptions}
      />
      {/* </div> */}
    </>
  );
};

export default Front;
