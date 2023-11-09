const express = require('express');
const loan_management_router = express.Router();
const loan_management_controller = require('../controllers/loan_management');
const path = require("path");

// For manager
loan_management_router.get("/manager/list", loan_management_controller.getLoanList);
loan_management_router.get("/manager/request/approve", loan_management_controller.approvereq);
loan_management_router.get("/manager/request/deny", loan_management_controller.denyreq);

// For customer
loan_management_router.get("/customer/loanhistory", loan_management_controller.getLoanHistory);
loan_management_router.get("/customer/request", loan_management_controller.request);
loan_management_router.get("/customer/borrowhistory", loan_management_controller.getBorrowHistory);


module.exports = loan_management_router;