import React from "react";
import Accordion from "react-bootstrap/Accordion";
import Image from 'react-bootstrap/Image';
import Img from '../../assets/images/Madriver.png';
import Img2 from '../../assets/images/lacrosse.png';
import { Link } from "react-router-dom";
import Button from "react-bootstrap/Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "../../styles/About.css";

function About() {
   
    return (
    <>
        <div className="main">
            <div className="container">
                <div className="row">
                    <div className="col">
                        <Accordion>
                            <Accordion.Item eventKey="0"> 
                                <Accordion.Header><h2>About me</h2></Accordion.Header>
                                    <Accordion.Body className="me"> 
                                        I am a Full Stack Web developer with a certificate in Full Stack Development from The Ohio State University, combined with previous managerial and lead sales associate experience. Front End development, database theory, APIs, and git incorporated with my knowledge of the MERN stack allow me to collaborate on Full Stack applications with a team such as JoinMe. My previous work experience as a sales associate has left me with great communication and interpersonal skills. My role as a manager has provided me with the ability to stay organized as well as motivate others. Development has created a special place in my heart because it inspires me to create original web applications daily. My passion for coding combined with my previous work ventures is why web development is the right career for me. 
                                    </Accordion.Body>
                            </Accordion.Item>
                        </Accordion>
                    </div>
                </div>
                <div className="row">
                    <div className="col">
                        <Accordion className="second">
                            <Accordion.Item eventKey="1">
                                <Accordion.Header><h2>Favorite Quote</h2></Accordion.Header>
                                    <Accordion.Body className="me">
                                        "No man ever steps in the same river twice, for it"s not the same river and he"s not the same man." 
                                        - Heraclitus
                                    </Accordion.Body>
                            </Accordion.Item>
                        </Accordion>
                    </div>
                </div>
                <div className="row d-flex justify-content-around">
                    <div className="col-md-auto">
                        <Image className="picture" src ={Img} alt="Me jumping on a snowboard."/>
                    </div>
                    <div className="col-md-auto">
                        <Image className="picture" src ={Img2} alt="Lacrosse goal celebration with team."/>
                    </div>
                </div>
                <div className="row d-flex justify-content-between">
                <div className="col-md-auto">
                        <Link to="/R-Portfolio">
                            <Button variant="outline-seven">
                                <FontAwesomeIcon icon="long-arrow-alt-left" size="lg" fixedWidth />
                                Back
                            </Button>
                        </Link>
                    </div>
                    <div className="col-md-auto">
                        <Link to="/Portfolio">
                            <Button variant="outline-one">
                                My Work
                                <FontAwesomeIcon icon="long-arrow-alt-right" size="lg" fixedWidth />
                            </Button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    </>
    );
}

export default About;

