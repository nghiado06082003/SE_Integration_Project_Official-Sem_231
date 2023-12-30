const { json } = require('body-parser');
var connect_DB = require('./connect_db')

// For manager
function getLoanList(res) {
    connect_DB.query("SELECT id, student_id, student_name, doc_name, request_day FROM ((requestborrow NATURAL JOIN members) NATURAL JOIN documents) WHERE status = 0", function (err, result, fields) {
        if (err) res.json({ code: 500 });
        res.json({loanList: JSON.stringify(result)});
    });
}

function getBorrowList(res){
    connect_DB.query("SELECT id, student_id, student_name, doc_name, received_day, returned_day, status FROM ((requestborrow NATURAL JOIN members) NATURAL JOIN documents) WHERE status = 3 OR status = 4", function (err, result, fields) {
        if (err) res.json({ code: 500 });
        res.json({borrowList: JSON.stringify(result)});
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

// For customer
async function getLoanHistory(req, res, next) {
    var id = req.cur_member.student_id;
    connect_DB.query("SELECT id, request_day, doc_name, status, update_date FROM (requestborrow NATURAL JOIN documents) WHERE student_id =" + id, function (err, result, fields) {
        if (err) res.json({ code: 500 });
        else res.json({ loanHistory: JSON.stringify(result) });
        next();
    });
}

async function getBorrowHistory(req, res, next) {
    var id = req.cur_member.student_id;
    connect_DB.query(`SELECT document_id, received_day, doc_name, status, returned_day FROM (requestborrow NATURAL JOIN documents) WHERE student_id = ${id} AND (status = 3 OR status = 4)`, function (err, result, fields) {
        if (err) res.json({ code: 500 });
        else res.json({ borrowHistory: JSON.stringify(result) });
        next();
    });
}

async function request(req, res, next) {
    var student_id = req.cur_member.student_id;
    var book_id = req.body.book_id;
    const currentDate = new Date().toISOString().split('T')[0];

    connect_DB.query(`INSERT INTO requestborrow(student_id, document_id, request_day) VALUES (${student_id}, ${book_id}, "${currentDate}")`, function (err, result, fields) {
        if (err) res.json({ code: 500 });
        else res.json({ code: 300 });
        //next();
    });
}


module.exports = { getLoanList, getBorrowList, getLoanHistory, approvereq, denyreq, getBorrowHistory, request};