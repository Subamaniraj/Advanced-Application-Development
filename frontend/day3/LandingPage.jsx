import React, { useState, useEffect } from 'react';
import '../../assets/css/LandingPage.css'; // Import CSS for styling
import icon1 from '../../assets/images/welcome.jpg';
import icon2 from '../../assets/images/Features.jpg';
import icon3 from '../../assets/images/icon3.png';
import icon4 from '../../assets/images/icon4.png';

function LandingPage() {
  const [scrollPos, setScrollPos] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollPos(document.body.getBoundingClientRect().top);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="landing-page">
      <section className="hero" style={{ backgroundImage: `url(${icon1})`, backgroundSize: 'cover' }}>
        <div className="hero-content">
        <h1>Make Every Event Unforgettable!</h1>
  <p>Welcome to the Party Event Management System - Your Ultimate Solution for Seamless Event Planning. Discover a world of effortless organization, unparalleled convenience, and memorable experiences!</p>
        </div>
        <button className="cta">Learn More</button>
      </section>
      <section className="features" id="features" style={{ backgroundImage: `url(${icon2})`, backgroundSize: 'cover' }}>
      <h2>Key Features</h2>
          <div className="feature-list">
            <div className="feature">
              <img src={icon1} alt="Icon 1" className="icon" />
              <h3>Service Listing</h3>
              <p>Showcase your event services with ease.</p>
            </div>
            <div className="feature">
              <img src={icon2} alt="Icon 2" className="icon" />
              <h3>Search and Filtering</h3>
              <p>Find relevant event services based on specific criteria.</p>
            </div>
            <div className="feature">
              <img src={icon3} alt="Icon 3" className="icon" />
              <h3>Booking System</h3>
              <p>Streamline the booking process for your events.</p>
            </div>
            <div className="feature">
              <img src={icon4} alt="Icon 4" className="icon" />
              <h3>Communication Tools</h3>
              <p>Effortlessly communicate with clients and service providers.</p>
            </div>
          </div>
      </section>
      <section className="how-it-works" id="how-it-works" style={{ backgroundImage: `url(${icon3})`, backgroundSize: 'cover' }}>
      <h2>How It Works</h2>
          <div className="steps">
            <div className="step">
              <h3>Step 1: Search</h3>
              <p>Search for event services based on your requirements.</p>
            </div>
            <div className="step">
              <h3>Step 2: Book</h3>
              <p>Book your desired services directly through the platform.</p>
            </div>
            <div className="step">
              <h3>Step 3: Communicate</h3>
              <p>Communicate with service providers and finalize details.</p>
            </div>
          </div>
      </section>
      <section className="testimonials" id="testimonials" style={{ backgroundImage: `url(${icon4})`, backgroundSize: 'cover' }}>
      <h2>Testimonials</h2>
          <div className="testimonial">
            <p>"The Party USER System made planning my event a breeze! Highly recommended!"</p>
            <p>- John Doe</p>
          </div>
          <div className="testimonial">
            <p>"I've been using this platform for all my events, and it's been a game-changer!"</p>
            <p>- Jane Smith</p>
          </div>
      </section>
      <footer className="footer">
      <p>Contact us: example@email.com</p>
          <div className="social-links">
            <a href="#">Facebook</a>
            <a href="#">Twitter</a>
            <a href="#">Instagram</a>
          </div>
      </footer>
    </div>
  );
}

export default LandingPage;
