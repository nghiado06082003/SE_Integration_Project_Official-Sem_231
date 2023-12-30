const path = require("path");
const loan_model = require("../model/DAO/loans")
const authorization_model = require('../model/DAO/authorization');

module.exports = {
    getLoanList: function (req, res) {
        loan_model.getLoanList(res);
    },

    getBorrowList: function (req, res){
        loan_model.getBorrowList(res);
    },

    getLoanHistory: [authorization_model.loadCurMember, loan_model.getLoanHistory, function (req, res) {
        res.status(200).json({});
    }],

    getBorrowHistory: [authorization_model.loadCurMember, loan_model.getBorrowHistory, function (req, res) {
        res.status(200).json({});
    }],

    request: [authorization_model.loadCurMember, loan_model.request, function (req, res) {
        res.status(200).json({});
    }],

    approvereq: function (req, res) {
        loan_model.approvereq(req, res);
    },

    denyreq: function (req, res) {
        loan_model.denyreq(req, res);
    }


}