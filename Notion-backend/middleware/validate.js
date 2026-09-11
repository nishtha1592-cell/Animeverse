// middleware/validate.js
const Joi = require('joi');

// 1. REGISTRATION FORM VALIDATION 
const validateParticipant = (req, res, next) => {
    const schema = Joi.object({
        firstName: Joi.string().min(2).required().messages({ 'string.empty': 'First Name is required' }),
        lastName: Joi.string().min(1).required().messages({ 'string.empty': 'Last Name is required' }),
        email: Joi.string().email().required().messages({ 'string.email': 'please enter right email' }),
        registration: Joi.string().required().messages({ 'string.empty': 'Registration number is required' }),
        year: Joi.string().required().messages({ 'string.empty': 'Year is required' }),
        contact: Joi.string().pattern(/^[0-9]{10}$/).required().messages({ 'string.pattern.base': 'Contact Number having 10 digits is required' }),
        question: Joi.string().min(5).required().messages({ 'string.empty': 'Answer of this question is required' })
    });

    const { error } = schema.validate(req.body);
    if (error) return res.status(400).json({ success: false, message: error.details[0].message });
    next();
};

// 2. GET IN TOUCH VALIDATION
const validateMessage = (req, res, next) => {
    const schema = Joi.object({
        firstName: Joi.string().required(),
        lastName: Joi.string().required(),
        email: Joi.string().email().required(),
        phone: Joi.string().pattern(/^[0-9]{10}$/).required(),
        message: Joi.string().required()
    });
    const { error } = schema.validate(req.body);
    if (error) return res.status(400).json({ success: false, message: error.details[0].message });
    next();
};

// 3. LOGIN VALIDATION
const validateLogin = (req, res, next) => {
    const schema = Joi.object({
        email: Joi.string().email().required().messages({ 'string.email': 'please enter correct email' }),
        password: Joi.string().required().messages({ 'string.empty': 'Password is required' })
    });
    const { error } = schema.validate(req.body);
    if (error) return res.status(400).json({ success: false, message: error.details[0].message });
    next();
};

module.exports = { validateParticipant, validateMessage, validateLogin };