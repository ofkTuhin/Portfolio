import React from 'react';
import './project.css'
import Bounce from 'react-reveal/Bounce';
import team from '../../images/team.png'
import agency from '../../images/agency.png'
import slider from '../../images/slider.png'
import ride from '../../images/ride.png'
import flight from '../../images/flight.png'
import hungry from '../../images/hungry.png'



const Project = () => {
    return (
        <div className="projectSection">
        
      
            <div className="container">
            <div className="projects">
                <h2>
                    There Is Some Of My Projects
                </h2>
                <div className="row">
                <Bounce left>
                    <div className="col-md-4">
                        
                       
                       <a href="https://604a2d3950d9dc079fff9466--focused-nobel-ce5023.netlify.app/" target="_blank">
                        <div className="repository">
                            <div className="project-img">
                                <img src={team}></img>
                            </div>

                            <div className="overlay">
                                <h6>EPL Team Info</h6>
                                <p>There are all the information of all English premier league </p>
                                <p>This app is creating by React.Js, React router, Html,Css,Bootstrap</p>
                            </div>
                        </div>
                        </a>
                       
                    </div>
                    </Bounce>

                    <Bounce left>

                    <div className="col-md-4">
                    <a href="https://omar-faruk02.github.io/fancy-slide/" target="_blank">
                        <div className="repository">
                            <div className="project-img">
                                <img src={slider}></img>
                                
                            </div>

                            <div className="overlay">
                                <h6>Fancy Slider</h6>
                                <p>User can make slider bY using this app. User search template and select the template user can make slider</p>
                                <p>This app is creating by  Html,Css,JavaScript</p>
                            </div>
                        </div>
                        </a>
                    </div>
                    </Bounce>
                    <Bounce top>

                    <div className="col-md-4">
                        <a href="https://creative-agency-a40e4.web.app/" target="_blank">
                        <div className="repository">
                            <div className="project-img">
                                <img src={agency}></img>
                            </div>

                            <div className="overlay">
                                <h6>Creative Agency</h6>
                                <p>This is a FullStack Web app.BY this app a user can purchase Skill development course </p>
                                <p>This app is creating by React.Js, React router,React hook form,Node js, Express js  MongoDB, Html,Css,Bootstrap</p>
                            </div>
                        </div>
                        </a></div>
                        </Bounce>
                        <Bounce right>
                        <div className="col-md-4">
                        <a href="https://easy-ride-d7ce4.web.app/.app/" target="_blank">
                        <div className="repository">
                            <div className="project-img">
                                <img src={ride}></img>
                            </div>

                            <div className="overlay">
                                <h6>EPL Team Info</h6>
                                <p>There are all the information of all English premier league </p>
                                <p>This app is creating by React.Js, React router, Html,Css,Bootstrap</p>
                            </div>
                        </div>
                        </a>
                        </div>
                        </Bounce>
                        <Bounce bottom>
                    <div className="col-md-4">
                    <a href="https://omar-faruk02.github.io/ticket/">
                    <div className="repository">
                            <div className="project-img">
                            <img src={flight}></img>
                                
                            </div>

                            <div className="overlay">
                                <h6>EPL Team Info</h6>
                                <p>There are all the information of all English premier league </p>
                                <p>This app is creating by React.Js, React router, Html,Css,Bootstrap</p>
                            </div>
                        </div>
                    </a>
                        
                    </div>
                    </Bounce>
                    <Bounce right>
                    <div className="col-md-4">
                    <a href="https://omar-faruk02.github.io/assignment-5/">
                        <div className="repository">
                            <div className="project-img">
                                <img src={hungry}></img>
                            </div>
                            <div className="overlay  align-items-center">
                                <h6>EPL Team Info</h6>
                                <p>There are all the information of all English premier league </p>
                                <p>This app is creating by React.Js, React router, Html,Css,Bootstrap</p>
                            </div>

                            
                        </div>
                        </a>
                    </div>
                    </Bounce>
                </div>
            </div>
            
        </div>
        </div>
    );
};

export default Project;