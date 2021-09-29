import React from 'react';
import Form from 'react-bootstrap/Form'

const styles = {
    contactStyles: {
        backgroundColor: '#D7C9AA',
        color: '#000000',
        minHeight: '100vh',
    },
    textStyles: {
        fontWeight: 'bold',
        fontSize: '25px',
        listStyle: 'none'
    }
};

function Contact() {
    return (
        <>
        <div style={styles.contactStyles}>
            <div className='d-flex justify-content-center pt-3'>
            <h1>Contact</h1>
            </div>
            <div className='d-flex justify-content-center'>
            <p style={styles.textStyles}>Phone (614)-517-7587</p>
            </div>
    <Form className='pt-5'>
        <div className='d-flex justify-content-center'>
        <Form.Group className="mb-3 w-25" controlId="exampleForm.ControlInput1">
            <Form.Label style={styles.textStyles}>Email Me</Form.Label>
            <Form.Control type="email" placeholder="name@example.com" />
        </Form.Group>
        </div>
        <div className='d-flex justify-content-center'>
            <Form.Group className="mb-3 w-50" controlId="exampleForm.ControlTextarea1">
            <Form.Label style={styles.textStyles}>Write Here!</Form.Label>
            <Form.Control as="textarea" rows={3} />
        </Form.Group>
        </div>
    </Form>
    </div>
        </>
    );
}

export default Contact;