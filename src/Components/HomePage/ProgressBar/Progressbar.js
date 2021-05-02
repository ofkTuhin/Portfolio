import React from 'react';
import ProgressBar from "@ramonak/react-progress-bar";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBootstrap, faCss3, faGit, faHtml5, faNode, faNodeJs, faReact } from '@fortawesome/free-brands-svg-icons';
import './bar.css'
const Progressbar = () => {
    return (
        <div className="text-left">
            <div className="bar">
            <p><FontAwesomeIcon icon={faHtml5}  /> <ProgressBar completed={80}  height="10px" labelSize="8px" bgColor="black"/>
            </p>
            </div>
            <div className="bar">
            <p><FontAwesomeIcon icon={faCss3} />
            <ProgressBar completed={75} height="10px" labelSize="8px" bgColor="blue" />
            </p>
            </div>
            <div className="bar">
            <p><FontAwesomeIcon icon={faNodeJs} />
            <ProgressBar completed={70} height="10px" labelSize="8px" bgColor="Yellow" />
            </p>
            </div>
            <div className="bar">
            <p><FontAwesomeIcon icon={faBootstrap}/>
            <ProgressBar completed={68} height="10px" labelSize="8px"  bgColor="purple"/>
            </p>
            </div>
            <div className="bar">
            <p><FontAwesomeIcon icon={faReact}/>
            <ProgressBar completed={60} height="10px" labelSize="8px" bgColor="lightblue"/>
            </p>
            </div>
            <div className="bar">
            <p><FontAwesomeIcon icon={faNode}/>
            <ProgressBar completed={55} height="10px" labelSize="8px"  bgColor="green"/>
            </p>
            </div>
            <div className="bar">
            <p><FontAwesomeIcon icon={faGit}/>
            <ProgressBar completed={55} height="10px" labelSize="8px"  bgColor="green"/>
            </p>
            </div>
            </div>
       
    );
};

export default Progressbar;