import React from "react";
import { Link } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Accordion from "react-bootstrap/Accordion";
import MyPDF from "../../assets/Resume.PDF";
import ListGroup from "react-bootstrap/ListGroup";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "../../styles/Resume.css";

function Resume() {
    return(
    <>
      <div className="main">
        <div class="container">
          <div className="row">
            <div className="col d-flex justify-content-center">
              <a href={MyPDF} download="Resume.PDF">
                <Button variant="outline-download" type="submit">
                  Download Resume
                  <FontAwesomeIcon icon="file-download" size="lg" fixedWidth/>
                </Button>
              </a>
            </div>
          </div>
          <div className="row d-flex justify-content-between">
            <div className="col-md-auto">
              <h2 className="skill text-center pt-2">Technical Skills:</h2>
                <ListGroup variant="flush">
                  <ListGroup.Item className="text-center">HTML5\CSS3\JavaScript ES6</ListGroup.Item>
                  <ListGroup.Item className="text-center">jQuery\React.js\Handlebars</ListGroup.Item>
                  <ListGroup.Item className="text-center">Responsive Design\Bootstrap</ListGroup.Item>
                  <ListGroup.Item className="text-center">Local Storage\Session Storage\indexedDB</ListGroup.Item>
                  <ListGroup.Item className="text-center">API\JSON\AJAX</ListGroup.Item>
                  <ListGroup.Item className="text-center">MongoDB\MySQL</ListGroup.Item>
                  <ListGroup.Item className="text-center">Node.js\Express</ListGroup.Item>
                  <ListGroup.Item className="text-center">User Auth\PWAs\MERN Stack</ListGroup.Item>
                  <ListGroup.Item className="text-center">Git\Heroku\GitHub Pages</ListGroup.Item>
                </ListGroup>
            </div>
            <div className="col-md-auto">
              <h2 className="skill text-center pt-2">Transferable Skills:</h2>
                <ListGroup variant="flush">
                <ListGroup.Item className="text-center">Management\Leadership</ListGroup.Item>
                <ListGroup.Item className="text-center">Customer Service\Sales</ListGroup.Item>
                  <ListGroup.Item className="text-center">Communication\Collaboration</ListGroup.Item>
                  <ListGroup.Item className="text-center">Motivated\Problem-Solver</ListGroup.Item>
                  <ListGroup.Item className="text-center">Passionate\Organized</ListGroup.Item>
                  <ListGroup.Item className="text-center">Flexible\Independent</ListGroup.Item>
                </ListGroup>
            </div>
          </div>
          <div className="row">
            <div className="col pt-4">
              <Accordion>
                <Accordion.Item eventKey="0"> 
                  <Accordion.Header><h2>Volunteer</h2></Accordion.Header>
                    <Accordion.Body className="body"> 
                    Community is important to me and I love giving back when possible. In middle school, I volunteered in a special education classroom, helping teach students and assisting teachers with projects. During high school, my service involved various programs, from Christmas toy drives, winter clothing drives, and food banks. 
                    </Accordion.Body>
                </Accordion.Item>
              </Accordion>
            </div>
          </div>
          <div className="row d-flex justify-content-between">
          <div className="col-md-auto">
              <Link to="/Contact">
                <Button variant="outline-ten">
                  <FontAwesomeIcon  icon="long-arrow-alt-left" size="lg" fixedWidth />
                  Back
                </Button>
              </Link>
            </div>
            <div className="col-md-auto">
              <Link to="/R-Portfolio">
                <Button variant="outline-five">
                  Home
                  <FontAwesomeIcon  icon="long-arrow-alt-right" size="lg" fixedWidth />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
    )
}

export default Resume;