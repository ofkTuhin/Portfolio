import React from 'react';
import './about.css'
import aboutImg from '../../images/001.jpg'
import Skill from '../Skills/Skill';




const About = () => {
    return (
        <div className="aboutSection">
            <div className="container">
                <h2 style={{marginTop:"50px"}} >ABOUT</h2>
            <div className="about section shadow-lg p-3 mb-5 bg-body rounded">
            <div className="container">
                <div className="row">
                    <div className="col-md-4">
                        <div className="aboutImg">
                            <img src={aboutImg}></img>

                        </div>
                    </div>
                    <div className="col-md-8">
                        <h3>MD.OMAR FARUK KHAN</h3>
                        <p>I'm Front End Developer.I can Design and Develop Web Application .  Recently I am graduated in the Faculty of Computer Science & Engineering(CSE) from Bangladesh Institute of Science & Technology(BIST) under National University.</p>
                    
  
                    
                
            </div>
            </div>
            </div>
        </div>
        <Skill></Skill>
        </div>
        
    
        </div>
    );
};

export default About;