import React, { useState, useContext } from "react";
import EventContext from "../../../context/CalendarEventContext";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

function CreateEventModal({ onToggle }) {
  const { addEvent} = useContext(EventContext);

  const [title, setTitle] = useState("");
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);
  const [allDay, setAllDay] = useState(false);
  const [label, setLabel] = useState("Business");
  const [description, setDescription] = useState("")

  const handleSubmit = (e) => {
    e.preventDefault();

    // Create a new event object
    const newEvent = {
      id: String(new Date().getTime()),
      title,
      start: startDate,
      end: endDate,
      allDay,
      label,
      description,
    };

    // Add the new event using the addEvent function
    addEvent(newEvent);

    // Reset form fields for future event creations
    setTitle("");
    setStartDate(null);
    setEndDate(null);
    setAllDay(false);
    setLabel("");
    setDescription("")

    onToggle()
  };

  return (
    <div>
      <div className="modal fade" id="CreateEventModal" tabIndex="-1" aria-labelledby="CreateEventModalLabel" aria-hidden="true">
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <form onSubmit={handleSubmit}>
              <div className="modal-header px-card border-0">
                <div className="w-100 d-flex justify-content-between align-items-center">
                  <h5 className="mb-0 lh-sm text-body-highlight">Add new</h5>
                  <button className="discard-button btn p-1 fs-10 text-body" type="button" data-bs-dismiss="modal" aria-label="Close" onClick={onToggle}><p className="my-0">DISCARD</p></button>
                </div>
              </div>
              <div className="modal-body p-card py-0">
                <div className="form-floating mb-3">
                  <input
                    className="form-control"
                    id="eventTitle"
                    type="text"
                    name="title"
                    required
                    placeholder="Event title"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                  />
                  <label htmlFor="eventTitle">Title</label>
                </div>
                <div className="form-floating mb-5">
                  <select
                    className="form-select"
                    id="eventLabel"
                    name="label"
                    value={label}
                    onChange={(e) => setLabel(e.target.value)}
                  >
                    <option value="Business">Business</option>
                    <option value="Personal">Personal</option>
                    <option value="Meeting">Meeting</option>
                    <option value="Birthday">Birthday</option>
                    <option value="Report">Report</option>
                    <option value="Must attend">Must attend</option>
                  </select>
                  <label htmlFor="eventLabel">Label</label>
                </div>
                <div className="flatpickr-input-container mb-3">
                  <div className="form-floating">
                    <DatePicker
                      selected={startDate}
                      onChange={(date) => setStartDate(date)}
                      showTimeSelect
                      dateFormat="MMMM d, yyyy h:mm aa"
                      className="form-control"
                      placeholderText="Starts at"
                    />
                  </div>
                </div>
                <div className="flatpickr-input-container mb-3">
                  <div className="form-floating">
                    <DatePicker
                      selected={endDate}
                      onChange={(date) => setEndDate(date)}
                      showTimeSelect
                      dateFormat="MMMM d, yyyy h:mm aa"
                      className="form-control"
                      placeholderText="Ends at"
                    />
                  </div>
                </div>
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    id="eventAllDay"
                    name="allDay"
                    checked={allDay}
                    onChange={(e) => setAllDay(e.target.checked)}
                  />
                  <label className="form-check-label" htmlFor="eventAllDay">All day event</label>
                </div>
                <div className="form-floating my-5">
                  <textarea value={description}
                    onChange={(e) => setDescription(e.target.value)} className="form-control" id="eventDescription" placeholder="Leave a comment here" name="description"></textarea>
                  <label htmlFor="eventDescription">Description</label>
                </div>
                
              </div>
              <div className="modal-footer d-flex justify-content-center">
                <button className="btn btn-primary" type="submit">Save</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CreateEventModal;
