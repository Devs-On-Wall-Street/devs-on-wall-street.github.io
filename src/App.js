
import AboutPage from './components/AboutPage';
import HomePage from './components/HomePage';
import Layout from './components/Layout';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ResourcesPage from './components/resources/ResourcePage';
import ContactPage from './components/contact/ContactPage';
import RegistrationPage from './components/registration/RegistrationPage';
import NewsPage from './components/news/NewsPage';
import CalendarPage from './components/calendar/CalendarPage';

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/resources" element={<ResourcesPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/register" element={<RegistrationPage />} /> 
          <Route path="/news" element={<NewsPage />} /> 
          <Route path="/calendar" element={<CalendarPage />} /> 
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
