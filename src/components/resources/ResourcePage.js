import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import ResourceItem from './ResourceItem';

function ResourcesPage() {
  const resources = [
    {
      title: 'MDN Web Docs',
      description: 'Comprehensive documentation for HTML, CSS, and JavaScript, as well as many other web technologies.',
      link: 'https://developer.mozilla.org/'
    },
    {
      title: 'freeCodeCamp',
      description: 'Learn to code for free with interactive tutorials and projects in web development, data science, and more.',
      link: 'https://www.freecodecamp.org/'
    },
    {
      title: 'Stack Overflow',
      description: 'A community-driven Q&A site for programmers to find solutions to coding problems.',
      link: 'https://stackoverflow.com/'
    },
    {
      title: 'GitHub',
      description: 'A platform for hosting and collaborating on code, offering version control and repository management.',
      link: 'https://github.com/'
    },
    {
      title: 'React Official Documentation',
      description: 'The official guide and documentation for building user interfaces with React.',
      link: 'https://reactjs.org/docs/getting-started.html'
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
