import React, { useState } from 'react';
import { Container, Row, Col, Form} from 'react-bootstrap';
import EventPreview from './EventPreview';
import infoMeetingImg from '../../components/eventCarousel/spring2025InfoMeeting.jpg';
import GBM1 from '../../components/eventCarousel/DOW_02_04.jpg';
import Karthik from '../../components/eventCarousel/Karthik.jpg';

function NewsPage() {
  const articles = [
    {
      title: 'Informational Meeting for Spring 2025',
      description: 'An overview of DOW and its mission for the Spring 2025 semester.',
      category: 'General',
      date: 'January 16, 2025',
      content: 'In this meeting new and returning members were able to get to know each other with fun questions. We discussed what type of events were lined up for the semester along with announcing new policies about attendance and an opportunity for some to potentially tour a company.',
      image: infoMeetingImg,
      //link: '/articles/ai-in-finance'
    },
    {
      title: 'Spring 2025 GBM #1',
      description: 'Exploring R, Python, and Cloud in Quant + Recruitment Insights.',
      category: 'General',
      date: 'February 4, 2025',
      content: `Key Takeaways from Spring 2025 GBM #1<br /><br />
<strong>Resume Tips:</strong><br />
- Be prepared to discuss all skills and projects listed on your resume<br />
- Tailor your resume to match the job description—this is what recruiters and ATS systems focus on.<br /><br />

<strong>Interview Tips:</strong><br />
- Ensure your interview responses reflect the skills highlighted on your resume (e.g., strong leadership experience should be backed by strong communication skills)<br />
- Research the company’s values and align your answers accordingly<br />
- Different companies prioritize different skill sets—Google, for instance, places coding ability first, whereas other companies may emphasize communication and leadership<br /><br />

<strong>Career Fair Tips:</strong><br />
- Research the company and available positions beforehand to ask relevant questions<br />
- When approaching smaller companies, a more personable and relaxed approach is acceptable, even if you don’t have much prior knowledge about them<br /><br />

<strong>Exploring R, Python, and Cloud in Quant</strong><br /><br />

<strong>R in Finance:</strong><br />
- Used for risk and statistical analysis in top-tier finance firms<br />
- Best for statistical modeling, risk analysis, time series forecasting, and volatility estimation<br />
- Preferred in academic research and regulatory reporting<br /><br />

<strong>Cloud in Quant Finance:</strong><br />
- Scales quant models and speeds up execution—critical for hedge funds and trading firms<br />
- Enables massive computation power for Monte Carlo simulations and backtesting<br />
- Supports real-time data processing for high-frequency trading<br />
- Dynamically scales storage and computation to handle large datasets efficiently<br /><br />

<strong>Python in Quant Trading & ML:</strong><br />
- Industry standard for quantitative trading, machine learning, and high-frequency strategies<br />
- Used for algorithmic trading, ML models, and backtesting<br />
- Popular libraries: pandas, NumPy, scikit-learn<br />
- Used in production systems at hedge funds, trading firms, and fintech startups<br /><br />

Connect with <a href="https://www.linkedin.com/in/daryanr/">Daryan R. on LinkedIn</a>.
`,
      image: GBM1,
      //link: '/articles/ai-in-finance'
    },
    {
      title: 'Spring 2025 GBM #2',
      description: 'An overview of GT ISyE Overview and a Q&A with guest speaker Karthik Senthil.',
      category: 'General',
      date: 'February 18, 2025',
      content: 'We covered key details about the ISyE Undergraduate Research Program, insights on research methodologies, AI applications, career development, and emerging trends in crypto and venture capital. For those who filled out the attendance form, all relevant information has been emailed to you.',
      image: Karthik,
      //link: '/articles/ai-in-finance'
    },
  ];

  const [selectedCategory, setSelectedCategory] = useState('All');

  const filteredArticles = selectedCategory === 'All'
    ? articles
    : articles.filter(article => article.category === selectedCategory);
  //const [isGeneralArticleOpen, setIsGeneralArticleOpen] = useState(false);
  const [expandedArticles, setExpandedArticles] = useState({});


  /*const toggleGeneralArticle = () => {
    setIsGeneralArticleOpen((prev) => !prev);
  };*/

  const toggleArticle = (title) => {
    setExpandedArticles((prev) => ({
      ...prev,
      [title]: !prev[title], // Toggle state for the selected article
    }));
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
      isExpandable={article.title === 'Informational Meeting for Spring 2025' || article.title === 'Spring 2025 GBM #1'|| article.title === 'Spring 2025 GBM #2'} // Enable expanding for the specific article
      isOpen={!!expandedArticles[article.title]}
      onToggle={() => toggleArticle(article.title)}
      content= {<div dangerouslySetInnerHTML={{ __html: article.content }} />} // Pass the full content for expandable articles
      image={article.image}
    />
  ))}
</Col>
      </Row>
    </Container>
  );
}

export default NewsPage;