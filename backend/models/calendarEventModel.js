const mongoose = require('mongoose')
const Schema = mongoose.Schema

const eventSchema = new Schema({
  userEmail: { type: String, required: true },
  events: [{
    id: {
      type: String,
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
    start: {
      type: Date,
    },
    end: {
      type: Date,
    },
    allDay: {
      type: Boolean,
    },
    label: {
      type: String,
    },
    description: {
      type: String,
    },
  }]
})

module.exports = mongoose.model('CalendarEvent', eventSchema)