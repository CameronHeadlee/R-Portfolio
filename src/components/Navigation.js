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
        <Navbar.Brand className="fs-2 ps-2">
            <Link to="/R-Portfolio" className="nav-name">
                Cameron Headlee
            </Link>
        </Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse className="justify-content-end" id="responsive-navbar-nav">
                <Nav.Link>
                    <Link to="/R-Portfolio">   
                        <Button variant="outline-nav">Home</Button>
                    </Link>  
                </Nav.Link>
                <Nav.Link>
                    <Link to="/About">   
                        <Button variant="outline-nav">About</Button>
                    </Link>  
                </Nav.Link>
                <Nav.Link>
                    <Link  to="/Portfolio">   
                        <Button variant="outline-nav">My Work</Button>
                    </Link>
                </Nav.Link>
                <Nav.Link>
                    <Link to="/Contact">
                        <Button variant="outline-nav">Contact</Button>
                    </Link>
                </Nav.Link>
                <Nav.Link>
                    <Link to="/Resume">
                        <Button variant="outline-nav">Resume</Button>
                    </Link>
                </Nav.Link>
            </Navbar.Collapse>
    </Navbar>
    </> 
    );
}

export default Navigation;