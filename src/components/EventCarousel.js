import { Carousel } from "react-bootstrap";

export default function EventCarousel() {
    return (
        <Carousel>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="/img/event1.jpg"
              alt="First event"
            />
            <Carousel.Caption>
              <h3>Event One</h3>
              <p>Description of event one.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="/img/event2.jpg"
              alt="Second event"
            />
            <Carousel.Caption>
              <h3>Event Two</h3>
              <p>Description of event two.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="/img/event3.jpg"
              alt="Third event"
            />
            <Carousel.Caption>
              <h3>Event Three</h3>
              <p>Description of event three.</p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
    );
}