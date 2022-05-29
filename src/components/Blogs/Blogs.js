import React ,{useState}from "react";
import NavBar from "../Navbar";
import './Blogs.css';
import Particles from "react-tsparticles"; 
import { loadFull } from "tsparticles";

const query = `
    {
      user(username: "Utkarsh-sharma") {
        publication {
          posts{
            slug
            title
            brief
            coverImage
            _id
          }
        }
      }
    }
  `; 
   
  class Blogs extends React.Component {
    state = {
      posts: [],
    };
    constructor(props) {
      super(props);
      this.state = {
        data: [],
      };
    }
  

  componentDidMount() {
    this.fetchPosts();
  }

  fetchPosts = async () => {
    const response = await fetch("https://api.hashnode.com", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify({ query }),
    });
    const ApiResponse = await response.json();
    this.setState({ posts: await ApiResponse.data.user.publication.posts });
  
  this.setState({

    data:await ApiResponse.data.user.publication.posts
  })

  };

  render() {
    return (
      <>
      {/* <NavBar/> */}
        <h1 style={{  color: 'greenyellow'}}>My Blogs</h1>
      <div id="blogss">
        {this.state.data.map((d)=>(
          <a href={`https://supercomputing.hashnode.dev/${d.slug}`}>

          <div className="card cardSize" style={{backgroundColor:'black'}} key={d._id}>
            <div id="imgCard"></div>
            <img src={d.coverImage} className="card-img-top" id='images' alt="..." />
            <div className="card-body">
              <h5 className="card-title" id="title">{d.title}</h5>
              <p className="card-text" id="desc" style={{color:'white'}}>{d.brief.slice(0,135)}...</p>
            
            </div>
          </div>
          </a>
        
        ))}
        
      </div>

        <Particles id="tsparticles" init={this.props.particlesInit} loaded={this.props.particlesLoaded}
	          options={this.props.particlesOptions} />
      </>
    );
  }
}


export default Blogs;
