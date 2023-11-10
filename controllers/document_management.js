const path = require("path");
const document_model = require("../model/DAO/documents")

module.exports = {
    getDocList: function (req, res) {
        document_model.getDocList(res);
    },
    searchDoc: function (req, res) {
        let obj_id = { document_id: req.query.document_id };
        let obj_name = { doc_name: req.query.doc_name };
        let obj_type = { type: req.query.type };
        if (document_model.checkEmpty(obj_id) &&
            document_model.checkEmpty(obj_name) &&
            document_model.checkEmpty(obj_type)) {
            res.json({ status: 400 });
        }
        else {
            document_model.searchDoc(res, req.query.document_id, req.query.doc_name, req.query.type);
        }
    },
    getDocDetail: function (req, res) {
        let obj = {
            document_id: req.query.document_id,
        };
        if (document_model.checkEmpty(obj)) {
            res.json({ status: 400 });
        }
        else {
            document_model.getDocDetail(res, req.query.document_id);
        }
    },
    addDoc: function (req, res) {
        let obj = {
            doc_name: req.body.doc_name,
            type: req.body.type,
            author: req.body.author,
            publisher: req.body.publisher,
            publish_year: req.body.publish_year,
            quantity: req.body.quantity
        };
        if (document_model.checkEmpty(obj)) {
            res.json({ status: 400 });
        }
        else {
            document_model.addDoc(res, obj);
        }
    },
    updateDoc: function (req, res) {
        // For unchanged fields, old data should be submmited. Do not let any field empty
        let obj = {
            doc_name: req.body.doc_name,
            type: req.body.type,
            author: req.body.author,
            publisher: req.body.publisher,
            publish_year: req.body.publish_year,
            quantity: req.body.quantity,
            document_id: req.body.document_id
        };
        if (document_model.checkEmpty(obj)) {
            res.json({ status: 400 });
        }
        else {
            document_model.updateDoc(res, obj);
        }
    },
    deleteDoc: function (res, req) {
        let obj = {
            document_id: req.query.document_id,
        };
        if (document_model.checkEmpty(obj)) {
            res.json({ status: 400 });
        }
        else {
            document_model.deleteDoc(res, req.query.document_id);
        }
    }
}