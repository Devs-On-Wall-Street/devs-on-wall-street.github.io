import React, { useState } from 'react';
import { Container, Row, Col, Form} from 'react-bootstrap';
import EventPreview from './EventPreview';
import infoMeetingImg from '../../components/eventCarousel/spring2025InfoMeeting.jpg';
import GBM1 from '../../components/eventCarousel/DOW_02_04.jpg';
import Karthik from '../../components/eventCarousel/Karthik.jpg';
import AC from '../../components/eventCarousel/AC.jpg';
import Andrew from '../../components/eventCarousel/Andrew.jpg';
import DRW from '../../components/eventCarousel/drw.png';
import Rafay from '../../components/eventCarousel/Rafay.jpg';

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
    {
      title: 'Spring 2025 GBM #3',
      description: 'AI/Finance speed pitch activity and a Q&A with guest speaker Andrew Chen.',
      category: 'General',
      date: 'February 25, 2025',
      content: `<strong>Key Takeaways from Spring 2025 GBM #3</strong><br /><br />

<strong>Relevant Academic Background</strong><br />
- Pure mathematics has limited direct application<br />
- Applied mathematics, real-world problem-solving, and stochastic processes are highly relevant<br />
- Machine learning, computer science, statistics, data science, and financial modeling are essential for success<br /><br />

<strong>Challenges in Academia & Career Development</strong><br />
- Imposter syndrome is common as some peers may have a head start or more time for preparation<br />
- Quantitative recruiting is highly competitive and requires months of rigorous study<br />
- The industry is exclusive, with fewer opportunities and limited accessibility compared to other fields<br />
- Experts are often too busy to mentor newcomers, making it difficult to gain insider knowledge<br />
- A broad academic background, while valuable, may hinder specialization needed for quant finance<br /><br />

<strong>Quantitative Finance Interview Process</strong><br />
- Emphasizes problem-solving in quantitative trading, probability, statistics, and algorithmic challenges<br />
- Assessments include coding tests, market-making simulations, and strategy games related to trading, betting, and gambling<br />
- Initial screening tests are available on platforms like <a href="http://quantguide.io">quantguide.io</a><br />
- Later rounds focus on networking and deeper industry knowledge<br />
- Mental math skills are assessed, with firms like Acuna and Optiver emphasizing rapid calculations<br />
- Offers depend on technical proficiency, work ethic, and adaptability<br /><br />

<strong>Work Environment & Industry Realities</strong><br />
- Typical workload ranges from 50 to 60 hours per week, with a strong focus on results<br />
- Productivity and impact are valued more than time spent in the office<br />
- The role can be mentally and physically demanding<br />
- Some debate exists on whether capital allocation in quantitative finance benefits the broader economy<br />
- Non-quantitative roles tend to have lower compensation<br />
- Salary negotiation is essential to ensure fair pay<br /><br />

<strong>College & Career Advice</strong><br />
- Balancing personal interests with professional strengths is key<br />
- Passion alone may not sustain long-term motivation, as challenges are inevitable<br />
- Developing expertise in niche areas provides a competitive advantage<br /><br />

<strong>Software Engineering Interview Process</strong><br />
- Behavioral assessments evaluate cultural fit, communication, and teamwork<br />
- Technical case studies focus on problem-solving scenarios relevant to financial technology<br />
- Candidates must discuss past projects in depth, explaining challenges, solutions, and key lessons learned<br /><br />

Follow <a href="https://www.instagram.com/ac.abgs/">AC on Instagram</a>.

`,
      image: AC,
      //link: '/articles/ai-in-finance'
    },
    {
      title: 'Spring 2025 GBM #4',
      description: 'Probability Game & Guest Speaker Andrew Passero.',
      category: 'General',
      date: 'March 11, 2025',
      content: `<strong>Key Takeaways from Spring 2025 GBM #4</strong><br /><br />

<strong>Choosing Between Startups and Large Companies</strong><br />
- Startups are fast-paced with steep learning curves<br />
- Large companies offer structure, stability, and clear career paths<br />
- Rotational programs provide exposure before specialization<br /><br />

<strong>Preparing for a Career in Tech & Finance</strong><br />
- Domain knowledge helps but isn’t always required<br />
- Side projects matter more than industry experience<br />
- Scalability is key—move beyond basic prototypes<br />
- Transitioning to work requires efficiency and discipline<br /><br />

<strong>Navigating the BlackRock Recruitment Process</strong><br />
- A few LeetCode problems per week were enough<br />
- The online assessment had simple and graph problems<br />
- The interview took over a month to schedule<br />
- Coding challenge: Implement Tic-Tac-Toe with design discussion<br />
- Side projects played a major role in evaluation<br />
- Networking wasn’t necessary to land the offer<br /><br />

<strong>Succeeding as a New Grad Engineer</strong><br />
- Understand the bigger system, not just your tickets<br />
- Automate tasks to improve team productivity<br />
- Office hours help in learning from senior engineers<br />
- Promotions and bonuses depend on yearly goals<br />
- Keep learning and working on personal projects<br /><br />

<strong>Key Career Advice</strong><br />
- Side projects showcase real-world problem-solving<br />
- Networking helps but skills matter more<br />
- Don’t take industry trends at face value<br />
- Go beyond expectations and contribute ideas<br /><br />

Connect with <a href="https://www.linkedin.com/in/andrew-passero-3541b41b6/">Andrew Passero on LinkedIn</a>.


`,
      image: Andrew,
      //link: '/articles/ai-in-finance'
    },
    ,
    {
      title: 'Spring 2025 GBM #5',
      description: 'Deal or No Deal Risk/Reward Game + Q&A with Vishnu Menon.',
      category: 'General',
      date: 'March 25, 2025',
      content: `<strong>Key Takeaways from Spring 2025 GBM #5</strong><br /><br />

<strong>Insights from a Full-Time Engineer at DRW</strong><br />
- Works in DRW’s treasury team, handling financial resource allocation and crypto strategy<br />
- DRW emphasizes a strong theoretical CS foundation and building systems from the ground up<br />
- The environment is highly motivated and intellectually curious<br />
- Compared to big tech, quant roles involve fewer users, different technical challenges, and more internal systems<br />
- Examples like exchange ledger systems are more relevant in quant interviews than in big tech<br /><br />

<strong>Interviews and Technical Preparation</strong><br />
- Be confident and thorough in explaining your thought process<br />
- Know your past projects well—how they work technically and why you built them that way<br />
- Internship interviews focus mostly on LeetCode, not system design<br />
- Consistent LeetCode practice is more important than intensity<br />
- Quant interviews may include distributed systems and deeper problem breakdowns<br /><br />

<strong>Career Growth, Motivation, and the Future</strong><br />
- Big tech internships often lack real impact; quant roles can be more challenging<br />
- If you're not mentally stimulated or feeling rewarded, it's time to pivot<br />
- Try real-world projects and deploy them—go beyond isolated LeetCode problems<br />
- Keep learning by pushing yourself out of your comfort zone<br />
- Plans to stay at DRW short-term, then possibly return to big tech or explore startups<br />
- Once you’ve built strong skills, moving between industries becomes easier<br />
- AI will gradually impact how software is written, but short-term interview formats are unlikely to change significantly<br /><br />

Connect with <a href="https://www.linkedin.com/in/vishnu-menon-75977b169/">Vishnu Menon on LinkedIn</a>.



`,
      image: DRW,
      //link: '/articles/ai-in-finance'
    },
    {
      title: 'Spring 2025 GBM #6',
      description: 'Networking + Q&A with Rafay Syed.',
      category: 'General',
      date: 'April 8, 2025',
      content: `<strong>Key Takeaways from Spring 2025 GBM #6</strong><br /><br />

<strong>Insights from an Engineer at Salesforce</strong><br />
- Backend role focused on Java and SQL, with a remote frontend team based in India.  <br />
- Projects center on Salesforce integration and internal AI tools, offering deeper technical challenges than typical product-focused roles.  <br />
- Remote collaboration introduced coordination challenges not seen in prior in-office environments like GM or Home Depot.  <br />

<br />

<strong>Growth, Education, and Strategy</strong><br />
- Completed an online Master’s degree while working full-time, fully funded by GM, with a focus on real-world CS applications.  <br />
- Chose the technical track over management to stay hands-on with engineering and avoid meeting-heavy work.  <br />
- Transitioned to an AI-focused team by following up after a PM-led demo—initiative directly led to an internal move.  <br />
- Technical growth defined by sharing work through tech talks, seeking feedback, and engaging with senior engineers.  <br />

<br />

<strong>Career Advice and Interview Process</strong><br />
- Emphasize skill-building over job titles—career security comes from craft, not company name.  <br />
- Use LinkedIn to set up casual coffee chats and lean on referrals when job searching while employed.  <br />
- Interviews included HackerRank, system design, and whiteboard sessions, with a strong focus on explaining thought process clearly. <br /> 
- Recommended tools include <a href="https://www.rounds.so/">Rounds.so</a> for transparent interview prep and <a href="https://www.levels.fyi/">Levels.fyi</a> for compensation research. <br /> 

<br />

Connect with <a href="https://www.linkedin.com/in/rafay-syed-22170440/">Rafay Syed on LinkedIn</a>.


`,
      image: Rafay,
      //link: '/articles/ai-in-finance'
    },
    {
      title: 'Spring 2025 GBM #7',
      description: 'UGA Interns Q&A.',
      category: 'General',
      date: 'April 22, 2025',
      content: `<strong>Key Takeaways from Spring 2025 GBM #7</strong><br /><br />

<br />
We spoke to UGA students who have previously interned or will be interning at large companies
like Amazon and Two Sigma.  <br />

<br />


`,
      
      //link: '/articles/ai-in-finance'
    },
  ].reverse(); // just reversed the array so adding new items will appear at the top

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
      isExpandable={article.title === 'Informational Meeting for Spring 2025' || article.title === 'Spring 2025 GBM #1'|| article.title === 'Spring 2025 GBM #2'|| article.title === 'Spring 2025 GBM #3'|| article.title === 'Spring 2025 GBM #4'|| article.title === 'Spring 2025 GBM #5'|| article.title === 'Spring 2025 GBM #6'|| article.title === 'Spring 2025 GBM #7'} // Enable expanding for the specific article
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