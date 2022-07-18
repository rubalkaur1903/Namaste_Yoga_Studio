import React from "react";
import { Link } from "react-router-dom";

import '../cssFiles/home.css'

const Home = () => {
    return (
        <div className="home-container">
            <div className="h1-container">
                <h1 className="home-h1">Namaste Yoga</h1>
                <p className="h1-container-quote">"Yoga does not just change the way we see things; it transforms the person who sees."</p>
                <p className="h1-container-quote">- B. K. S IYENGAR</p>
                <div className="home-link-div">
                    <Link className="home-link" to='/aboutus'>Learn More</Link>
                </div>
            </div>
            <div className="home-image-container">
                <img className="home-image" src="https://img.freepik.com/premium-vector/girl-doing-yoga-slender-girl-pose-white-background_505620-947.jpg?w=360" alt="yoga pose" />
            </div>
        </div>
    )
}

export default Home;