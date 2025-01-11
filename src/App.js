import AboutPage from './components/AboutPage';
import HomePage from './components/HomePage';
import Layout from './components/Layout';
import ResourcesPage from './components/resources/ResourcePage';
import EventsPage from './components/news/EventsPage';
import CalendarPage from './components/calendar/CalendarPage';
import React, { useState } from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import clubIcon from './imgs/DevsOnWallstreet.png';

function App() {
  const [page, setPage] = useState("home");

  return (
    <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      {/* Header */}
      <Navbar bg="dark" variant="dark" expand="lg">
        <Container>
          <Navbar.Brand onClick={() => setPage("home")} style={{ cursor: 'pointer' }}>
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
              <Nav.Link onClick={() => setPage("calendar")}>Calendar</Nav.Link>
              <Nav.Link onClick={() => setPage("resources")}>Resources</Nav.Link>
              <Nav.Link onClick={() => setPage("news")}>News</Nav.Link>
              <Nav.Link onClick={() => setPage("about")}>About</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      {/* Main content */}
      <main style={{ flex: '1 0 auto' }}>
        {page === "home" && <HomePage setPage={setPage} />}
        {page === "about" && <AboutPage />}
        {page === "resources" && <ResourcesPage />}
        {page === "news" && <EventsPage />}
        {page === "calendar" && <CalendarPage />}
      </main>
    </div>
  );
}

export default App;
