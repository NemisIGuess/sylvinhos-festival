import './Events.css';
import { useState } from 'react';
import walkingEvent from '../../Images/walking-event.jpg';

function Events() {
  const [events, setEvents] = useState([
    {
      name: 'gymkana',
      date: '21/09/1990',
      description: 'una gymkana',
      image: walkingEvent,
    },
    {
      name: 'gymkana',
      date: '21/09/1990',
      description: 'una gymkana',
      image: '',
    },
    {
      name: 'gymkana',
      date: '21/09/1990',
      description: 'una gymkana',
      image: '',
    },
    {
      name: 'gymkana',
      date: '21/09/1990',
      description: 'una gymkana',
      image: '',
    },
    {
      name: 'gymkana',
      date: '21/09/1990',
      description: 'una gymkana',
      image: '',
    },
    {
      name: 'gymkana',
      date: '21/09/1990',
      description: 'una gymkana',
      image: '',
    },
    {
      name: 'gymkana',
      date: '21/09/1990',
      description: 'una gymkana',
      image: '',
    },
    {
      name: 'gymkana',
      date: '21/09/1990',
      description: 'una gymkana',
      image: '',
    },
    {
      name: 'gymkana',
      date: '21/09/1990',
      description: 'una gymkana',
      image: '',
    },
    {
      name: 'gymkana',
      date: '21/09/1990',
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
            <h3 className="event-title">{event.name}</h3>
            <p>{event.date}</p>
            <p>{event.description}</p>
          </div>
        );
      })}
    </div>
  );
}

export default Events;
