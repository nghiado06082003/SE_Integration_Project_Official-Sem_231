const express = require('express');
const loan_management_router = express.Router();
const loan_management_controller = require('../controllers/loan_management');
const path = require("path");

// For manager
loan_management_router.get("/manager/list", loan_management_controller.getLoanList);
// For customer
loan_management_router.get("/customer/history", loan_management_controller.getLoanHistory);
loan_management_router.get("/customer/request", loan_management_controller.request);


module.exports = loan_management_router;