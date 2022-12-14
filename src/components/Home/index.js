import React, {Component} from "react";
import Axios from 'axios';
import FileDownload from 'js-file-download';

import {ToastContainer, toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'

import "./index.css";


class Home extends Component {

    download = e =>{
        e.preventDefault()
        Axios(({
            url: "http://localhost:4000",
            method: "GET",
            responseType: "blob"
        })).then((response) => {
            console.log(response);
            FileDownload(response.data, "Charan_Resume.pdf");
            toast.success("Resume -- Downloaded", {position: toast.POSITION.BOTTOM_CENTER});
        })
    }

    render(){
    return (
        <>
        <div className="home">
            <div className="home-card1">
                <h1 className="home-heading1">Welcome to My Portfolio  </h1>
            </div>
            <div className="home-cards d-flex flex-row justtify-content-center">
                <div className="home-card2">
                    <h2 className="home-heading-name">I am <span className="home-name-span">Ravi Krushna</span></h2>
                    <h1 className="home-heading2">Web Developer</h1>
                    <p className="home-para1">I'm a <span className="home-para1-span">MERN </span> <span className="home-para1-span"> & MEAN STACK</span> developer, seeking for an environment to Grow. My expertise is to create a website using <span className="home-para1-span">BOOTSTRAP, REACT JS, ANGULAR, NODE JS, EXPRESS JS</span> and more...</p>
                </div>
                <div className="home-card3">
                    <button className="download-resume button2" onClick={this.download}>
                        Resume  
                        <i className="home-download-icon bi bi-download"></i>
                    </button>
                    <h2 className="home-follow-me-on">Follow Me:</h2>
                    <div className="home-card4 d-flex justify-content-center">
                        <a className="home-follow-me" href='https://admirable-empanada-3576b5.netlify.app/'><i className="bi bi-facebook" target="_banck"></i></a>
                        <a className="home-follow-me" href="https://www.linkedin.com/in/ravi-krushna-gudise-564240229/"><i className="bi bi-linkedin"></i></a>
                        <a className="home-follow-me" href="https://admirable-empanada-3576b5.netlify.app/"><i className="bi bi-instagram" target="_banck"></i></a>
                        <a className="home-follow-me" href="tel:+9000071401" target="_banck"><i className="bi bi-telephone-plus-fill"></i></a>
                    </div>
                </div>
                <ToastContainer />
            </div>
        </div>
        </>
        
    )
    }
}

export default Home;
 