import React from 'react';
import Accordion from 'react-bootstrap/Accordion';
import Img from '../../assets/images/cameron-headlee.png';
import Image from 'react-bootstrap/Image';
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import '../../styles/About.css';

function About() {
   
    return (
    <>
        <div className='main'>
            <div className='d-flex justify-content-start pt-3'>
                <Image className="image" src ={Img} alt='Head shot of me.'/>
            </div>
                <div className='d-flex justify-content-center'>
                    <p className='intro'>Welcome to my portfolio! As you move through, you will notice both Icons and buttons. These are in place to make it easier for you to navigate to different pages within the portfolio and my social media accounts. In the footer at the bottom of every page, you will notice there are three icons. One for my LinkedIn, GitHub, and Twitter account. Click those icons to be taken to any of the three pages. Also, you will notice near the bottom of every page there is a button to help you navigate to the next page without having to use the navigation bar at the top. You can use either the button or navigation bar to traverse through my portfolio. Thank you for stopping by! </p>
                </div>
                    <div className='d-flex justify-content-center pt-5 px-5'>
                        <Accordion>
                            <Accordion.Item eventKey="0"> 
                                <Accordion.Header><h2>About me</h2></Accordion.Header>
                                    <Accordion.Body className='me'> 
                                        I am a Full Stack Web developer with a certificate in Full Stack Development from The Ohio State University, combined with previous managerial and lead sales associate experience. Front End development, database theory, API’s, and git incorporated with my knowledge of the Model View Controller structure allow me to collaborate on Full Stack applications with a team such as JoinMe. My previous work experience as a sales associate has left me with great communication and interpersonal skills. My role as a manager has provided me with the ability to stay organized as well as motivate others. Development has created a special place in my heart because it inspires me to create original web applications daily. My passion for coding combined with my previous work ventures is why web development is the right career for me. 
                                    </Accordion.Body>
                            </Accordion.Item>
                        </Accordion>
                    </div>
                    <div className='d-flex justify-content-center pt-5 px-5'>
                        <Accordion className='second'>
                            <Accordion.Item eventKey="1">
                                <Accordion.Header><h2>Favorite Quote</h2></Accordion.Header>
                                    <Accordion.Body className='me'>
                                        "No man ever steps in the same river twice, for it's not the same river and he's not the same man." 
                                        - Heraclitus
                                    </Accordion.Body>
                            </Accordion.Item>
                        </Accordion>
                    </div>
                    <div className='d-flex justify-content-end py-5 px-5'>
                        <Link to="/Portfolio">
                            <Button className="work" variant='outline-one'>
                                My Work
                                <FontAwesomeIcon icon="long-arrow-alt-right" size="lg" fixedWidth />
                            </Button>
                        </Link>
                    </div>
        </div>
    </>
    );
}

export default About;

