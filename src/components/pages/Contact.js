import React from 'react';
import '../../styles/Contact.css'

const styles = {
    contactStyles: {
        backgroundColor: '#D7C9AA',
        color: '#FFFFFF',
        minHeight: '100vh',
    },
    headingStyles: {
        paddingTop: '80px',
    },
    listStyles: {
        paddingTop: '40px',
    }
};

function Contact() {
    return (
        <>
        <div style={styles.contactStyles}>
            <h1 style={styles.headingStyles}>Contact me</h1>
            <ul style={styles.listStyles}>
                <li>
                <a  href="mailto:camHcodes11@gmail.com">Email me</a>
                </li>
                <li>
                <p>Phone (614)-517-7587</p>
                </li>
            </ul>
        </div>
        </>
    );
}

export default Contact;