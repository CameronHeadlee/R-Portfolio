import React from 'react';
import '../../styles/About.css'

const styles = {
    aboutStyles: {
        backgroundColor: '#19535f',
        color: '#FFFFFF',
        minHeight: '100vh',
    },
    textStyle: {
        fontSize: '20px',
    },
    headingStyle: {
        paddingTop: '80px'
    }
};

function About() {
    return (
        <> 
        <div style={styles.aboutStyles}>
            <h1 style={styles.headingStyle}>About me</h1>
            <p style={styles.textStyle}>
            I am a Full Stack Web developer with a certificate in Full Stack Development from The Ohio State University, combined with previous managerial and lead sales associate experience. Front End development, database theory, API’s, and git incorporated with my knowledge of the Model View Controller structure allow me to collaborate on Full Stack applications with a team such as JoinMe. My previous work experience as a sales associate has left me with great communication and interpersonal skills. My role as a manager has provided me with the ability to stay organized as well as motivate others. Development has created a special place in my heart because it inspires me to create original web applications daily. My passion for coding combined with my previous work ventures is why web development is the right career for me. 
            </p>
        </div>
        </>
    );
}

export default About;