// models/Participant.js
const mongoose = require('mongoose');

const participantSchema = new mongoose.Schema({
    firstName: { type: String, required: true, trim: true },
    lastName: { type: String, required: true, trim: true },
    email: { type: String, required: true, unique: true, trim: true, lowercase: true },
    registration: { type: String, required: true, trim: true },
    year: { type: String, required: true, trim: true }, 
    contact: { type: String, required: true, trim: true },
    question: { type: String, required: true, trim: true }, 
    registeredAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Participant', participantSchema);