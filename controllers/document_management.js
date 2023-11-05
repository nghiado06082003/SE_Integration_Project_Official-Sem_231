const path = require("path");
const document_model = require("../model/DAO/documents")

module.exports = {
    getDocList: function (req, res) {
        document_model.getDocList(res);
    },

}