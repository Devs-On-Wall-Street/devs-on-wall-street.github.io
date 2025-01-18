import React from 'react';
import { Card, Button, Collapse } from 'react-bootstrap';

function ArticlePreview({ title, description, category, date, link, isExpandable, isOpen, onToggle, content  }) {
  return (
    <Card className="mb-4">
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">{category} - {date}</Card.Subtitle>
        <Card.Text>{description}</Card.Text>
        {isExpandable ? (
          <>
            <Button
              variant="primary"
              onClick={onToggle}
              aria-controls={`${title}-expandable-content`}
              aria-expanded={isOpen}
            >
              {isOpen ? 'Read Less' : 'Read More'}
            </Button>
            <Collapse in={isOpen}>
              <div id={`${title}-expandable-content`}>
                <p>{content}</p>
              </div>
            </Collapse>
          </>
        ) : (
          <Button variant="primary" href={link}>Read More</Button>
        )}
      </Card.Body>
    </Card>
  );
}

export default ArticlePreview;
