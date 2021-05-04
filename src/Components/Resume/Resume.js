import React, { useEffect } from 'react';
import './resume.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAt, faChevronCircleRight, faDownload, faPhone } from '@fortawesome/free-solid-svg-icons'
import {  faGithub,  faLinkedin, } from '@fortawesome/free-brands-svg-icons';
import Aos from "aos"
import 'aos/dist/aos.css';


const Resume = () => {
   useEffect(()=>{
       Aos.init({duration:2000})
   },[])
    return (
        <div>
            <div className="container">
                <div className="col-12" data-aos="flip-up" >
                    <header >
                        <p><h3>Here's My Resume</h3> <a style={{color:"green"}} href="https://drive.google.com/file/d/1Xfsnw4wmXy3kPilB02aJE58u_Sn_28It/view?usp=sharing" target="_blank"><FontAwesomeIcon icon={faDownload} />Download </a></p>

                    </header>
                </div>
                <div className="col-12">
                    <div className="intro section shadow-lg p-3 mb-5 bg-body rounded" data-aos="fade-down-left">
                        <h5 className="heading">Introduction</h5>
                        <h3>MD. OMAR FARUK KHAN</h3>
                        <h6>Front-End Developer</h6>
                        <p className="text-wrap ">361/2 Khilgaon,Dhaka,Bangladesh.</p>
                        <p className="text-wrap "><FontAwesomeIcon icon={faPhone} />:01853750606</p>
                        <p className="text-wrap "><FontAwesomeIcon icon={faAt} />:omarfarukkhan647@gmail.com</p>
                        <p className="text-wrap "><FontAwesomeIcon icon={faGithub} />:https://github.com/omar-faruk02</p>
                        <p className="text-wrap "><FontAwesomeIcon icon={faLinkedin} />:https://www.linkedin.com/in/md-omarfaruk/</p>


                    </div>
                </div>
                <div className="col-12" data-aos="fade-down-right">
                    <div className="objective section shadow-lg p-3 mb-5 bg-body rounded">
                        <h5 className="heading">Objective</h5>
                        <p className="text-wrap">To work in a well organized and competitive environment related to web development, where my potentials can be exploited to the maximum extent. </p>
                    </div>
                </div>

                {/* objective end */}

                <div data-aos="fade-down-left" className="col-12">
                    <div className="skills section shadow-lg p-3 mb-5 bg-body rounded">
                        <h5 className="heading">Skills</h5>
                        <h6>Expert:</h6>
                        <p>HTML5, CSS3, Bootstrap5, Javascript, React JS, React Hook Form, React Router.</p>

                        <h6>Comfortable:</h6>
                        <p>Express.Js, Node.Js, MongoDB, Redux, Material UI, Es6.</p>
                        <h6>Familiar:</h6>
                        <p>TypeScript, Angular JS, My Sql, c/c++, php, Wordpress, Gatsby.</p>
                        <h6>Tools/Tech:</h6>
                        <p>Visual Studio Code, Firebase, Netlify, Heroku, Git.</p>
                        <h6>Language:</h6>
                        <p>Bangla,English</p>
                    </div>
                </div>

                {/* skill end */}
                <div className="col-12" data-aos="fade-down-up">
                    <div className="project section shadow-lg p-3 mb-5 bg-body rounded" >
                        <div data-aos="flip-up"><h5 className="heading">Projects</h5>

                        <h6>Project 1 : <span style={{ color: "blue" }}>Epl-Team-Info.</span></h6>
                        <h6>Features :</h6>
                        <p> If a user want to know about the history of English Premier League(EPL) the user can use this app. In this app there have all the information of a EPL team such as founded, Trophy, stadium etc. HTML, CSS, React.JS, React router this are used for creating this app. vs code used for editing this app. NetliFy is use for deploy this site.</p>
                        <h6>Tech/Tools : </h6>
                        <p>Visual Studio Code, React JS, React Router, HTML, CSS, Git, NetliFy.</p>
                        <p><FontAwesomeIcon icon={faGithub} />  https://github.com/omar-faruk02/team-info</p>
                        <p><span style={{ color: "red" }}>Live link</span> : https://604a2d3950d9dc079fff9466--focused-nobel-ce5023.netlify.app/</p>
                        <br></br>
                        <br></br>
                        </div>



                        <div data-aos="flip-up">
                        <h6>Project 2 : <span style={{ color: "blue" }}>Easy-Ride..</span></h6>
                        <h6>Features :</h6>
                        <p> This is a riding app. By using this app one can choose a ride to go one place to another place.
                        For create this app I use HTML, CSS, Bootstrap, React.js, React router, Firebase authentication.
                        </p>
                        <h6>Tech/Tools : </h6>
                        <p>Visual Studio Code, React JS, React Router, HTML, CSS, Git, Firebase.</p>
                        <p><FontAwesomeIcon icon={faGithub} /> https://github.com/omar-faruk02/Easy-Ride.</p>
                        <p><span style={{ color: "red" }}>Live link</span> : https://easy-ride-d7ce4.web.app/.app/</p>

                        </div>
                        <br></br>
                        <br></br>



                        < div data-aos="flip-up">
                        <h6>Project 3 : <span style={{ color: "blue" }}>Creative-Agency.</span></h6>
                        <h6>Features :</h6>
                        <p> This app is made for provided service by agency to the client. The agency               name is Creative Agency. A client can buy It base skill development course by this app such as Web Design, Graphics Design , Full Stack web Development course. In this App the client has a personal Dashboard by using this the client can purses course, review about the client experience with this agency and also see his order list.
                        There also has a Admin dashboard . An admin can Add new service to this app, delete services, can create new admin by email, and see all the orders which ordered by the clients.

                        </p>
                        <h6>Tech/Tools : </h6>
                        <p>Visual Studio Code, React JS, React Router, Node JS, Express JS, MongoDB, Imagebb, Heroku, HTML, CSS, Git, Firebase.</p>
                        <p><FontAwesomeIcon icon={faGithub} /> https://github.com/omar-faruk02/creative-agency-client<br></br>
                            https://github.com/omar-faruk02/creative-agency-server
                          </p>
                        <p><span style={{ color: "red" }}>Live link</span> :https://creative-agency-a40e4.web.app/</p>
                    </div>
                </div>
                </div>

                <div className="col-12" data-aos="fade-down-left">
                    <div className="project section shadow-lg p-3 mb-5 bg-body rounded">
                        <h5 className="heading">Education</h5>
                        <h6>B.Sc. Engineer : </h6>
                        <p style={{ fontWeight: "600" }}>Computer Science And Engineering (CSE)</p>
                        <p>	Bangladesh Institute of Science & Technology<br></br>Under National University<br></br>Passing Year: 2019

                        </p>
                    </div>
                </div>


                <div className="col-12" data-aos="fade-down-right">
                    <div className="project section shadow-lg p-3 mb-5 bg-body rounded">
                        <h5 className="heading">Computer Skills</h5>
                        <p><span style={{ fontWeight: "500" }}>Client	</span>:	Windows@(XP, Vista, 7, 8, 8.1,10)</p>
                        <p style={{ fontWeight: "500" }}>Applications	:</p>
                        <p>	MS Office@ (2003, 2007, 2010, 2013, 2016)
                        (Word, Excel, Power Point, Adobe Photoshop, Illustrator, VM Ware, Net meeting )
                        </p>
                    </div>
                </div>

                <div className="col-12" data-aos="fade-down-left">
                    <div className="project section shadow-lg p-3 mb-5 bg-body rounded">
                        <h5 className="heading">Extra-Curricular Activities</h5>
                        <p><FontAwesomeIcon icon={faChevronCircleRight} /> Assembling of PCs</p>
                        <p><FontAwesomeIcon icon={faChevronCircleRight} /> Installation & Troubleshooting of Software & Hardware Devices </p>
                        <p><FontAwesomeIcon icon={faChevronCircleRight} /> Installation & Troubleshooting of Operating System 
                        </p>
                        <p><FontAwesomeIcon icon={faChevronCircleRight} /> Installation & Configuration of Router, Switch, Modem </p>
                        </div>
                        </div>




            </div>
        </div>
    );
};

export default Resume;