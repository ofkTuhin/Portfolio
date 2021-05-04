import React from 'react';
import './about.css'
import aboutImg from '../../images/001.jpg'
import Skill from '../Skills/Skill';
import Slide from 'react-reveal/Slide';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faGithub, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';




const About = () => {
    return (
        <div className="aboutSection">
            <div className="container">
                <div className="about-content">
                <div className="row ">
                     <div className="col-md-4">
                     <Slide left><div className="headings">
                <h4>About</h4>
            </div>
                   
                        <div className="about text-left ">

                                <div className="aboutImg">
                                    <img src={aboutImg}></img>

                                </div>


                                <h3>MD.OMAR FARUK KHAN</h3>
                                <p className="text-left"> Front End Developer.<br></br>B.Sc. Engineer<br></br>Computer Science And Engineering (CSE)  </p>
                                <p><a href="https://github.com/omar-faruk02" target="_blank"><FontAwesomeIcon icon={faGithub}/></a> <a href="https://www.linkedin.com/in/md-omarfaruk/" target="_blank"><FontAwesomeIcon icon={faLinkedinIn}/></a> <a href="https://www.facebook.com/omaik.pola.5" target="_blank"><FontAwesomeIcon icon={faFacebook}/></a></p>




                            </div>
                            </Slide>
                        </div>
                    
                    
                   
                  
                    <div className="col-md-7 offset-md-1">

                    <Slide right> 
                
                        <Skill></Skill>
                        </Slide>
                    </div>
                   
                </div>
            </div>
        </div>
        </div>



    );
};

export default About;