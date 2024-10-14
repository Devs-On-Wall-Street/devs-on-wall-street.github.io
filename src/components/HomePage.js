import { useEffect, useRef, useState } from 'react';
import { Card, Button, Carousel } from 'react-bootstrap';
import { Link } from 'react-router-dom'; 
import EventCarousel from './EventCarousel';

function HomePage() {
  return (
    <div
      style={{
        backgroundImage: `url(${"/img/Finance_Buildings_Background.jpg"})`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        height: '100vh',
        width: '100vw',
        overflowY: 'scroll',
        display: 'flex',
        flexDirection: 'column',
        backgroundAttachment: 'fixed', // Parallax effect
      }}
    >
      {/* Full-screen intro section */}
      <div
        style={{
          height: '100vh',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'flex-start',
          textAlign: 'center',
          marginTop: '60vh',
        }}
      >
        <h1 style={{ color: 'grey', fontSize: '4rem', fontWeight: 'bold' }}>
          Devs on Wall Street
        </h1>

        <Button
          variant="outline-dark"
          style={{ marginTop: '1rem', fontSize: '1.5rem' }}
          href="https://linktr.ee/devsonwallstreet"
          target="_blank"
        >
          Join Club
        </Button>
      </div>

  <br></br>
  <br></br>
      {/* About Us Section */}
      <div
        style={{
          backgroundColor: '#F2EEE8',  // Updated background color
          padding: '5rem 2rem',
          textAlign: 'center',
        }}
      >
        <h2>About Us</h2>
        <p style={{ maxWidth: '800px', margin: '0 auto' }}>
          Devs on Wall Street is a club dedicated to helping students prepare for technical positions in the finance industry. We host events, workshops, and networking opportunities to connect aspiring developers with professionals in the field.
        </p>
      </div>

      {/* Image Carousel Section */}
      <div
        style={{
          backgroundColor: '#FEFEF6',  // Updated background color
          padding: '5rem 2rem',
        }}
      >
        <EventCarousel></EventCarousel>
      </div>
    </div>
  );
}

export default HomePage;
