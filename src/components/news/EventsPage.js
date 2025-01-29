import React, { useState } from 'react';
import { Container, Row, Col, Form} from 'react-bootstrap';
import EventPreview from './EventPreview';
import infoMeetingImg from '../../components/eventCarousel/spring2025InfoMeeting.jpg';;

function NewsPage() {
  const articles = [
    {
      title: 'Informational Meeting for Spring 2025',
      description: 'An overview of DOW and its mission for the Spring 2025 semester.',
      category: 'General',
      date: 'January 16, 2025',
      content: 'In this meeting new and returning members were able to get to know each other with fun questions. We discussed what type of events were lined up for the semester along with announcing new policies about attendance and an opportunity for some to potentially tour a company.',
      image: infoMeetingImg
      //link: '/articles/ai-in-finance'
    },
  ];

  const [selectedCategory, setSelectedCategory] = useState('All');

  const filteredArticles = selectedCategory === 'All'
    ? articles
    : articles.filter(article => article.category === selectedCategory);
  const [isGeneralArticleOpen, setIsGeneralArticleOpen] = useState(false);

  const toggleGeneralArticle = () => {
    setIsGeneralArticleOpen((prev) => !prev);
  };

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
              <option>General</option>
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
      isExpandable={article.title === 'Informational Meeting for Spring 2025'} // Enable expanding for the specific article
      isOpen={article.title === 'Informational Meeting for Spring 2025' && isGeneralArticleOpen}
      onToggle={article.title === 'Informational Meeting for Spring 2025' ? toggleGeneralArticle : undefined}
      content={article.content} // Pass the full content for expandable articles
      image={article.image}
    />
  ))}
</Col>
      </Row>
    </Container>
  );
}

export default NewsPage;
