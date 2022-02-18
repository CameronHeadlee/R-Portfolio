import React from "react";
import Img from "../../assets/images/cameron-headlee.png";
import Img3 from '../../assets/images/Certificate.png';
import Image from "react-bootstrap/Image";
import { Link } from "react-router-dom";
import Button from "react-bootstrap/Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import '../../styles/Home.css';

function Home() {
    
    return (
    <div className="main">
        <div className="container">
            <div className="row d-flex justify-content-between">
            <div className="col-md-auto">
                <Image className="image" src ={Img} alt="Head shot of me."/>
            </div>
            <div className="col-md-auto">
                <Image className="image" src ={Img3} alt="Head shot of me."/>
            </div>
            </div>
            <div className="row">
            <div className="col d-flex justify-content-center">
                <h1>Welcome!</h1>
            </div>
            </div>
            <div className="row">
            <div className="col d-flex justify-content-center">
                <p className="text-start intro">
                    As you move through, you will notice icons, buttons, and drop-downs. The icons and buttons are in place for you to navigate to different pages within and outside the website. If you see a drop-down which will be indicated with a down arrow on the far right anywhere throughout the website like the two on the About page, click on it to view the writing related to the heading. In the footer, you will notice three icons. Click on these icons to be taken to my LinkedIn, GitHub, or Twitter account. You can also use the rotating buttons on the bottom of every page or the buttons in the navigation bar up top to traverse through the website. Thank you for stopping by!
                </p>
            </div>
            </div>
            <div className="row">
            <div className="col d-flex justify-content-end">
                <Link to="/About">
                    <Button variant="outline-six">
                        About
                    <FontAwesomeIcon icon="long-arrow-alt-right" size="lg" fixedWidth />
                    </Button>
                </Link>
            </div>
            </div>
        </div>
    </div>
    )
}

export default Home;
