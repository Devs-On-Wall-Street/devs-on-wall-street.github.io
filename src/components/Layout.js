import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import clubIcon from '../imgs/DevsOnWallstreet.png';

const Layout = ({ children }) => {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      {/* Header */}
      <Navbar bg="dark" variant="dark" expand="lg">
        <Container>
          <Navbar.Brand href="/">
            <img
              src={clubIcon}
              alt="Devs on Wallstreet Icon"
              style={{ 
                width: '50px', 
                height: '50px', 
                marginRight: '10px',
                borderRadius: '50%' // Makes the logo round
              }}
            />
            Devs on Wallstreet
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link href="calendar">Calendar</Nav.Link>
              <Nav.Link href="resources">Resources</Nav.Link>
              <Nav.Link href="events">Events</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      {/* Main content */}
      <main style={{ flex: '1 0 auto' }}>
        {children}
      </main>
    </div>
  );
};

export default Layout;
