import React from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';

import img1 from '../imgs/members/image1.png'
import img2 from '../imgs/members/image2.png'
import img3 from '../imgs/members/image3.jpg'
import img4 from '../imgs/members/image4.jpg'
import img5 from '../imgs/members/image5.jpg'

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
                  At Devs on Wallstreet, we aim to empower students with the skills and knowledge needed to excel in the tech and finance industries. We organize workshops, hackathons, and networking events to foster growth and collaboration among our members.-
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
                src={img1}
                alt="Team Member Image" 
                style={{ width: '300px', height: '300px', margin: '15px auto' }}
              />
              <Card.Body>
                <Card.Title>Saachi - Marketing Team</Card.Title>
                <Card.Text>
                I am a second year Computer Science major with a minor in business and a certificate in fintech. I’m interested in the applications of technology for finance and how they intersect. 
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4}>
            <Card className="text-center">
              <Card.Img 
                variant="top" 
                src={img2}
                alt="Team Member Image" 
                style={{ width: '300px', height: '300px', margin: '15px auto' }}
              />
              <Card.Body>
                <Card.Title>Eshan - Co-VP of External Affairs</Card.Title>
                <Card.Text>
                My name is Eshan Bhimani, and I am a freshman studying Computer Science with a minor in math. I enjoy the intersection of tech and finance as I aspire to use algorithms to trade in public markets. Outside of academics, I enjoy playing tennis, going to the gym, and playing poker!
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4}>
            <Card className="text-center">
              <Card.Img 
                variant="top" 
                src={img3} 
                alt="Team Member Image" 
                style={{ width: '300px', height: '300px', margin: '15px auto' }}
              />
              <Card.Body>
                <Card.Title>Evan Hammam - VP</Card.Title>
                <Card.Text>
                I am a fourth year Computer Science major with a minor in math. I research computer vision applications for the university. Outside of programming I like going to the gym and playing instruments.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>

           {/* Team Section */}
           <Container className="my-5">
       
        <Row>
          <Col md={4}>
            <Card className="text-center">
              <Card.Img 
                variant="top" 
                src={img4}
                alt="Team Member Image" 
                style={{ width: '300px', height: '300px', margin: '15px auto' }}
              />
              <Card.Body>
                <Card.Title>Apruva - VP of Technology</Card.Title>
                <Card.Text>
                I am a fourth year computer science major with an area of emphasis in applied data science and a minor in statistics. I am interested in the applications of data science within finance.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4}>
            <Card className="text-center">
              <Card.Img 
                variant="top" 
                src={img5}
                alt="Team Member Image" 
                style={{ width: '300px', height: '300px', margin: '15px auto' }}
              />
              <Card.Body>
                <Card.Title>Vikas - Webmaster</Card.Title>
                <Card.Text>
                  I am a second year computer science and mathematics major. I'm interested in the intersection of computational investing and machine learning. 
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
        <Button variant="light" size="lg" href='https://linktr.ee/DevsOnWallStreet'>Link Tree</Button>
      </Container>
    </div>
  );
}

export default AboutPage;
