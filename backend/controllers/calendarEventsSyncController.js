const CalendarEvent = require('../models/calendarEventModel')

const syncEvents = async (req, res) => {
    const eventsInfo = req.body
    const userEmail = eventsInfo.userEmail;
    const newEvents = eventsInfo.events;

    await CalendarEvent.findOneAndUpdate(
      { userEmail },
      { events: newEvents },
      { upsert: true, new: true }
    );
}

const getEvents = async (req, res) => {
  try {
    const userEmail = req.query.email
    const eventsInfo = await CalendarEvent.findOne({ userEmail });
    const eventsArr = eventsInfo.events

    if (eventsArr) {
      res.status(200).json(eventsArr); // Return the events array
    } else {
      console.log("No events found for this user.");
      return [];
    }
  } catch (e) {
    console.error("Error retrieving events:", e);
  }
}

module.exports = { syncEvents, getEvents }