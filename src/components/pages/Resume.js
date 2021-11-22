import React from 'react';
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Accordion from 'react-bootstrap/Accordion';
import MyPDF from '../../assets/Resume.PDF';
import ListGroup from 'react-bootstrap/ListGroup';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import '../../styles/Resume.css';

function Resume() {
    return(
    <>
      <div className='main'>
      <div class="container">
        <div className="row">
          <div className="col d-flex justify-content-center">
            <h1>Resume</h1>
          </div>
          </div>
          <div className='row'>
            <div className='col-md-auto'>
            <p className='volunteer'>On this page, you have the option to download and view my resume. Also, there is a short list with a few skills I have gained through previous work experience that will transfer well into my new role. I have also added a short section about what I have learned while volunteering throughout my community over the years.</p>
          </div>
          </div>
          <div className='row'>
          <div className='col d-flex justify-content-center'>
                <a href={MyPDF} download='Resume.PDF'>
                  <Button variant="outline-download" type="submit">
                    Download Resume
                    <FontAwesomeIcon icon="file-download" size='lg' fixedWidth/>
                  </Button>
                </a>
                </div>
                </div>
                <div className='row d-flex justify-content-between'>
                  <div className='col-md-auto'>
                  <h2 className='text-center'>Technical Skills:</h2>
                <ListGroup variant="flush">
                  <ListGroup.Item className='text-center'>HTML\CSS\JavaScript</ListGroup.Item>
                  <ListGroup.Item className='text-center'>jQuery\React.js</ListGroup.Item>
                  <ListGroup.Item className='text-center'>Express.js\Bootstrap</ListGroup.Item>
                  <ListGroup.Item className='text-center'>Mysql\Sequelize</ListGroup.Item>
                  <ListGroup.Item className='text-center'>MongoDB\Mongoose</ListGroup.Item>
                  <ListGroup.Item className='text-center'>Node.js\Handlebars</ListGroup.Item>
                  <ListGroup.Item className='text-center'>Git\Heroku\JWT Auth</ListGroup.Item>
                </ListGroup>
                </div>
                <div className='col-md-auto'>
                <h2 className='text-center'>Transferable Skills:</h2>
                <ListGroup variant="flush">
                  <ListGroup.Item className='text-center'>Communication\Collaboration</ListGroup.Item>
                  <ListGroup.Item className='text-center'>Motivated\Problem-Solver</ListGroup.Item>
                  <ListGroup.Item className='text-center'>Passionate\Organized</ListGroup.Item>
                  <ListGroup.Item className='text-center'>Flexible\Independent</ListGroup.Item>
                </ListGroup>
                </div>
                </div>
                  <div className='row'>
                    <div className='col pt-4'>
                    <Accordion>
                      <Accordion.Item eventKey="0"> 
                        <Accordion.Header><h2>Volunteer</h2></Accordion.Header>
                          <Accordion.Body className='body'> 
                            It has always been a passion of mine to give back to others. Throughout my life I have volunteered time in many places. Whether it was volunteering at food banks, clothing pickups, Christmas drives, or special education classes. I have enjoyed every moment. It is very humbling to help someone that is less fortunate than myself because with every volunteer opportunity, the impact on my perspective for life has grown. The community I have served is always grateful for life and has taught me it is important to have a positive attitude and keep my head up, no matter the situation. 
                          </Accordion.Body>
                      </Accordion.Item>
                    </Accordion>
                  </div>
                  </div>
                    <div className='row'>
                      <div className='col d-flex justify-content-end'>
                      <Link to="/R-Portfolio">
                        <Button variant='outline-five'>
                          About
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