import React, { useRef } from 'react';
import emailjs from 'emailjs-com';
import { Link } from 'react-router-dom';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import '../../styles/contact.css';

const Contact = () =>  {
    const form = useRef();

    function sendEmail(e) {
        e.preventDefault();

        emailjs.sendForm(
        'service_v1bo3ik',
         'template_aja9t0y',
         e.target, 
        'user_y6IkqpSNXsUDGBmTIEhDw'
        ).then(res => {
            console.log(res);
        }).catch(err => console.log(err));
        e.target.reset();
    }
    return (
    <>
        <div className='main'>
            <div className='d-flex justify-content-center pt-2'>
                <h1>Contact</h1>
            </div>
            <div className='d-flex justify-content-center'>
                <p className='below'>Below you will find the best phone number to reach me at as well as a simple contact form to send me an email. Use either to contact me at any point. If you would like to email me, simply fill out the form with the stated information and I will respond as soon as possible!</p>
            </div>
            <div className='d-flex justify-content-center pt-1'>
                <h1>Phone</h1>
            </div>
            <div className='d-flex justify-content-center'>
                <p className='phone'>(614)-517-7587</p>
            </div>
                <Form className='pt-3' ref={form} onSubmit={sendEmail}>
                    <div className='d-flex justify-content-center'>
                        <Form.Group className="mb-1 w-25" controlId="exampleForm.ControlInput1">
                            <Form.Label className='phone'>Email</Form.Label>
                                <Form.Control type="email" name="user_email" />
                        </Form.Group>
                    </div>
                    <div className='d-flex justify-content-center'>
                        <Form.Group className="mb-1 w-50" controlId="exampleForm.ControlTextarea1">
                            <Form.Label className='phone'>Message</Form.Label>
                                <Form.Control as="textarea" name="message" rows={5}/>
                        </Form.Group>
                    </div>
                    <div className='d-flex justify-content-center pt-2'>
                        <Button variant="outline-two" type="submit">
                            Send
                            <FontAwesomeIcon icon="paper-plane" />
                        </Button>
                    </div>
                </Form>
                <div className='d-flex justify-content-end'>
                    <Link to="/Resume">
                        <Button className="two" variant='outline-two'>
                            Resume
                            <FontAwesomeIcon icon="long-arrow-alt-right" size="lg" fixedWidth />
                        </Button>
                    </Link>
                </div>
        </div>
    </>
    );
}

export default Contact;