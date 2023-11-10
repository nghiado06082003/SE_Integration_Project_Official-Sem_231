﻿const path = require("path");
const loan_model = require("../model/DAO/loans")

module.exports = {
    getLoanList: function (req, res) {
        loan_model.getLoanList(res);
    },

    getLoanHistory: function (req, res) {
        loan_model.getLoanHistory(req, res);
    },

    getBorrowHistory: function (req, res) {
        loan_model.getBorrowHistory(req, res);
    },

    request: function (req, res) {
        loan_model.request(req, res);
    },

    approvereq: function (req, res) {
        loan_model.approvereq(req, res);
    },

    denyreq: function (req, res) {
        loan_model.denyreq(req, res);
    }


}