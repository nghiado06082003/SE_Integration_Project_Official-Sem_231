var connect_DB = require('./connect_db')

// For manager
function getLoanList(res) {
    connect_DB.query("SELECT id, student_id, student_name, doc_name, request_day FROM ((requestborrow NATURAL JOIN members) NATURAL JOIN documents) WHERE state = 0", function (err, result, fields) {
        if (err) res.json({ code: 500 });
        res.json({loanList: JSON.stringify(result)});
    });
}

function approvereq(req, res) {
    var id = req.query.id;
    const currentDate = new Date().toISOString().split('T')[0];
    connect_DB.query(`UPDATE requestborrow SET state = 1, update_date = "${currentDate}" WHERE id = ${id}`, function (err, result, fields) {
        if (err) res.json({ code: 500 });
        else res.json({ code: 300 });
    });
}

function denyreq(req, res) {
    var id = req.query.id;
    const currentDate = new Date().toISOString().split('T')[0];
    connect_DB.query(`UPDATE requestborrow SET state = 2, update_date = "${currentDate}" WHERE id = ${id}`, function (err, result, fields) {
        if (err) res.json({ code: 500 });
        else res.json({ code: 300 });
    });
}

// For customer
function getLoanHistory(req, res) {
    var id = req.query.id;
    connect_DB.query("SELECT id, request_day, doc_name, state, update_date FROM (requestborrow NATURAL JOIN documents) WHERE student_id =" + id, function (err, result, fields) {
        if (err) res.json({ code: 500 });
        res.json({ loanHistory: JSON.stringify(result) });
    });
}

function getBorrowHistory(req, res) {
    var id = req.query.id;
    connect_DB.query(`SELECT received_day, doc_name, state, returned_day FROM (requestborrow NATURAL JOIN documents) WHERE student_id = ${id} AND (state = 3 OR state = 4)`, function (err, result, fields) {
        if (err) res.json({ code: 500 });
        res.json({ borrowHistory: JSON.stringify(result) });
    });
}

function request(req, res) {
    var student_id = req.query.stu_id;
    var book_id = req.query.book_id;
    const currentDate = new Date().toISOString().split('T')[0];

    connect_DB.query(`INSERT INTO requestborrow(student_id, document_id, request_day) VALUES (${student_id}, ${book_id}, "${currentDate}")`, function (err, result, fields) {
        if (err) res.json({ code: 500 });
        else res.json({ code: 300 });
    });

}


module.exports = { getLoanList, getLoanHistory, approvereq, denyreq, getBorrowHistory, request};