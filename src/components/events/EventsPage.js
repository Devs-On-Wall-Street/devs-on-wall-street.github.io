import React, { useState } from 'react';
import { Container, Row, Col, Form } from 'react-bootstrap';
import EventPreview from './EventPreview';

function NewsPage() {
  const articles = [
    {
      title: 'Introduction to AI in Finance',
      description: 'An overview of how artificial intelligence is being applied in the financial sector.',
      category: 'AI',
      date: 'September 1, 2024',
      link: '/articles/ai-in-finance'
    },
    {
      title: 'Understanding Blockchain Technology',
      description: 'A deep dive into blockchain and its potential to transform industries.',
      category: 'Blockchain',
      date: 'August 25, 2024',
      link: '/articles/blockchain-technology'
    },
    {
      title: 'The Rise of Quantum Computing',
      description: 'Exploring the potential and challenges of quantum computing.',
      category: 'Quantum Computing',
      date: 'August 20, 2024',
      link: '/articles/quantum-computing'
    },
  ];

  const [selectedCategory, setSelectedCategory] = useState('All');

  const filteredArticles = selectedCategory === 'All'
    ? articles
    : articles.filter(article => article.category === selectedCategory);

  return (
    <Container className="my-5">
      <Row>
        <Col md={3}>
          <h4>Filter by Category</h4>
          <Form.Group controlId="categoryFilter">
            <Form.Control 
              as="select" 
              value={selectedCategory} 
              onChange={(e) => setSelectedCategory(e.target.value)}
            >
              <option>All</option>
              <option>AI</option>
              <option>Blockchain</option>
              <option>Quantum Computing</option>
              {/* Add more categories as needed */}
            </Form.Control>
          </Form.Group>
        </Col>
        <Col md={9}>
          <h1 className="mb-4">Latest Articles</h1>
          {filteredArticles.map((article, index) => (
            <EventPreview 
              key={index}
              title={article.title}
              description={article.description}
              category={article.category}
              date={article.date}
              link={article.link}
            />
          ))}
        </Col>
      </Row>
    </Container>
  );
}

export default NewsPage;
