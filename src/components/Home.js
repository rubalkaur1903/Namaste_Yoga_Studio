import React from "react";
import '../cssFiles/home.css'

const Home = () => {
    return (
        <div>
            <h1 className="welcome-message">Welcome to Namaste Yoga</h1>
            <div className="image-paragraph-container">
                <div className="image-paragraph-1">
                    <img className="home-image" src="https://media.istockphoto.com/vectors/namaste-lettering-calligraphy-inscription-on-ornate-mandala-brush-vector-id1162471057" />
                    <p className="home-paragraph-1">Yoga is essentially a spiritual discipline based on an extremely subtle science, which focuses on bringing harmony between mind and body. Namaste Yoga was founded out of the desire to provide the people, with a superior quality of health-care service. We are based in San Jose, CA and provide online classes for the ones who cannot make the commute.</p>
                </div>
                <div className="image-paragraph-2">
                    <img className="home-image" src="https://i.pinimg.com/736x/52/b8/ba/52b8ba6e396bfbabd5558f79405a8591.jpg" />
                    <p className="home-paragraph-2">Deepen your understanding of Yoga as a way to live a more conscious, healthy, and meaningful life. We offer hand crafted tea, smoothies, and coffee made with high quality ingredients to support your well being. We focus on empowering women and promoting well-being.</p>
                </div>
            </div>
        </div>
    )
}

export default Home;