
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const Participant = require('./models/Participant');
const Message = require('./models/Message');
const User = require('./models/User');


const { validateParticipant, validateMessage, validateLogin } = require('./middleware/validate');

const app = express();
app.use(express.json());
app.use(cors());


mongoose.connect(process.env.MONGO_URI)
    .then(() => console.log('Database connected successfully!'))
    .catch(err => console.error(err));


// 1. REGISTRATION FORM API 
app.post('/api/register', validateParticipant, async (req, res) => {
    try {
        const { email } = req.body;

        const userExists = await Participant.findOne({ email });
        if (userExists) {
            return res.status(400).json({ success: false, message: 'This email is already registered!' });
        }

        const newParticipant = new Participant(req.body);
        await newParticipant.save();

        res.status(201).json({ success: true, message: 'Event Registration Successful!', data: newParticipant });
    } catch (error) {
        res.status(500).json({ success: false, message: error.message });
    }
});


// 2. FETCH ALL REGISTRATIONS ENDPOINT 
app.get('/api/registrations', async (req, res) => {
    try {
        const totalRegistrations = await Participant.find().sort({ registeredAt: -1 });
        res.status(200).json({
            success: true,
            count: totalRegistrations.length,
            data: totalRegistrations
        });
    } catch (error) {
        res.status(500).json({ success: false, message: error.message });
    }
});


// 3. GET IN TOUCH API
app.post('/api/get-in-touch', validateMessage, async (req, res) => {
    try {
        const newMessage = new Message(req.body);
        await newMessage.save();
        res.status(201).json({ success: true, message: 'Thank you! Your message has been submitted successfully. We will get back to you soon.' });
    } catch (error) {
        res.status(500).json({ success: false, message: error.message });
    }
});


// 4. LOGIN API 
app.post('/api/user/login', validateLogin, async (req, res) => {
    try {
       const { email, password } = req.body;

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            return res.status(400).json({ success: false, message: 'Please enter a valid email format (e.g., name@gmail.com).' });
        }

        let user = await User.findOne({ email });

        if (user) {
            if (user.password !== password) {
                return res.status(400).json({ success: false, message: 'Incorrect password for this email.' });
            }
            return res.status(200).json({ success: true, message: 'Welcome back! Login successful.' });
        } else {
            const newUser = new User({ email, password });
            await newUser.save();
            return res.status(200).json({ success: true, message: 'Account created and login successful! Welcome to the club.' });
        }
    } catch (error) {
        res.status(500).json({ success: false, message: error.message });
    }
});

// Server Port
const PORT = 5000;
app.listen(PORT, () => console.log(`Backend server running on port ${PORT}`));