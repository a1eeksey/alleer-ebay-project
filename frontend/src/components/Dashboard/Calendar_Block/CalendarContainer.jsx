import React, { useState, useEffect, useContext } from "react";
import {Modal} from 'bootstrap'
import { useAuthContext } from '../../../hooks/useAuthContext'

// Context, hook
import EventContext from "../../../context/CalendarEventContext";
import { useSyncEvents } from "../../../hooks/useCalendarEventsSync";

// Components
import CreateEventModal from "./CreateEventModal";
import SeeEventDetailsModal from "./SeeEventDetailsModal";
import EditEventModal from "./EditEventModal";

// calendar libs
import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid'
import interactionPlugin from "@fullcalendar/interaction"

// Icons
import roundPlus from '../../../assets/icons/roundPlusWhite.svg'
import syncIcon from '../../../assets/icons/syncIcon.svg'

function CalendarContainer() {
  const { user } = useAuthContext()
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);
  const [isEventDetailsModalOpened, setEventDetailsOpened] = useState(false)
  const { events } = useContext(EventContext);
  const [selectedEvent, setSelectedEvent] = useState(null);  
  const {syncEvents, error, isLoading} = useSyncEvents()

  // Calendar view based on screen width
  useEffect(() => {
    const handleResize = () => setScreenWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const handleSyncEvents = async (e) => {
    e.preventDefault()

    await syncEvents(user.token, events)
  }

  // Create event toggle
  const handleToggleCreateEventModal = () => {
    const modalElement = document.getElementById('CreateEventModal');
    let modalInstance = Modal.getInstance(modalElement) || new Modal(modalElement);
    modalElement.classList.contains('show') ? modalInstance.hide() : modalInstance.show();
  };

  // Edit event toggle
  const handleToggleEditEventModal = () => {
    const modalElement = document.getElementById('EditEventModal');
    let modalInstance = Modal.getInstance(modalElement) || new Modal(modalElement);
    modalElement.classList.contains('show') ? modalInstance.hide() : modalInstance.show();
  };

  // Event details toggle
  const handleToggleEventDetailsModal = () => {
    setEventDetailsOpened((prev) => !prev);

    if (isEventDetailsModalOpened) {
      setSelectedEvent(null);
    }
  };

  // See event details
  const handleEventClick = (clickInfo) => {
    setSelectedEvent({
      id: clickInfo.event.id,
      title: clickInfo.event.title,
      description: clickInfo.event.extendedProps.description,
      label: clickInfo.event.extendedProps.label,
      start: clickInfo.event.start,
      end: clickInfo.event.end,
      allDay: clickInfo.event.allDay
    });

    // Toggle Event Details modal
    setEventDetailsOpened(true);
  };

  // Current date
  function formatDate(date) {
    const options = { weekday: 'long', day: '2-digit', month: 'short', year: 'numeric' };
    const formattedDate = new Intl.DateTimeFormat('en-US', options).format(date);
  
    // format: "Tuesday | 20 Aug, 2024"
    const [weekday, dayMonthYear] = formattedDate.split(', ');
    return `${weekday} | ${dayMonthYear}`;
  }

  const currentDate = new Date();
  const formattedDate = formatDate(currentDate);

  return (
    <section>
      <div>
        <div className="calendar-header d-flex justify-content-between align-items-center mb-4">
          <div className="date">
            <h5 className="mb-0">{formattedDate}</h5>
          </div>
          <div className="d-flex align-items-center">
            <div onClick={handleSyncEvents} className="sync-block d-flex align-items-center mx-4">
              <img src={syncIcon} alt="..." />
              <p className="my-0 d-none d-md-flex">Sync Now</p>
            </div>
            <button className="add-new-task btn btn-primary d-flex align-items-center gap-1" type="button" onClick={handleToggleCreateEventModal}>
              <img src={roundPlus} alt="" /> 
              <p className="my-0">Add</p>
              <p className="my-0 d-none d-md-flex">new</p>
              <p className="my-0">event</p>
            </button>
          </div>
        </div>

        {/* Show FullCalendar based on screen width */}
        {screenWidth > 710 ? (
          <FullCalendar
            plugins={[dayGridPlugin, interactionPlugin]}
            initialView="dayGridMonth"
            weekends={true}
            headerToolbar={{
              left: 'prev,next today',
              center: 'title',
              right: 'dayGridMonth,dayGridWeek'
            }}
            dayMaxEvents={true}
            events={events}
            eventClick={handleEventClick}
          />
        ) : (
          <FullCalendar
            plugins={[dayGridPlugin, interactionPlugin]}
            initialView="dayGridMonth"
            weekends={true}
            headerToolbar={{
              right: 'prev,next',
              left: 'title',
            }}
            footerToolbar={{
              right: 'dayGridMonth,dayGridWeek'
            }}
            dayMaxEvents={true}
            events={events}
            eventClick={handleEventClick}
          />
        )}

        
      </div>

      {/* Create new event */}
      <CreateEventModal onToggle={handleToggleCreateEventModal} />

      {/* See event details */}
      {selectedEvent && (
        <SeeEventDetailsModal
          eventDetails={selectedEvent}
          onToggle={handleToggleEventDetailsModal}
          onToggleEditModal={handleToggleEditEventModal}
        />
      )}

      {/* Edit event */}
      <EditEventModal
          selectedEvent={selectedEvent}
          onToggle={handleToggleEditEventModal}
      />
    </section>
  );
}

export default CalendarContainer;

/*
<FullCalendar
          plugins={[dayGridPlugin, interactionPlugin]}
          initialView="dayGridMonth"
          weekends={true}
          headerToolbar={{
            right: 'prev,next',
            left: 'title',
            
          }}
          footerToolbar={{
            right: 'dayGridMonth,dayGridWeek'
          }}
          dayMaxEvents={true}
          events={events}
          eventClick={handleEventClick}
        />
*/