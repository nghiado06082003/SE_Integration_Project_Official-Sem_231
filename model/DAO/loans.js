var connect_DB = require('./connect_db')


function currdate() {

    return new Date().toISOString().slice(0, 19).replace('T', ' ');
}

function getLoanList(res) {
    connect_DB.query("SELECT * FROM requestborrow", function (err, result, fields) {
        if (err) res.json({ code: 500 });
        res.json({loanList: JSON.stringify(result)});
    });
}

function getLoanHistory(req, res) {
    var id = req.query.id;
    connect_DB.query("SELECT * FROM requestborrow WHERE student_id = " + id, function (err, result, fields) {
        if (err) res.json({ code: 500 });
        res.json({ loanHistory: JSON.stringify(result) });
    });
}

function request(req, res) {
    var stu_id = req.query.stu_id;
    var book_id = req.query.book_id;
    const currentDate = new Date().toISOString().split('T')[0];

    connect_DB.query(`INSERT INTO requestborrow (student_id, document_id, request_day) VALUES (${stu_id}, ${book_id}, "${currentDate}")`, function (err, result, fields) {
        if (err) res.json({ code: 500 });
        else res.json({ code: 300 });
    });

}

module.exports = { getLoanList, getLoanHistory, request};