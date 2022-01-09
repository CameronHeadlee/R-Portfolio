import React from "react";
import { Link } from "react-router-dom";
import Button from "react-bootstrap/Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "../../styles/Portfolio.css";

function Portfolio(props) {
    return (
    <>
      <div className="main">
        <div className="container">
          <div className="row">
            <div className="col d-flex justify-content-center">
            <p className="below">Below are a few projects I have created solo and with a team!</p>
            </div>
          </div>
          <div className="row">
            <div className="col d-flex justify-content-center">
              <ul className="description">
                <li>Click on the <FontAwesomeIcon icon={["fab", "github"]} size="lg"/> next to the project name to view the GitHub repository and code.</li> 
                <li>Click on the <FontAwesomeIcon icon="eye" size="lg" /> and button, you can view the deployed application.</li>
              </ul>
            </div>
          </div>
            {props.children}
          <div className="row d-flex justify-content-between">
          <div className="col-md-auto">
              <Link to="/About">
                <Button className="contact" variant="outline-eight">
                  <FontAwesomeIcon icon="long-arrow-alt-left" size="lg" fixedWidth />
                  Back
                </Button>
              </Link>
            </div>
            <div className="col-md-auto">
              <Link to="/Contact">
                <Button className="contact" variant="outline-three">
                  Contact
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

export default Portfolio;