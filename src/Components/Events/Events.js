import './Events.css';
import { useState } from 'react';

function Events() {
  const [events, setEvents] = useState();

  return (
    <div>
      {events.map((event) => {
        return <div>{/* event */}</div>;
      })}
    </div>
  );
}

export default Events;
