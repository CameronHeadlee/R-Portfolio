import React from 'react';
import Accordion from 'react-bootstrap/Accordion';
import '../../styles/About.css';

 const styles = {
    aboutStyles: {
        backgroundColor: '#5e5d5c',
        color: '#0b0b0b',
        minHeight: '100vh',
    },
    textStyle: {
        fontSize: '25px',
        color: '#f1faee',
        backgroundColor: '#9a1aef'
    },
    positionStyles: {
        paddingTop: 55,
        paddingLeft: 20,
        paddingRight: 20,
    }
 };

function About() {
   
    return (
    <>

    <div style={styles.aboutStyles}>
    <Accordion style={styles.positionStyles}>
        <Accordion.Item eventKey="0">
            <Accordion.Header><h1>About me</h1></Accordion.Header>
                <Accordion.Body style={styles.textStyle}>
            I am a Full Stack Web developer with a certificate in Full Stack Development from The Ohio State University, combined with previous managerial and lead sales associate experience. Front End development, database theory, API’s, and git incorporated with my knowledge of the Model View Controller structure allow me to collaborate on Full Stack applications with a team such as JoinMe. My previous work experience as a sales associate has left me with great communication and interpersonal skills. My role as a manager has provided me with the ability to stay organized as well as motivate others. Development has created a special place in my heart because it inspires me to create original web applications daily. My passion for coding combined with my previous work ventures is why web development is the right career for me. 
                </Accordion.Body>
        </Accordion.Item>
    </Accordion>
    
    <Accordion className='mt-5' style={styles.positionStyles}>
        <Accordion.Item eventKey="0">
            <Accordion.Header><h1>Favorite Quote</h1></Accordion.Header>
                <Accordion.Body style={styles.textStyle}>
            "No man ever steps in the same river twice, for it's not the same river and he's not the same man." 
            - Heraclitus
                </Accordion.Body>
        </Accordion.Item>
    </Accordion>
    </div>
    </>
    );
}

export default About;

