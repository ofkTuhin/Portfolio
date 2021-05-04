import React from 'react';
import ProgressBar from "@ramonak/react-progress-bar";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBootstrap, faCss3, faGit, faHtml5, faNode, faNodeJs, faReact } from '@fortawesome/free-brands-svg-icons';
import './bar.css'
const Progressbar = () => {
    return (
        <div className=" progressBar text-left">
            <div className="bar">
            <p className="row"><FontAwesomeIcon icon={faHtml5}></FontAwesomeIcon>
            <ProgressBar className="col-11" completed={80} height="20px" labelSize="8px"  bgColor="#007bff"/>
            </p>
            </div>
            <div className="bar">
            <p className="row"><FontAwesomeIcon icon={faCss3}></FontAwesomeIcon>
            <ProgressBar className="col-11" completed={78} height="20px" labelSize="8px"  bgColor="#007bff"/>
            </p>
            </div>
            <div className="bar">
            <p className="row"><FontAwesomeIcon icon={faBootstrap}></FontAwesomeIcon>
            <ProgressBar className="col-11 " completed={70} height="20px" labelSize="8px"  bgColor="#007bff"/>
            </p>
            </div>
            <div className="bar">
            <p className="row"><FontAwesomeIcon icon={faNodeJs}></FontAwesomeIcon>
            <ProgressBar className="col-11" completed={73} height="20px" labelSize="8px"  bgColor="#007bff"/>
            </p>
            </div>
            <div className="bar">
            <p className="row"><FontAwesomeIcon icon={faReact}></FontAwesomeIcon>
            <ProgressBar className="col-11" completed={70} height="20px" labelSize="8px"  bgColor="#007bff"/>
            </p>
            </div>
            <div className="bar">
            <p className="row"><FontAwesomeIcon icon={faNode}></FontAwesomeIcon>
            <ProgressBar className="col-11" completed={60} height="20px" labelSize="8px"  bgColor="#007bff"/>
            </p>
            </div>
            <div className="bar">
            <p className="row"><FontAwesomeIcon icon={faGit}></FontAwesomeIcon>
            <ProgressBar className="col-11" completed={60} height="20px" labelSize="8px"  bgColor="#007bff"/>
            </p>
            </div>
            </div>
       
    );
};

export default Progressbar;