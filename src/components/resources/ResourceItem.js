import React from 'react';
import { Card, Button } from 'react-bootstrap';

function ResourceItem({ title, description, link }) {
  return (
    <Card className="mb-3">
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>{description}</Card.Text>
        <Button variant="primary" href={link} target="_blank" rel="noopener noreferrer">
          Visit Resource
        </Button>
      </Card.Body>
    </Card>
  );
}

export default ResourceItem;
