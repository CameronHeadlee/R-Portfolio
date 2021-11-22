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
            <div className='container'>
            <div className='row'>
                <div className='col d-flex justify-content-center'>
                <h1>Contact</h1>
                </div>
            </div>
            <div className='row'>
                <div className='col d-flex justify-content-center'>
                <p className='below'>Below you will find the best phone number to reach me at as well as a simple contact form to send me an email. Use either to contact me at any point. If you would like to email me, simply fill out the form with the stated information and I will respond as soon as possible!</p>
                </div>
            </div>
            <div className='row'>
                <div className='col d-flex justify-content-center'>
                <h1>Phone:</h1>
                <h1 className='ps-1'>(614)-517-7587</h1>
                </div>
            </div>
            
                <Form className='pt-3' ref={form} onSubmit={sendEmail}>
                <div className='row'>
                    <div className='col d-flex justify-content-center'>
                        <Form.Group controlId="exampleForm.ControlInput1">
                            <Form.Label className='phone d-flex justify-content-center'>Email</Form.Label>
                                <Form.Control type="email" name="user_email" />
                        </Form.Group>
                        </div>
                    </div>    
                    <div className='row'>
                    <div className='col'>
                        <Form.Group controlId="exampleForm.ControlTextarea1">
                            <Form.Label className='phone d-flex justify-content-center'>Message</Form.Label>
                                <Form.Control as="textarea" name="message" rows={5}/>
                        </Form.Group>
                        </div>
                    </div>
                    <div className='row'>
                    <div className='col d-flex justify-content-center'>
                        <Button variant="outline-mail" type="submit">
                            Send
                            <FontAwesomeIcon icon="paper-plane" />
                        </Button>
                        </div>
                    </div>
                </Form>
              
                <div className='row'>
                    <div className='col d-flex justify-content-end'>
                    <Link to="/Resume">
                        <Button variant='outline-two'>
                            Resume
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

export default Contact;