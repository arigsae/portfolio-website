import React from 'react';
import './Hero.css'; // Assuming you will create a Hero.css for styling

const Hero = () => {
    return (
        <section className="hero">
            <div className="hero-content">
                <h1>Welcome to My Portfolio</h1>
                <p>I'm a passionate developer with a love for creating beautiful and functional web applications.</p>
                <a href="#projects" className="btn">View My Work</a>
            </div>
        </section>
    );
};

export default Hero;