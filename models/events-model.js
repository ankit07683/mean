const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const eventsSchema = new Schema({
    title: String,
    url_title: String,
    date: String,
    place: String,
    description: String,
    special: Boolean
})

module.exports = mongoose.model('event', eventsSchema, 'events');