import React, { useState } from 'react';
import { Calendar, momentLocalizer } from 'react-big-calendar';
import moment from 'moment';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import 'react-big-calendar/lib/css/react-big-calendar.css';

const localizer = momentLocalizer(moment);

function CalendarPage() {
  const [events, setEvents] = useState([
    {
      title: 'React Workshop',
      start: new Date(2024, 8, 15, 10, 0), // Date format is Year, Month (0-indexed), Day, Hour, Minute
      end: new Date(2024, 8, 15, 12, 0),
    },
    {
      title: 'Hackathon',
      start: new Date(2024, 8, 20, 9, 0),
      end: new Date(2024, 8, 20, 18, 0),
    },
    // Add more events as needed
  ]);

  const [newEvent, setNewEvent] = useState({
    title: '',
    start: '',
    end: '',
  });

  const handleAddEvent = (e) => {
    e.preventDefault();
    if (newEvent.title && newEvent.start && newEvent.end) {
      setEvents([...events, {
        title: newEvent.title,
        start: new Date(newEvent.start),
        end: new Date(newEvent.end),
      }]);
      setNewEvent({ title: '', start: '', end: '' });
    }
  };

  return (
    <Container className="my-5">
      <h1 className="text-center mb-4">Events Calendar</h1>
      <Row>
        <Col md={12}>
          <Calendar
            localizer={localizer}
            events={events}
            startAccessor="start"
            endAccessor="end"
            style={{ height: 500 }}
            selectable
          />
        </Col>
      </Row>

      <Row className="mt-5">
        <Col md={6} className="mx-auto">
          <h4>Add New Event</h4>
          <Form onSubmit={handleAddEvent}>
            <Form.Group controlId="formEventTitle">
              <Form.Label>Event Title</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter event title"
                value={newEvent.title}
                onChange={(e) => setNewEvent({ ...newEvent, title: e.target.value })}
              />
            </Form.Group>

            <Form.Group controlId="formEventStart">
              <Form.Label>Start Date & Time</Form.Label>
              <Form.Control
                type="datetime-local"
                value={newEvent.start}
                onChange={(e) => setNewEvent({ ...newEvent, start: e.target.value })}
              />
            </Form.Group>

            <Form.Group controlId="formEventEnd">
              <Form.Label>End Date & Time</Form.Label>
              <Form.Control
                type="datetime-local"
                value={newEvent.end}
                onChange={(e) => setNewEvent({ ...newEvent, end: e.target.value })}
              />
            </Form.Group>

            <Button variant="primary" type="submit">
              Add Event
            </Button>
          </Form>
        </Col>
      </Row>
    </Container>
  );
}

export default CalendarPage;
