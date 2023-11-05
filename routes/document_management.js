const express = require('express');
const document_management_router = express.Router();
const document_management_controller = require('../controllers/document_management');
const path = require("path");

document_management_router.get("/", document_management_controller.getDocList);

module.exports = document_management_router;