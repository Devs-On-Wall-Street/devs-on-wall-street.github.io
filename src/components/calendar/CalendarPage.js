import React, { useState } from 'react';
import { Calendar, momentLocalizer } from 'react-big-calendar';
import moment from 'moment';
import { Container, Row, Col, Modal, Button } from 'react-bootstrap';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import eventsData from './eventsData'; // Import the events array

const localizer = momentLocalizer(moment);

function CalendarPage() {
  const [events, setEvents] = useState(eventsData); // Use the imported data
  const [showModal, setShowModal] = useState(false);
  const [selectedEvent, setSelectedEvent] = useState(null);

  const handleSelectEvent = (event) => {
    setSelectedEvent(event);
    setShowModal(true);
  };

  const handleCloseModal = () => setShowModal(false);

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
            onSelectEvent={handleSelectEvent}
          />
        </Col>
      </Row>

      {selectedEvent && (
        <Modal show={showModal} onHide={handleCloseModal}>
          <Modal.Header closeButton>
            <Modal.Title>{selectedEvent.title}</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <p><strong>Date & Time:</strong> {moment(selectedEvent.start).format('MMMM Do YYYY, h:mm a')} - {moment(selectedEvent.end).format('MMMM Do YYYY, h:mm a')}</p>
            <p><strong>Location:</strong> {selectedEvent.location}</p>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleCloseModal}>
              Close
            </Button>
          </Modal.Footer>
        </Modal>
      )}
    </Container>
  );
}

export default CalendarPage;
