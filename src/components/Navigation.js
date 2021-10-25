import React from 'react';
import { Link } from 'react-router-dom';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';

const styles = {
    navStyles: {
    backgroundColor: '#9a1aef',
    },
    navHeader: {
        color: '#f1faee'
    }
}

function Navigation() {
    return (
        <>
    <Navbar style={styles.navStyles} sticky='top' collapseOnSelect expand="lg" >
        <Navbar.Brand><h1 style={styles.navHeader}>Cameron Headlee</h1></Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse className='justify-content-end' id="responsive-navbar-nav">
        <Nav.Link>
            <Link to="/R-Portfolio"
                   
               ><Button variant="outline-light">About</Button>

            </Link>  
        </Nav.Link>
        <Nav.Link>
            <Link to="/Portfolio"
                     
                ><Button variant="outline-light">My Work</Button>

            </Link>
        </Nav.Link>
        <Nav.Link>
            <Link to="/Contact"
                    
                    
                > <Button variant="outline-light">Contact</Button>

            </Link>
        </Nav.Link>
        <Nav.Link>
            <Link to="/Resume"

                ><Button variant="outline-light">Resume</Button>

            </Link>
        </Nav.Link>
        </Navbar.Collapse>
    </Navbar>
      </> 
    );
}

export default Navigation;