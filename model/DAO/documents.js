var connect_DB = require('./connect_db')
var mysql = require("mysql")

function checkEmpty(obj) {
    for (let key in obj) {
        if (obj.hasOwnProperty(key)) {
            if (obj[key] == undefined || obj[key] == null || obj[key] == "")
                return true;
        }
    }
    return false;
}

function getDocList(res) {
    connect_DB.query("SELECT * FROM documents", function (err, result, fields) {
        if (err)
            res.json({ status: 500 });
        else if (result.length == 0)
            res.json({ status: 404 });
        else
            res.json({ docList: JSON.stringify(result) });
    });
}

function searchDoc(res, document_id, doc_name, type) {
    let sql = "SELECT * FROM documents WHERE ";
    if (document_id) {
        sql += "document_id = ";
        sql += mysql.escape(document_id);
    }
    if (doc_name) {
        if (document_id)
            sql += " AND ";
        sql += "doc_name = "
        sql += mysql.escape(doc_name);
    }
    if (type) {
        if (document_id || doc_name)
            sql += " AND ";
        sql += "type = "
        sql += mysql.escape(type);
    }
    connect_DB.query(sql, function (err, result, fields) {
        if (err)
            res.json({ status: 500 });
        else if (result.length == 0)
            res.json({ status: 404 });
        else
            res.json({ docList: JSON.stringify(result) });
    });
}

function getDocDetail(res, document_id) {
    connect_DB.query("SELECT * FROM documents WHERE document_id = ?", [document_id], function (err, result, fields) {
        if (err)
            res.json({ status: 500 });
        else if (result.length == 0)
            res.json({ status: 404 });
        else
            res.json({ docDetail: JSON.stringify(result[0]) });
    });
}


function addDoc(res, document) {
    let sql = "INSERT INTO documents (doc_name, type, author, publisher, publish_year, quantity) VALUES (?, ?, ?, ?, ?, ?)";
    connect_DB.query(sql,
        [
            document.doc_name,
            document.type,
            document.author,
            document.publisher,
            document.publish_year,
            document.quantity
        ], function (err, result) {
            if (err)
                res.json({ status: 500 });
            else
                res.json({ status: 200 });
        });
}

function updateDoc(res, document) {
    connect_DB.query("SELECT * FROM documents WHERE document_id = ?", [document.document_id], function (err, result, fields) {
        if (err)
            res.json({ status: 500 });
        else if (result.length == 0)
            res.json({ status: 404 });
        else {
            let sql = "UPDATE documents SET doc_name = ?, type = ?, author = ?, publisher = ?, publish_year = ?, quantity = ? WHERE document_id = ?";
            connect_DB.query(sql,
                [
                    document.doc_name,
                    document.type,
                    document.author,
                    document.publisher,
                    document.publish_year,
                    document.quantity,
                    document.document_id
                ], function (err, result) {
                    if (err)
                        res.json({ status: 500 });
                    else
                        res.json({ status: 200 });
                });
        }
    });

}

function deleteDoc(res, document_id) {
    connect_DB.query("SELECT * FROM documents WHERE document_id = ?", [document_id], function (err, result, fields) {
        if (err)
            res.json({ status: 500 });
        else if (result.length == 0)
            res.json({ status: 404 });
        else {
            connect_DB.query("DELETE FROM documents WHERE document_id = ?", [document_id], function (err, result) {
                if (err)
                    res.json({ status: 500 });
                else
                    res.json({ status: 200 });
            });
        }
    });
}


module.exports = {
    getDocList,
    searchDoc,
    getDocDetail,
    checkEmpty,
    addDoc,
    updateDoc,
    deleteDoc
};