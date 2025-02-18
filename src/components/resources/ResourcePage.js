import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import ResourceItem from './ResourceItem';

function ResourcesPage() {
  const resources = [
    {
      title: 'UGA Career Center',
      description: 'Official UGA Website for career guidance, interview help, resume reviews, and more.',
      link: 'https://career.uga.edu/'
    },
    {
      title: 'UGA Mentor Program',
      description: 'Connect with UGA Alumni in relevant fields in Finance and Computer Science',
      link: 'https://mentor.uga.edu/'
    },
    {
      title: 'Biginterview', 
      description: 'UGA Students can use this resource to practice common interview questions with AI feedback',
      link: 'https://uga.biginterview.com/'
    },
    {
      title: 'Investopedia',
      description: 'A resource to learn more about financial terms, definitions, equations, and more',
      link: 'https://www.investopedia.com/'
    }, 
    {
      title: 'LeetCode',
      description: 'Practice common technical interview questions with various coding challenges',
      link: 'https://leetcode.com/'
    }, 
    {
      title: 'Handshake',
      description: 'All UGA students have access to browse for internships and jobs, as well as upcoming events',
      link: 'https://app.joinhandshake.com/'
    },
    {
      title: 'Wall Street Oasis',
      description: 'A community-driven resource for finance professionals, offering career advice, resume tips, and job postings.',
      link: 'https://www.wallstreetoasis.com/'
    },
    {
      title: 'UGA Finance Society',
      description: 'A student-run organization that connects students with finance professionals and hosts networking events.',
      link: 'https://www.ugafinancesociety.com/'
    },
    {
      title: 'Financial Modeling Prep',
      description: 'Learn financial modeling and valuation techniques used in investment banking and private equity.',
      link: 'https://financialmodelingprep.com/'
    },
    {
      title: 'UGA Research Opportunities',
      description: 'Find undergraduate and graduate research opportunities in finance, AI, and other fields.',
      link: 'https://research.uga.edu/undergraduate/'
    },
    {
      title: 'JP Morgan Winning Women',
      description: 'A selective program aimed at connecting women with opportunities in finance and investment banking.',
      link: 'https://careers.jpmorgan.com/us/en/students/programs/winning-women'
    },
    {
      title: 'Goldman Sachs Insight Series',
      description: 'Virtual and in-person events designed to introduce students to careers in investment banking and finance.',
      link: 'https://www.goldmansachs.com/careers/students/programs/'
    }
  ];

  return (
    <Container className="my-5">
      <h1 className="text-center mb-4">Educational Resources & Useful Tools</h1>
      <Row>
        {resources.map((resource, index) => (
          <Col md={6} lg={4} key={index}>
            <ResourceItem 
              title={resource.title}
              description={resource.description}
              link={resource.link}
            />
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default ResourcesPage;
