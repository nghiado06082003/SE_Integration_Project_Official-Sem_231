const express = require('express');
const registration_router = express.Router();
const registration_controller = require('../controllers/registration');

registration_router.post("/", registration_controller.register);

module.exports = registration_router;