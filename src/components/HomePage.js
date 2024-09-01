import React from 'react';
import { Container, Button, Row, Col, Card } from 'react-bootstrap';
import Image from 'react-bootstrap/Image';

function HomePage() {
  return (
    <div>
      {/* Hero Section Replacement */}
      <div className="bg-primary text-white text-center py-5">
        <Container>
          <h1>Devs on Wallstreet</h1>
          <p>
            Some kind of phrase phrase goes here.
          </p>
          <Button variant="light" size="lg" href="/about">Learn More</Button>
        </Container>
      </div>

      {/* Cards Section */}
      <Container className="my-5">
        <Row>
          <Col md={4}>
            <Card className="text-center">
              <Card.Body>
                <Card.Title>Card One</Card.Title>
                  <Card.Img 
                    variant="top" 
                    src="https://via.placeholder.com/150" 
                    alt="Feature One Image" 
                    style={{ width: '300px', height: '300px', margin: '0 auto' }}
                  />          
                  <hr></hr>   
                <Card.Text>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4}>
            <Card className="text-center">
              <Card.Body>
                <Card.Title>Card Two</Card.Title>
                <Card.Img 
                  variant="top" 
                  src="https://via.placeholder.com/150" 
                  alt="Feature One Image" 
                  style={{ width: '300px', height: '300px', margin: '0 auto' }}
                />          
                <hr></hr>      
                <Card.Text>
                  ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4}>
            <Card className="text-center">
              <Card.Body>
                <Card.Title>Card Three</Card.Title>
                  <Card.Img 
                    variant="top" 
                    src="https://via.placeholder.com/150" 
                    alt="Feature One Image" 
                    style={{ width: '300px', height: '300px', margin: '0 auto' }}
                  />          
                  <hr></hr>
                <Card.Text>
                  Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. 
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>

      <Container fluid className="bg-secondary text-white text-center p-5">
        <h2>Join our group me</h2>
        <Button variant="light" size="lg">Join Here</Button>
      </Container>
    </div>
  );
}

export default HomePage;
