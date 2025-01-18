import { Carousel } from "react-bootstrap";
import JohnnyDiep from './Johnny Diep.jpg';
import EmilioRivas from './Emilio Rivas Avalos.jpg'
import NealPatel from './Neal Patel.jpg'
import infoMeeting from './spring2025InfoMeeting.jpg'

export default function EventCarousel() {
    return (
        <Carousel style={{ width: '70%', margin: '0 auto' }}> 
          <Carousel.Item>
            <img
              style={{ height: '300px', objectFit: 'cover' }}  
              className="d-block w-100"
              src={JohnnyDiep}
              alt="First event"
            />
            <Carousel.Caption>
              <h3>GBM with J.P. Morgan</h3>
              <p>Johnny Diep shares his experiences on being a software engineer in the financial industry!</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              style={{ height: '300px', objectFit: 'cover' }}  
              className="d-block w-100"
              src={EmilioRivas}
              alt="Second event"
            />
            <Carousel.Caption>
              <h3>First GBM of 2024</h3>
              <p>Guest speaker Emilio Rivas Avalos shares insights into the intersection of tech and finance.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              style={{ height: '300px', objectFit: 'cover' }}  
              className="d-block w-100"
              src={NealPatel}
              alt="Third event"
            />
            <Carousel.Caption>
              <h3>Resume & LinkedIn Workshop</h3>
              <p>Guest speaker Neal Patel discusses professional profiles and getting career-ready.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              style={{ height: '300px', objectFit: 'cover' }}  
              className="d-block w-100"
              src={infoMeeting}
              alt="Fourth event"
            />
            <Carousel.Caption>
              <h3>First Meeting of 2025</h3>
              <p>Overview of DOW and its mission.</p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
    );
}
