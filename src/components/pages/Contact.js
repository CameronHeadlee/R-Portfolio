import React from 'react';
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import '../../styles/contact.css'

const styles = {
    contactStyles: {
        backgroundColor: '#5e5d5c',
        color: '#f1faee',
        minHeight: '100vh'
    },
    textStyles: {
        fontWeight: 'bold',
        fontSize: '25px'
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
        <Form.Group className="mb-1 w-25" controlId="exampleForm.ControlInput1">
            <Form.Label style={styles.textStyles}>Your Email!</Form.Label>
            <Form.Control type="email" placeholder="name@example.com" />
        </Form.Group>
        </div>
        <div className='d-flex justify-content-center'>
            <Form.Group className="mb-1 w-50" controlId="exampleForm.ControlTextarea1">
            <Form.Label style={styles.textStyles}>Message Here!</Form.Label>
            <Form.Control as="textarea" rows={8} />
        </Form.Group>
        </div>
        <div className='d-flex justify-content-center'>
        <Button  className="button">Danger</Button>{' '}
        </div>
    </Form>
    </div>
        </>
    );
}

export default Contact;