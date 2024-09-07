import React, {useContext} from "react";
import EventContext from "../../../context/CalendarEventContext";

function SeeEventDetailsModal({ eventDetails, onToggle, onToggleEditModal }) {
    const { deleteEvent } = useContext(EventContext);

    // Delete function
    const handleDeleteFunction = (e) => {
        if (eventDetails?.id) {
            deleteEvent(eventDetails.id);
        } else {
            console.error('No valid event ID to delete');
        }
        
        onToggle();
    };

    // Edit function
    const handleEditFunction = (e) => {
        onToggle()
        onToggleEditModal();
    }

    return (

            <div className="overlay">
                <div className="event-details-modal">
                    <div className="row event-details-modal-content">
                        <div className="modal-header align-items-start">
                            <h5 className="modal-title">{eventDetails?.title || "Event Details"}</h5>
                            <button className="btn btn-close p-1" type="button" onClick={onToggle}></button>
                        </div>
                        <div className="modal-body">
                            <p><strong>Description:</strong> {eventDetails?.description || "No description available"}</p>
                            <p><strong>Label:</strong> {eventDetails?.label || "No label available"}</p>
                            <p><strong>Date:</strong> {eventDetails?.start ? new Date(eventDetails.start).toLocaleString() : "N/A"} {eventDetails?.end ? " - " + new Date(eventDetails.end).toLocaleString() : ""}</p>
                            
                        </div>
                        <div className="col gap-1 modal-footer align-items-end">
                            <button className="btn btn-outline" type="button" onClick={handleEditFunction}>Edit</button>
                            <button className="btn btn-danger" type="button" onClick={handleDeleteFunction}>Delete</button>
                            <button className="btn btn-primary" type="button" onClick={onToggle}>Close</button>
                        </div>
                    </div>
                </div>
            </div>
    );
}

export default SeeEventDetailsModal;
