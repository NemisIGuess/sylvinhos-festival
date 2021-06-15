import './Events.css';
import { useState } from 'react';
import walkingEvent from '../../Images/walking-event.jpg';
import event02 from '../../Images/landing-background.jpg';

function Events() {
  const [events, setEvents] = useState([
    {
      name: 'Gymkana',
      date: 'Miercoles 15, 18:00',
      description: 'una gymkana',
      image: walkingEvent,
    },
    {
      name: 'gymkana',
      date: 'Miercoles 15, 18:00',
      description: 'una gymkana',
      image: event02,
    },
    {
      name: 'gymkana',
      date: 'Miercoles 15, 18:00',
      description: 'una gymkana',
      image: '',
    },
    {
      name: 'gymkana',
      date: 'Miercoles 15, 18:00',
      description: 'una gymkana',
      image: '',
    },
    {
      name: 'gymkana',
      date: 'Miercoles 15, 18:00',
      description: 'una gymkana',
      image: '',
    },
    {
      name: 'gymkana',
      date: 'Miercoles 15, 18:00',
      description: 'una gymkana',
      image: '',
    },
    {
      name: 'gymkana',
      date: 'Miercoles 15, 18:00',
      description: 'una gymkana',
      image: '',
    },
    {
      name: 'gymkana',
      date: 'Miercoles 15, 18:00',
      description: 'una gymkana',
      image: '',
    },
    {
      name: 'gymkana',
      date: 'Miercoles 15, 18:00',
      description: 'una gymkana',
      image: '',
    },
    {
      name: 'gymkana',
      date: 'Miercoles 15, 18:00',
      description: 'una gymkana',
      image: '',
    },
  ]);

  return (
    <div className="events-container">
      {events.map((event) => {
        return (
          <div
            className="event"
            style={{
              backgroundImage: `url(${event.image})`,
              backgroundRepeat: 'no-repeat',
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }}
          >
            <p>{event.date}</p>
            <h3 className="event-title">{event.name}</h3>
            <p>{event.description}</p>
          </div>
        );
      })}
    </div>
  );
}

export default Events;
