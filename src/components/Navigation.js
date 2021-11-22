import React from "react";
import { Link } from "react-router-dom";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Button from "react-bootstrap/Button";
import "../styles/Navigation.css";

function Navigation() {
    return (
    <>
        <Navbar className="nav" sticky="top" collapseOnSelect expand="lg">
            <Navbar.Brand className="text-light fs-2 ps-2">Cameron Headlee</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse className="justify-content-end" id="responsive-navbar-nav">
                        <Nav.Link>
                            <Link to="/R-Portfolio">   
                                <Button variant="outline-light">About</Button>
                            </Link>  
                        </Nav.Link>
                        <Nav.Link>
                            <Link  to="/Portfolio">   
                                <Button variant="outline-light">My Work</Button>
                            </Link>
                        </Nav.Link>
                        <Nav.Link>
                            <Link to="/Contact">
                                <Button variant="outline-light">Contact</Button>
                            </Link>
                        </Nav.Link>
                        <Nav.Link>
                            <Link to="/Resume">
                                <Button variant="outline-light">Resume</Button>
                            </Link>
                        </Nav.Link>
                </Navbar.Collapse>
        </Navbar>
    </> 
    );
}

export default Navigation;