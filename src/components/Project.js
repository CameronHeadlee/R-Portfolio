import React from "react";
import Button from "react-bootstrap/Button";
import note from "../assets/images/note_home.png";
import join from "../assets/images/join_me.png";
import workday from "../assets/images/workschedule_1.png";
import crop from "../assets/images/crop.png";
import pass from "../assets/images/passgen.png";
import { Link } from "react-router-dom";
import { Card } from "react-bootstrap";
import Badge from "react-bootstrap/Badge"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "../styles/Project.css";

function Project() {
    return (
    <>
    <portfolio className="Portfolio">
        <div className="d-flex justify-content-center flex-wrap">
            <Card className="mt-2 mx-3" style={{ width: "20rem"}}>
                <Card.Header as="h4" className="project-title">Join Me 
                    <Link to={{pathname: 
                        "https://github.com/CameronHeadlee/Event-Management-App"}}
                        target="_blank">
                        <FontAwesomeIcon className="Project float-end" icon={["fab", "github"]} />
                    </Link>
                </Card.Header>
                    <Card.Img variant="top" src ={join} alt="JoinMe application homepage" />
                <Card.Body>
                <Card.Text>
                    This application allows community event coordinators to promote events. It is a quick and easy way to reach out to others with details of upcoming events.
                </Card.Text>
                    <h5>
                        <Badge bg="language ms-1">
                            Node.js
                        </Badge>
                        <Badge bg="language ms-1">
                            Express.js
                        </Badge>
                        <Badge bg="language ms-1">
                            Handlebars
                        </Badge>
                        <Badge bg="language ms-1">
                            Bootstrap 5
                        </Badge>
                        <Badge bg="language ms-1">
                            Sequelize
                        </Badge>
                        <Badge bg="language ms-1">
                            Mysql
                        </Badge>
                    </h5>
                </Card.Body>
                <Card.Footer>
                <Button variant="outline-view" href="https://joinme-events.herokuapp.com/" target="_blank" className="card-link">View App!
                    <FontAwesomeIcon className="pt-1" icon="eye" size="lg" fixedWidth />
                </Button>
            </Card.Footer>
        </Card>
        <Card className="mt-2 mx-3" style={{ width: "20rem"}}>
            <Card.Header as="h4" className="project-title">Note App 
                <Link to={{pathname: 
                    "https://github.com/CameronHeadlee/Note-App"}}
                    target="_blank">
                    <FontAwesomeIcon className="taker float-end" icon={["fab", "github"]}  />
                </Link>
            </Card.Header>
                <Card.Img variant="top" src ={note} alt="Homepage of note taking application" />
            <Card.Body>
            <Card.Text>
                A simple way to create notes for any event, project, or chore. This application allows you to create, view, and delete the notes. 
            </Card.Text>
                <h5>
                    <Badge bg="language ms-1">
                        HTML5
                    </Badge>
                    <Badge bg="language ms-1">
                        Bootstrap 4
                    </Badge>
                    <Badge bg="language ms-1">
                        Node.js
                    </Badge>
                    <Badge bg="language ms-1">
                        Express.js
                    </Badge>
                    <Badge bg="language ms-1">
                        uuidv1
                    </Badge>
                </h5>   
            </Card.Body>
            <Card.Footer>
                <Button variant="outline-view" href="https://note-appc.herokuapp.com/" target="_blank" className="card-link">View App!
                    <FontAwesomeIcon className="pt-1" icon="eye" size="lg" fixedWidth />
                </Button>
            </Card.Footer>
        </Card>
        <Card className="mt-2 mx-3" style={{ width: "20rem"}}>
            <Card.Header as="h4" className="project-title">Workday Scheduler 
                <Link to={{pathname: 
                    "https://github.com/CameronHeadlee/Work-Schedule-Planner"}}
                    target="_blank">
                    <FontAwesomeIcon className="schedule float-end" icon={["fab", "github"]} />
                </Link>
            </Card.Header>
                <Card.Img variant="top" src ={workday} />
            <Card.Body>
            <Card.Text>
                Schedule your workday easily with this workday scheduler. You can add and save any activities you would like from the hours of 9:00 A.M. to 5:00 P.M.
            </Card.Text>
                <h5>
                    <Badge bg="language ms-1">
                        HTML5
                    </Badge>
                    <Badge bg="language ms-1">
                        CSS3
                    </Badge>
                    <Badge bg="language ms-1">
                        moment.js
                    </Badge>
                    <Badge bg="language ms-1">
                        JavaScript
                    </Badge>
                </h5>
            </Card.Body>
            <Card.Footer>
                <Button variant="outline-view" href=" https://cameronheadlee.github.io/Work-Schedule-Planner/" target="_blank" className="card-link">View App!
                    <FontAwesomeIcon className="pt-1" icon="eye" size="lg" fixedWidth />
                </Button>
            </Card.Footer>
        </Card>
        <Card className="mt-2 mx-3" style={{ width: "20rem"}}>
            <Card.Header as="h4" className="project-title">iGEM 
                <Link to={{pathname: 
                    "https://github.com/settings/organizations"}}
                    target="_blank">
                    <FontAwesomeIcon className="final float-end" icon={["fab", "github"]} />
                </Link>
            </Card.Header>
                <Card.Img variant="top" src ={crop} />
            <Card.Body>
            <Card.Text>
                I volunteered to help a group of undergraduate students from Miami University work on a project for the 2021 iGEM competition. This website details how the team aims to genetically redesign RuBP regeneration within the Calvin cycle. Our team won a gold medal at the 2021 iGEM awards. 
            </Card.Text>
                <h5>
                    <Badge bg="language ms-1">
                        HTML5
                    </Badge>
                    <Badge bg="language ms-1">
                        CSS3
                    </Badge>
                    <Badge bg="language ms-1">
                        Python
                    </Badge>
                    <Badge bg="language ms-1">
                        JavaScript
                    </Badge>
                </h5>
            </Card.Body>
            <Card.Footer>
                <Button variant="outline-view" href="https://2021.igem.org/Team:MiamiU_OH" target="_blank" className="card-link">View App!
                    <FontAwesomeIcon className="pt-1" icon="eye" size="lg" fixedWidth />
                </Button>
            </Card.Footer>
        </Card>
        <Card className="mt-2 mx-3" style={{ width: "20rem"}}>
                <Card.Header as="h4" className="project-title">Password Generator 
                    <Link to={{pathname: 
                        "https://github.com/CameronHeadlee/Password-Generator"}}
                        target="_blank">
                        <FontAwesomeIcon className="word float-end" icon={["fab", "github"]} />
                    </Link>
                </Card.Header>
                    <Card.Img variant="top" src ={pass} />
                <Card.Body>
                <Card.Text>
                    Password Generator helps you generate random, secure passwords. Once the app is open, click on the generate password button. After it will prompt you to select options. Once you pick your options, you will have a secure password generated for you.    
                </Card.Text>
                    <h5>
                        <Badge bg="language ms-1">
                            HTML5
                        </Badge>
                        <Badge bg="language ms-1">
                            CSS3
                        </Badge>
                        <Badge bg="language ms-1">
                            JavaScript
                        </Badge>
                    </h5>
                </Card.Body>
                <Card.Footer>
                    <Button variant="outline-view" href="https://cameronheadlee.github.io/Password-Generator/" target="_blank" className="card-link">View App!
                        <FontAwesomeIcon className="pt-1" icon="eye" size="lg" fixedWidth />
                    </Button>
                </Card.Footer>
            </Card>
        </div>
    </portfolio>
    </>
    )
}
export default Project;