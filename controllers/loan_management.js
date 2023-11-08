const path = require("path");
const loan_model = require("../model/DAO/loans")

module.exports = {
    getLoanList: function (req, res) {
        loan_model.getLoanList(res);
    },

    getLoanHistory: function (req, res) {
        loan_model.getLoanHistory(req, res);
    },

    request: function (req, res) {
        loan_model.request(req, res);
    },

}