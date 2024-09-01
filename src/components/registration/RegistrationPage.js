import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import RegistrationForm from './RegistrationForm';

function RegistrationPage() {
  return (
    <Container className="my-5">
      <h1 className="text-center mb-4">Join Devs on Wallstreet</h1>
      <Row>
        <Col md={8} className="mx-auto">
          <RegistrationForm />
        </Col>
      </Row>
      <Row className="mt-5">
        <Col md={12} className="text-center">
          <h2>Join our GroupMe</h2>
          <p>After registering, please click the link below to join our GroupMe group and stay connected with our community.</p>
          <Button variant="success" href="https://groupme.com/join_link_here" target="_blank" rel="noopener noreferrer">
            Join GroupMe
          </Button>
        </Col>
      </Row>
    </Container>
  );
}

export default RegistrationPage;
