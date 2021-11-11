import React from 'react';
import Button from 'react-bootstrap/Button';
import note from '../assets/images/note_home.png';
import join from '../assets/images/join_me.png';
import workday from '../assets/images/workschedule_1.png';
import crop from '../assets/images/crop.png';
import { Link } from 'react-router-dom';
import { Card } from 'react-bootstrap';
import Badge from 'react-bootstrap/Badge'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import '../styles/Project.css';

function Project() {
    return (
        <>
        <portfolio className="Portfolio">
            <div className="d-flex justify-content-center flex-wrap">
                <Card className='mt-2 mx-3' style={{ width: '20rem'}}>
                    <Card.Header as='h4'>Join Me 
                        <Link to={{pathname: 
                            "https://github.com/CameronHeadlee/Event-Management-App"}}
                            target="_blank">
                            <FontAwesomeIcon className='Project' icon={['fab', 'github']} />
                        </Link>
                    </Card.Header>
                    <Card.Img variant="top" src ={join} alt='JoinMe application homepage' />
                    <Card.Body>
                        <Card.Text>
                            This application allows community event coordinators to promote events. It is a quick and easy way to reach out to others with details of upcoming events.
                        </Card.Text>
                            <Badge bg="language ms-1">Node.js</Badge>
                            <Badge bg="language ms-1">Express.js</Badge>
                            <Badge bg="language ms-1">Handlebars</Badge>
                            <Badge bg="language ms-1">Bootstrap 5</Badge>
                            <Badge bg="language ms-1">Sequelize</Badge>
                            <Badge bg="language ms-1">Mysql</Badge>
                    </Card.Body>
                    <Card.Footer>
                        <Button variant="outline-view" href="https://joinme-events.herokuapp.com/" target="_blank" className="card-link">View App!
                            <FontAwesomeIcon icon="eye" fixedWidth />
                        </Button>
                    </Card.Footer>
                </Card>

                <Card className='mt-2 mx-3' style={{ width: '20rem'}}>
                    <Card.Header as='h4'>Note App 
                        <Link to={{pathname: 
                            "https://github.com/CameronHeadlee/Note-App"}}
                             target="_blank">
                            <FontAwesomeIcon className='taker' icon={['fab', 'github']}  />
                        </Link>
                    </Card.Header>
                    <Card.Img variant="top" src ={note} alt='Homepage of note taking application' />
                    <Card.Body>
                            <Card.Text>
                                A simple way to create notes for any event, project, or chore. This application allows you to create, view, and delete the notes. 
                            </Card.Text>
                                <Badge bg="language ms-1">HTML5</Badge>
                                <Badge bg="language ms-1">Bootstrap 4</Badge>
                                <Badge bg="language ms-1">Node.js</Badge>
                                <Badge bg="language ms-1">Express.js</Badge>
                                <Badge bg="language ms-1">uuidv1</Badge>   
                    </Card.Body>
                    <Card.Footer>
                        <Button variant="outline-view" href="https://note-appc.herokuapp.com/" target="_blank" className="card-link">View App!
                            <FontAwesomeIcon icon="eye" fixedWidth />
                        </Button>
                    </Card.Footer>
                </Card>

                <Card className='mt-2 mx-3' style={{ width: '20rem'}}>
                    <Card.Header as='h4'>Workday Scheduler 
                        <Link to={{pathname: 
                            "https://github.com/CameronHeadlee/Work-Schedule-Planner"}}
                            target="_blank">
                            <FontAwesomeIcon className='schedule' icon={['fab', 'github']} />
                        </Link>
                    </Card.Header>
                    <Card.Img variant="top" src ={workday} />
                    <Card.Body>
                            <Card.Text>
                            Schedule your workday easily with this workday scheduler. You can add and save any activities you would like from the hours of 9:00 A.M. to 5:00 P.M.
                            </Card.Text>
                                <Badge bg="language ms-1">HTML5</Badge>
                                <Badge bg="language ms-1">CSS3</Badge>
                                <Badge bg="language ms-1">moment.js</Badge>
                                <Badge bg="language ms-1">JavaScript</Badge>
                    </Card.Body>
                    <Card.Footer>
                        <Button variant="outline-view" href=" https://cameronheadlee.github.io/Work-Schedule-Planner/" target="_blank" className="card-link">View App!
                            <FontAwesomeIcon icon="eye" fixedWidth />
                        </Button>
                    </Card.Footer>
                </Card>

                <Card className='mt-2 mx-3' style={{ width: '20rem'}}>
                    <Card.Header as='h4'>iGEM 
                        <Link to={{pathname: 
                            "https://github.com/settings/organizations"}}
                            target="_blank">
                            <FontAwesomeIcon className='final' icon={['fab', 'github']} />
                        </Link>
                    </Card.Header>
                    <Card.Img variant="top" src ={crop} />
                    <Card.Body>
                            <Card.Text>
                            A team of students working on a Genetic Engineering project at Miami University was struggling to reach deadlines. I joined the team to help push them through to the end. This is a Website much like Wikipedia but for photosynthesis. They presented the Website in a competition against other University teams. 
                            </Card.Text>
                                <Badge bg="language ms-1">HTML5</Badge>
                                <Badge bg="language ms-1">CSS3</Badge>
                                <Badge bg="language ms-1">Python</Badge>
                                <Badge bg="language ms-1">JavaScript</Badge>
                    </Card.Body>
                    <Card.Footer>
                        <Button variant="outline-view" href="https://2021.igem.org/Team:MiamiU_OH" target="_blank" className="card-link">View App!
                            <FontAwesomeIcon icon="eye" fixedWidth />
                        </Button>
                    </Card.Footer>
                </Card>
            </div>
        </portfolio>
        </>
    )
}
export default Project;