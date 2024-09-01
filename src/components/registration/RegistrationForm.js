import React, { useState } from 'react';
import { Form, Button, Alert } from 'react-bootstrap';

function RegistrationForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    major: '',
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

    if (!formData.major) {
      formErrors.major = 'Major is required';
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
        major: '',
      });
      setErrors({});
      // Optionally, handle registration logic here, like sending data to a server.
    }
  };

  return (
    <Form onSubmit={handleSubmit}>
      {submitted && <Alert variant="success">Registration successful! Please join our GroupMe.</Alert>}

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

      <Form.Group controlId="formMajor">
        <Form.Label>Major</Form.Label>
        <Form.Control
          type="text"
          placeholder="Enter your major"
          value={formData.major}
          onChange={(e) => setFormData({ ...formData, major: e.target.value })}
          isInvalid={!!errors.major}
        />
        <Form.Control.Feedback type="invalid">{errors.major}</Form.Control.Feedback>
      </Form.Group>

      <Button variant="primary" type="submit">
        Register
      </Button>
    </Form>
  );
}

export default RegistrationForm;
