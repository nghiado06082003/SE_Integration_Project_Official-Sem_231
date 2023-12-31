const { json } = require('body-parser');
var connect_DB = require('./connect_db')
// status:
// 0: request mượn chưa được duyệt
// 1: request mượn đã được duyệt và chưa trả
// 2: request mượn không được duyệt
// 3: đã trả
// 4: chưa trả chưa request trả
// 5: quá hạn chưa request trả
// 6: request trả đúng hạn
// 7: request trả trễ hạn
// 8: request trả đã được đồng ý
// 9: phạt
// 10: chưa trả đã request trả
// 11: quá hạn đã request trả
// For manager
function getLoanList(res) {
    connect_DB.query("SELECT id, student_id, student_name, doc_name, request_day FROM ((requestborrow NATURAL JOIN members) NATURAL JOIN documents) WHERE status = 0", function (err, result, fields) {
        if (err) res.json({ code: 500 });
        res.json({loanList: JSON.stringify(result)});
    });
}

function getBorrowList(res){
    connect_DB.query("SELECT id, student_id, student_name, doc_name, received_day, returned_day, status FROM ((requestborrow NATURAL JOIN members) NATURAL JOIN documents) WHERE status IN (3, 4, 5, 10, 11)", function (err, result, fields) {
        if (err) res.json({ code: 500 });
        res.json({borrowList: JSON.stringify(result)});
    });
}

function getReturnList(res) {
    connect_DB.query("SELECT id, student_id, student_name, doc_name, request_day FROM ((requestborrow NATURAL JOIN members) NATURAL JOIN documents) WHERE status = 6 OR status = 7", function (err, result, fields) {
        if (err) res.json({ code: 500 });
        res.json({returnList: JSON.stringify(result)});
    });
}


function approvereq(req, res) {
    var id = req.query.id;
    const currentDate = new Date().toISOString().split('T')[0];
    connect_DB.query(`UPDATE requestborrow SET status = 1, update_date = "${currentDate}" WHERE id = ${id}`, function (err, result, fields) {
        if (err) res.json({ code: 500 });
        else res.json({ code: 300 });
    });
}

function denyreq(req, res) {
    var id = req.query.id;
    const currentDate = new Date().toISOString().split('T')[0];
    connect_DB.query(`UPDATE requestborrow SET status = 2, update_date = "${currentDate}" WHERE id = ${id}`, function (err, result, fields) {
        if (err) res.json({ code: 500 });
        else res.json({ code: 300 });
    });
}

function acceptreq(req, res) {
    var id = req.query.id;
    const currentDate = new Date().toISOString().split('T')[0];
    connect_DB.query(`UPDATE requestborrow SET status = 8, update_date = "${currentDate}" WHERE id = ${id}`, function (err, result, fields) {
        if (err) res.json({ code: 500 });
        else res.json({ code: 300 });
    });
}

function finereq(req, res) {
    var id = req.query.id;
    const currentDate = new Date().toISOString().split('T')[0];
    connect_DB.query(`UPDATE requestborrow SET status = 9, update_date = "${currentDate}" WHERE id = ${id}`, function (err, result, fields) {
        if (err) res.json({ code: 500 });
        else res.json({ code: 300 });
    });
}

// For customer
function getLoanHistory(req, res) {
    var id = req.cur_member.student_id;
    connect_DB.query(`SELECT id, request_day, doc_name, status, update_date FROM (requestborrow NATURAL JOIN documents) WHERE student_id = ${id} AND status IN (0, 1, 2)`, function (err, result, fields) {
        if (err) res.json({ code: 500 });
        else res.json({ loanHistory: JSON.stringify(result) });
    });
}

function getBorrowHistory(req, res) {
    var id = req.cur_member.student_id;
    connect_DB.query(`SELECT id, document_id, received_day, doc_name, status, returned_day FROM (requestborrow NATURAL JOIN documents) WHERE student_id = ${id} AND status IN (3, 4, 5, 10, 11)`, function (err, result, fields) {
        if (err) res.json({ code: 500 });
        else res.json({ borrowHistory: JSON.stringify(result) });
    });
}

function getReturnHistory(req, res) {
    var id = req.cur_member.student_id;
    connect_DB.query(`SELECT id, request_day, doc_name, status, update_date FROM (requestborrow NATURAL JOIN documents) WHERE student_id = ${id} AND status IN (6, 7, 8, 9)`, function (err, result, fields) {
        if (err) res.json({ code: 500 });
        else res.json({ returnHistory: JSON.stringify(result) });
    });
}

function loanRequest(req, res) {
    var student_id = req.cur_member.student_id;
    var book_id = req.body.book_id;
    const currentDate = new Date().toISOString().split('T')[0];

    connect_DB.query(`INSERT INTO requestborrow(student_id, document_id, request_day, status) VALUES (${student_id}, ${book_id}, "${currentDate}", 0)`, function (err, result, fields) {
        if (err) res.json({ code: 500 });
        else res.json({ code: 300 });
    });
}

function returnRequest(req, res) {
    var student_id = req.cur_member.student_id;
    var book_id = req.body.book_id;
    var status = req.body.status;
    var id = req.body.id
    const currentDate = new Date().toISOString().split('T')[0];

    connect_DB.query(`INSERT INTO requestborrow(student_id, document_id, request_day, status) VALUES (${student_id}, ${book_id}, "${currentDate}", ${status + 2})`, function (err, result, fields) {
        if (err) res.json({ code: 500 });
        else {
            connect_DB.query(`UPDATE requestborrow SET status = "${status + 6}", update_date = "${currentDate}" WHERE id = ${id}`, function (err, result, fields) {
                if (err) res.json({ code: 500 });
                else res.json({ code: 300 });
            });
        }
    });

}


module.exports = { getLoanList, getBorrowList, getReturnList, getLoanHistory, approvereq, denyreq, acceptreq, finereq, getBorrowHistory, getReturnHistory, loanRequest, returnRequest};