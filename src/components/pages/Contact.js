import React, { useRef } from "react";
import emailjs from "emailjs-com";
import { Link } from "react-router-dom";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import ListGroup from 'react-bootstrap/ListGroup';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "../../styles/contact.css";

const Contact = () =>  {
    const form = useRef();

    function sendEmail(e) {
        e.preventDefault();

        emailjs.sendForm(
        "service_v1bo3ik",
         "template_aja9t0y",
         e.target, 
        "user_y6IkqpSNXsUDGBmTIEhDw"
        ).then(res => {
            console.log(res);
        }).catch(err => console.log(err));
        e.target.reset();
    }
    return (
    <>
        <div className="main">
            <div className="container">
                <div className="row">
                    <div className="col d-flex justify-content-center">
                        <p className="below">You can use any of the methods below to contact me!</p>
                    </div>
                </div>
                <div className="row">
                    <div className="col d-flex justify-content-center">
                        <ListGroup horizontal>
                            <ListGroup.Item>Cellphone</ListGroup.Item>
                            <ListGroup.Item>Link to Email</ListGroup.Item>
                            <ListGroup.Item>Email form</ListGroup.Item>
                        </ListGroup>
                    </div>
                </div>
                <div className="row">
                    <div className="col d-flex justify-content-between">
                        <h1 className="link">Phone: (614)-517-7587</h1>
                        <a target="_blank" rel="noreferrer" href = "mailto: camhcodes11@gmail.com">
                            <h1 className="link">Email Link</h1>
                        </a>
                    </div>
                </div>
            <Form className="pt-3" ref={form} onSubmit={sendEmail}>
                <div className="row">
                    <div className="col d-flex justify-content-center">
                        <Form.Group controlId="exampleForm.ControlInput1">
                            <Form.Label className="phone d-flex justify-content-center">Email</Form.Label>
                                <Form.Control type="email" name="user_email" />
                        </Form.Group>
                    </div>
                </div>    
                <div className="row">
                    <div className="col">
                        <Form.Group controlId="exampleForm.ControlTextarea1">
                            <Form.Label className="phone d-flex justify-content-center">Message</Form.Label>
                                <Form.Control as="textarea" name="message" rows={5}/>
                        </Form.Group>
                    </div>
                </div>
                <div className="row">
                    <div className="col d-flex justify-content-center">
                        <Button variant="outline-mail" type="submit">
                            Send
                            <FontAwesomeIcon icon="paper-plane" />
                        </Button>
                    </div>
                </div>
            </Form>
                <div className="row d-flex justify-content-between">
                <div className="col-md-auto">
                        <Link to="/Portfolio">
                            <Button variant="outline-nine">
                                <FontAwesomeIcon icon="long-arrow-alt-left" size="lg" fixedWidth />
                                Back
                            </Button>
                        </Link>
                    </div>
                    <div className="col-md-auto">
                        <Link to="/Resume">
                            <Button variant="outline-two">
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