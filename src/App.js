import React from "react";
import "./App.css";
import "./index.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import Particles from "react-tsparticles"; 
import { loadFull } from "tsparticles";



import About from "./components/About/About";
import Blogs from "./components/Blogs/Blogs";
import Books from "./components/book/Books-cornner";
import Front from "./components/Front";
import Work from "./components/Work/Work";
import Footer from "./components/Footer";
import NavBar from "./components/Navbar";
import Resume from "./components/resume/Resume";

// // lazy loading 
// const LazyAbout =React.lazy(()=>import("./components/About/About"))
// const LazyBlogs =React.lazy(()=>import("./components/Blogs/Blogs"))
// const LazyBooks =React.lazy(()=>import("./components/book/Books-cornner"))
// const LazyFront =React.lazy(()=>import("./components/Front"))
// const LazyWork =React.lazy(()=>import("./components/Work/Work"))

// const LazyResume =React.lazy(()=>import("./components/resume/Resume"))


const particlesOptions={
  "particles": {
    "number": {
      "value": 104,
      "density": {
        "enable": true,
        "value_area": 800
      }
    },
    "color": {
      "value": "#ffffff"
    },
    "shape": {
      "type": "circle",
      "stroke": {
        "width": 0,
        "color": "#000000"
      },
      "polygon": {
        "nb_sides": 5
      },
      "image": {
        "src": "img/github.svg",
        "width": 100,
        "height": 100
      }
    },
    "opacity": {
      "value": 0.5,
      "random": false,
      "anim": {
        "enable": false,
        "speed": 1,
        "opacity_min": 0.1,
        "sync": false
      }
    },
    "size": {
      "value": 3,
      "random": true,
      "anim": {
        "enable": false,
        "speed": 40,
        "size_min": 0.1,
        "sync": false
      }
    },
    "line_linked": {
      "enable": true,
      "distance": 150,
      "color": "#42f55d",
      "opacity": 0.4,
      "width": 1
    },
    "move": {
      "enable": true,
      "speed": 1,
      "direction": "none",
      "random": false,
      "straight": false,
      "out_mode": "out",
      "bounce": false,
      "attract": {
        "enable": false,
        "rotateX": 600,
        "rotateY": 1200
      }
    }
  },
  "interactivity": {
    "detect_on": "canvas",
    "events": {
      "onhover": {
        "enable": true,
        "mode": "repulse"
      },
      "onclick": {
        "enable": true,
        "mode": "push"
      },
      "resize": true
    },
    "modes": {
      "grab": {
        "distance": 400,
        "line_linked": {
          "opacity": 1
        }
      },
      "bubble": {
        "distance": 400,
        "size": 40,
        "duration": 2,
        "opacity": 8,
        "speed": 3
      },
      "repulse": {
        "distance": 200,
        "duration": 0.4
      },
      "push": {
        "particles_nb": 4
      },
      "remove": {
        "particles_nb": 2
      }
    }
  },
  "retina_detect": true
}

const particlesInit =  async(main) => {
  //console.log(main);
  await loadFull(main);
};

const particlesLoaded = (container) => {
  //console.log(container);
};

function App() {
  return (
    <>
      <Router>
         
        <NavBar />

        <Switch>
          <Route exact path="/">
            <Front particlesInit={particlesInit} particlesLoaded={particlesLoaded} particlesOptions={particlesOptions} />
            {/* <React.Suspense fallback="Loading...">
            <LazyFront particlesInit={particlesInit} particlesLoaded={particlesLoaded} particlesOptions={particlesOptions} />
            </React.Suspense> */}
          </Route>
          <Route exact path="/about">
            <About particlesInit={particlesInit} particlesLoaded={particlesLoaded} particlesOptions={particlesOptions} />
            {/* <React.Suspense fallback="Loading...">
            <LazyAbout particlesInit={particlesInit} particlesLoaded={particlesLoaded} particlesOptions={particlesOptions} />
            </React.Suspense> */}
          </Route>
          <Route exact path="/books">
            <Books particlesInit={particlesInit} particlesLoaded={particlesLoaded} particlesOptions={particlesOptions}/>
            {/* <React.Suspense fallback="Loading...">
            <LazyBooks particlesInit={particlesInit} particlesLoaded={particlesLoaded} particlesOptions={particlesOptions} />
            </React.Suspense> */}
          </Route>
          <Route exact path="/work">
            <Work particlesInit={particlesInit} particlesLoaded={particlesLoaded} particlesOptions={particlesOptions}/>
            {/* <React.Suspense fallback="Loading...">
            <LazyWork particlesInit={particlesInit} particlesLoaded={particlesLoaded} particlesOptions={particlesOptions} />
            </React.Suspense> */}
          </Route>
          <Route exact path="/blogs">
            <Blogs particlesInit={particlesInit} particlesLoaded={particlesLoaded} particlesOptions={particlesOptions}/>
            {/* <React.Suspense fallback="Loading...">
            <LazyBlogs particlesInit={particlesInit} particlesLoaded={particlesLoaded} particlesOptions={particlesOptions} />
            </React.Suspense> */}
          </Route>
          <Route exact path="/resume">
            <Resume particlesInit={particlesInit} particlesLoaded={particlesLoaded} particlesOptions={particlesOptions}/>
            {/* <React.Suspense fallback="Loading...">
            <LazyResume particlesInit={particlesInit} particlesLoaded={particlesLoaded} particlesOptions={particlesOptions} />
            </React.Suspense> */}
          </Route>

          {/* <Books/> */}
          {/* <About/> */}
          {/* <Blogs/> */}
          {/* <Work/> */}
        </Switch>
        <Footer />
         
      </Router>
    </>
  );
}

export default App;
