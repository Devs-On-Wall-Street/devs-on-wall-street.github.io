import React, { useState } from 'react';
import { Form, Button, Alert } from 'react-bootstrap';

function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const validateForm = () => {
    let formErrors = {};
    let valid = true;

    if (!formData.name) {
      formErrors.name = 'Name is required';
      valid = false;
    }

    if (!formData.email) {
      formErrors.email = 'Email is required';
      valid = false;
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      formErrors.email = 'Email is invalid';
      valid = false;
    }

    if (!formData.subject) {
      formErrors.subject = 'Subject is required';
      valid = false;
    }

    if (!formData.message) {
      formErrors.message = 'Message is required';
      valid = false;
    }

    setErrors(formErrors);
    return valid;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (validateForm()) {
      setSubmitted(true);
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: '',
      });
      setErrors({});
    }
  };

  return (
    <Form onSubmit={handleSubmit}>
      {submitted && <Alert variant="success">Thank you! Your message has been sent.</Alert>}

      <Form.Group controlId="formName">
        <Form.Label>Name</Form.Label>
        <Form.Control
          type="text"
          placeholder="Enter your name"
          value={formData.name}
          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          isInvalid={!!errors.name}
        />
        <Form.Control.Feedback type="invalid">{errors.name}</Form.Control.Feedback>
      </Form.Group>

      <Form.Group controlId="formEmail">
        <Form.Label>Email</Form.Label>
        <Form.Control
          type="email"
          placeholder="Enter your email"
          value={formData.email}
          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
          isInvalid={!!errors.email}
        />
        <Form.Control.Feedback type="invalid">{errors.email}</Form.Control.Feedback>
      </Form.Group>

      <Form.Group controlId="formSubject">
        <Form.Label>Subject</Form.Label>
        <Form.Control
          type="text"
          placeholder="Enter subject"
          value={formData.subject}
          onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
          isInvalid={!!errors.subject}
        />
        <Form.Control.Feedback type="invalid">{errors.subject}</Form.Control.Feedback>
      </Form.Group>

      <Form.Group controlId="formMessage">
        <Form.Label>Message</Form.Label>
        <Form.Control
          as="textarea"
          rows={5}
          placeholder="Enter your message"
          value={formData.message}
          onChange={(e) => setFormData({ ...formData, message: e.target.value })}
          isInvalid={!!errors.message}
        />
        <Form.Control.Feedback type="invalid">{errors.message}</Form.Control.Feedback>
      </Form.Group>

      <Button variant="primary" type="submit">
        Send Message
      </Button>
    </Form>
  );
}

export default ContactForm;
