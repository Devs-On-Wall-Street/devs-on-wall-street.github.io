import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import { FaTwitter, FaLinkedin, FaGithub } from 'react-icons/fa';

const Layout = ({ children }) => {
  return (
    <div>
      {/* Header */}
      <Navbar bg="dark" variant="dark" expand="lg">
        <Container>
          <Navbar.Brand href="#home">Your Brand</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ml-auto">
              <Nav.Link href="#home">Home</Nav.Link>
              <Nav.Link href="#about">About</Nav.Link>
              <Nav.Link href="#calendar">calendar</Nav.Link>
              <Nav.Link href="#contact">Contact</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      {/* Main content */}
      <main>
        {children}
      </main>

      {/* Footer */}
      <footer className="bg-dark text-white text-center py-4">
        <Container>
          <p>&copy; 2024 Your Brand. All Rights Reserved.</p>
          <div className="social-icons mt-3">
            <a href="https://twitter.com/yourprofile" className="text-white mx-2" target="_blank" rel="noopener noreferrer">
              <FaTwitter size="2em" />
            </a>
            <a href="https://linkedin.com/in/yourprofile" className="text-white mx-2" target="_blank" rel="noopener noreferrer">
              <FaLinkedin size="2em" />
            </a>
            <a href="https://github.com/yourprofile" className="text-white mx-2" target="_blank" rel="noopener noreferrer">
              <FaGithub size="2em" />
            </a>
          </div>
        </Container>
      </footer>
    </div>
  );
};

export default Layout;
