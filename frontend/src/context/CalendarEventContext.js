import React, { createContext, useState } from "react";

const EventContext = createContext();

export const EventProvider = ({ children }) => {
  const [events, setEvents] = useState([]);

  const addEvent = (newEvent) => {
    setEvents([...events, newEvent]);
  };

  const editEvent = (updatedEvent) => {
    setEvents(events.map(event => (event.id === updatedEvent.id ? updatedEvent : event)));
  };

  const deleteEvent = (eventId) => {
    setEvents(events.filter(event => event.id !== eventId));
  };

  return (
    <EventContext.Provider value={{ events, setEvents, addEvent, editEvent, deleteEvent }}>
      {children}
    </EventContext.Provider>
  );
};

export default EventContext;
