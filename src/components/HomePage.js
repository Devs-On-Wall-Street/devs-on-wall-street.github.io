import { Button } from 'react-bootstrap';
import EventCarousel from './eventCarousel/EventCarousel';

function HomePage({ setPage }) {
  return (
    <div
      style={{
        backgroundImage: `url(${"/img/Finance_Buildings_Background.jpg"})`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        height: '100vh',
        width: '100vw',
        overflowY: 'scroll',
        display: 'flex',
        flexDirection: 'column',
        backgroundAttachment: 'fixed', // Parallax effect
      }}
    >
      {/* Full-screen intro section */}
      <div
        style={{
          height: '100vh',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'flex-start',
          textAlign: 'center',
          marginTop: '60vh',
        }}
      >
        <h1 style={{ color: 'grey', fontSize: '4rem', fontWeight: 'bold' }}>
          Devs on Wall Street
        </h1>

        <Button
          variant="outline-dark"
          style={{ marginTop: '1rem', fontSize: '1.5rem' }}
          href="https://linktr.ee/DevsOnWallStreet"
          target="_blank"
        >
          Join Club
        </Button>
      </div>

      <br></br>
      <br></br>

      {/* About Us Section */}
      <div
        style={{
          backgroundColor: '#F2EEE8', // Updated background color
          padding: '5rem 2rem',
          textAlign: 'center',
        }}
      >
        <h2>About Us</h2>
        <p style={{ maxWidth: '800px', margin: '0 auto' }}>
          Devs on Wall Street is a club dedicated to helping students prepare for technical positions in the finance industry. We host events, workshops, and networking opportunities to connect aspiring developers with professionals in the field.
        </p>
        <Button
          variant="outline-dark"
          style={{ marginTop: '1rem', fontSize: '1.5rem' }}
          onClick={() => setPage("about")}
        >
          Learn More
        </Button>
      </div>

      {/* Image Carousel Section */}
      <div
        style={{
          backgroundColor: '#FEFEF6', // Updated background color
          padding: '5rem 2rem',
        }}
      >
        <h2 className="text-center mb-5">Past Events</h2>
        <EventCarousel />
        <div className="text-center">
          <Button
            variant="outline-dark"
            style={{ marginTop: '1rem', fontSize: '1.5rem' }}
            onClick={() => setPage("calendar")}
          >
            View Upcoming Events
          </Button>
        </div>
      </div>

      {/* News Section */}
      <div
        style={{
          backgroundColor: '#F2EEE8', // Updated background color
          padding: '5rem 2rem',
        }}
      >
        <h2 className="text-center mb-5">Latest News</h2>
        <p style={{ maxWidth: '800px', margin: '0 auto', textAlign: 'center' }}>
          Stay up to date with the latest news and announcements from our club. Explore featured articles, event recaps, and industry insights curated by our members and guest speakers.
        </p>
        <div className="text-center">
          <Button
            variant="outline-dark"
            style={{ marginTop: '1rem', fontSize: '1.5rem' }}
            onClick={() => setPage("news")}
          >
            Read News
          </Button>
        </div>
      </div>

      {/* Resources Section */}
      <div
        style={{
          backgroundColor: '#FEFEF6', // Updated background color
          padding: '5rem 2rem',
        }}
      >
        <h2 className="text-center mb-5">Educational Resources</h2>
        <p style={{ maxWidth: '800px', margin: '0 auto', textAlign: 'center' }}>
          Access a collection of curated resources to help you improve your technical skills, prepare for interviews, and succeed in the finance industry.
        </p>
        <div className="text-center">
          <Button
            variant="outline-dark"
            style={{ marginTop: '1rem', fontSize: '1.5rem' }}
            onClick={() => setPage("resources")}
          >
            View Resources
          </Button>
        </div>
      </div>
    </div>
  );
}

export default HomePage;
