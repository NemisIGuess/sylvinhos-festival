import './Events.css';
import { useState } from 'react';

function Events() {
  const [events, setEvents] = useState([]);

  return (
    <div>
      {events.map((event) => {
        return (
          <div className="event-container">
            <h3>Event name</h3>
            <p>Event date</p>
            <p>Event description</p>
            {/* event: h1, image, description. If you click it opens a modal with the rest of the details */}
          </div>
        );
      })}
    </div>
  );
}

export default Events;
