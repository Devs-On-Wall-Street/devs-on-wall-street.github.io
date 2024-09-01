import React from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';

function AboutPage() {
  return (
    <div>
      {/* Hero Section */}
      <div className="bg-dark text-white text-center py-5">
        <Container>
          <h1>About Devs on Wallstreet</h1>
          <p>
            Our mission is to bridge the gap between technology and finance through community, education, and hands-on projects.
          </p>
        </Container>
      </div>

      {/* Mission Section */}
      <Container className="my-5">
        <Row>
          <Col md={12}>
            <Card className="text-center">
              <Card.Body>
                <Card.Title>Our Mission</Card.Title>
                <Card.Text>
                  At Devs on Wallstreet, we aim to empower students with the skills and knowledge needed to excel in the tech and finance industries. We organize workshops, hackathons, and networking events to foster growth and collaboration among our members.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>

      {/* Team Section */}
      <Container className="my-5">
        <h2 className="text-center mb-4">Meet the Team</h2>
        <Row>
          <Col md={4}>
            <Card className="text-center">
              <Card.Img 
                variant="top" 
                src="https://via.placeholder.com/150" 
                alt="Team Member Image" 
                style={{ width: '300px', height: '300px', margin: '15px auto' }}
              />
              <Card.Body>
                <Card.Title>Team Member One</Card.Title>
                <Card.Text>
                  John Doe - President
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4}>
            <Card className="text-center">
              <Card.Img 
                variant="top" 
                src="https://via.placeholder.com/150" 
                alt="Team Member Image" 
                style={{ width: '300px', height: '300px', margin: '15px auto' }}
              />
              <Card.Body>
                <Card.Title>Team Member Two</Card.Title>
                <Card.Text>
                  Jane Smith - Vice President
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4}>
            <Card className="text-center">
              <Card.Img 
                variant="top" 
                src="https://via.placeholder.com/150" 
                alt="Team Member Image" 
                style={{ width: '300px', height: '300px', margin: '15px auto' }}
              />
              <Card.Body>
                <Card.Title>Team Member Three</Card.Title>
                <Card.Text>
                  Emily Brown - Treasurer
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>

      {/* Join Us Section */}
      <Container fluid className="bg-secondary text-white text-center p-5">
        <h2>Interested in Joining Us?</h2>
        <p>We are always looking for passionate individuals to join our team and help us make a difference.</p>
        <Button variant="light" size="lg">Get in Touch</Button>
      </Container>
    </div>
  );
}

export default AboutPage;
