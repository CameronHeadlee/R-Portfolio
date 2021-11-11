import React from 'react';
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Accordion from 'react-bootstrap/Accordion';
import MyPDF from '../../assets/Resume.PDF';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import '../../styles/Resume.css';

function Resume() {
    return(
    <>
      <div className='main'>
        <div className='d-flex justify-content-center pt-2'>
          <h1>Resume</h1>
        </div>
          <div className='d-flex justify-content-center'>
            <p className='volunteer'>On this page, you have the option to download and view my resume. Also, there is a short list with a few skills I have gained through previous work experience that will transfer well into my new role. I have also added a short section about what I have learned while volunteering throughout my community over the years.</p>
          </div>
            <div className='d-flex justify-content-center pb-2'>
              <a href={MyPDF} download='Resume.PDF'>
                <Button variant="outline-download" type="submit">
                  Download Resume
                  <FontAwesomeIcon icon="file-download" size='lg' fixedWidth/>
                </Button>
              </a>
            </div>
              <div className='d-flex justify-content-center'>
                <h2>Transferable Skills</h2>
              </div>
                <div className='d-flex justify-content-center'>
                  <ul className='list'>
                    <li className='text-center me-4'>Communication</li>
                    <li className='text-center me-4'>Collaboration</li>
                    <li className='text-center me-4'>Passionate</li>
                    <li className='text-center me-4'>Organized</li>
                    <li className='text-center me-4'>Attitude</li>
                  </ul>
                </div>
                  <div className='d-flex justify-content-center py-5 px-5'>
                    <Accordion>
                      <Accordion.Item eventKey="0"> 
                        <Accordion.Header><h2>Volunteer</h2></Accordion.Header>
                          <Accordion.Body className='body'> 
                            It has always been a passion of mine to give back to others. Throughout my life I have volunteered time in many places. Whether it was volunteering at food banks, clothing pickups, Christmas drives, or special education classes. I have enjoyed every moment. It is very humbling to help someone that is less fortunate than myself because with every volunteer opportunity, the impact on my perspective for life has grown. The community I have served is always grateful for life and has taught me it is important to have a positive attitude and keep my head up, no matter the situation. 
                          </Accordion.Body>
                      </Accordion.Item>
                    </Accordion>
                  </div>
                    <div className='d-flex justify-content-end'>
                      <Link to="/R-Portfolio">
                        <Button className='about' variant='outline-five'>
                          About
                          <FontAwesomeIcon  icon="long-arrow-alt-right" size="lg" fixedWidth />
                        </Button>
                      </Link>
                    </div>
      </div>
    </>
    )
}

export default Resume;