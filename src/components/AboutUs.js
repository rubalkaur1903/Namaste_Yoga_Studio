import React from "react";
import '../cssFiles/aboutus.css'

const AboutUs = () => {
    return (
        <div>
            <h1 className="welcome-message">Welcome to Namaste Yoga</h1>
            <div>
                <div className="image-paragraph-container">
                    <div className="image-paragraph-1">
                        <img className="about-image-1" src="https://media.istockphoto.com/vectors/namaste-lettering-calligraphy-inscription-on-ornate-mandala-brush-vector-id1162471057" />
                        <p className="about-paragraph-1">Yoga is essentially a spiritual discipline based on an extremely subtle science, which focuses on bringing harmony between mind and body. Namaste Yoga was founded out of the desire to provide the people, with a superior quality of health-care service. We are based in San Jose, CA and provide online classes for the ones who cannot make the commute.</p>
                    </div>
                    <div className="image-paragraph-2">
                        <img className="about-image-2" src="https://i.pinimg.com/736x/52/b8/ba/52b8ba6e396bfbabd5558f79405a8591.jpg" />
                        <p className="about-paragraph-2">Deepen your understanding of Yoga as a way to live a more conscious, healthy, and meaningful life. We offer hand crafted tea, smoothies, and coffee made with high quality ingredients to support your well being. We focus on empowering women and promoting well-being.</p>
                    </div>
                </div>
            </div>
            <div>
                <h2 className="about-parts-headings">Values</h2>
                <ul className="values">
                    <li className="values-list">
                        <h4>Good Humar: </h4>
                        <p>At Namaste Yoga, we like to keep it happy and healthy. As it is said, <span><i>"laughter is the best medicine," </i></span>we strongly believe in that.</p>
                    </li>
                    <li className="values-list">
                        <h4>Kindness: </h4>
                        <p>As Adrienne Brankert said, <span><i>"Kindness shines a spotlight on others without diminishing our own brightness," </i></span>we believe being kind to each other is the way to our own growth as well as our customers.</p>
                    </li>
                    <li className="values-list">
                        <h4>Equality: </h4>
                        <p>We are a team of all genders and colors of the rainbow. We believe strongly in equality</p>
                    </li>
                </ul>
            </div>
            <div>
                <h2 className="about-parts-headings">Mission</h2>
                <div className="mission-container">
                    <p className="mission-paragraph">Our mission is to provide a genuine and sustainable yoga practice that will continue to evolve the physical and emotional health of our customers. At Namaste Yoga we strive to provide a safe inviting environment where our members can develop a regular and realistic yoga practice. We are proud of the individual attention that our customers receive. Our instructors are passionate about teaching and are always willing to take that extra step to ensure that noone feels left behind.</p>
                </div>
            </div>
        </div>
    )
}

export default AboutUs;