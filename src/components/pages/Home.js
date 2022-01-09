import React from "react";
import Img from "../../assets/images/cameron-headlee.png";
import Image from "react-bootstrap/Image";
import { Link } from "react-router-dom";
import Button from "react-bootstrap/Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import '../../styles/Home.css';

function Home() {
    
    return (
    <div className="background" style={{
        backgroundImage: `url("https://bit.ly/3t8IdMg")`
    }}>
        <div className="container">
            <div className="row">
                <div className="col d-flex justify-content-center">
                    <Image className="image" src ={Img} alt="Head shot of me."/>
                </div>
            </div>
            <div className="row">
                <div className="col d-flex justify-content-center">
                    <h1>Welcome!</h1>
                </div>
            </div>
            <div className="row">
                <div className="col d-flex justify-content-center">
                    <ul className="intro"> 
                        <li>As you move through, you will notice icons, buttons, and accordions.</li>
                        <li>The icons and buttons are in place for you to navigate to different pages within and outside the website.</li>  
                        <li>If you see an accordion anywhere throughout the website like the two on the next page, click on it to view the writing related to the heading.</li>
                        <li>At the bottom of every page, you will notice three icons. Click on these icons to be taken to my LinkedIn, GitHub, or Twitter account.</li> 
                        <li>You can use the buttons on the bottom or the navigation bar up top on every page to traverse through the website. Thank you for stopping by!</li>
                    </ul>
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
