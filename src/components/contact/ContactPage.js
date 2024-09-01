import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import ContactForm from './ContactForm';

function ContactPage() {
  const officers = [
    {
      name: 'John Doe',
      role: 'President',
      email: 'johndoe@example.com',
    },
    {
      name: 'Jane Smith',
      role: 'Vice President',
      email: 'janesmith@example.com',
    },
    {
      name: 'Emily Brown',
      role: 'Treasurer',
      email: 'emilybrown@example.com',
    },
  ];

  return (
    <Container className="my-5">
      <h1 className="text-center mb-4">Contact Us</h1>
      <Row>
        <Col md={6}>
          <h2>Send Us a Message</h2>
          <ContactForm />
        </Col>
        <Col md={6}>
          <h2>Contact Details</h2>
          {officers.map((officer, index) => (
            <Card key={index} className="mb-3">
              <Card.Body>
                <Card.Title>{officer.name}</Card.Title>
                <Card.Text>{officer.role}</Card.Text>
                <Card.Text>Email: <a href={`mailto:${officer.email}`}>{officer.email}</a></Card.Text>
              </Card.Body>
            </Card>
          ))}
        </Col>
      </Row>
    </Container>
  );
}

export default ContactPage;
