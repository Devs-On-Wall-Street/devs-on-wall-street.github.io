import React from 'react';
import { Card, Button } from 'react-bootstrap';

function ArticlePreview({ title, description, category, date, link }) {
  return (
    <Card className="mb-4">
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">{category} - {date}</Card.Subtitle>
        <Card.Text>{description}</Card.Text>
        <Button variant="primary" href={link}>Read More</Button>
      </Card.Body>
    </Card>
  );
}

export default ArticlePreview;
