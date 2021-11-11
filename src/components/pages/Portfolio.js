import React from 'react';
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import '../../styles/Portfolio.css';

function Portfolio(props) {
    return (
      <>
        <div className='main'>
          <h1 className='d-flex justify-content-center pt-2'>Portfolio</h1>
            <p className='description'>Below you will find a few projects I have created solo and with a team. Click on the <FontAwesomeIcon icon={['fab', 'github']} size='lg'/> next to the project name to view the GitHub repository and code. If you click on the <FontAwesomeIcon icon='eye' size='lg' /> and button, you will view the deployed application!</p>
              {props.children}
                <div className='d-flex justify-content-end'>
                  <Link to="/Contact">
                    <Button className="contact" variant='outline-three'>
                      Contact
                      <FontAwesomeIcon icon="long-arrow-alt-right" size="lg" fixedWidth />
                    </Button>
                  </Link>
                </div>
        </div>
      </>
    );
}

export default Portfolio;