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

//Thay đổi các status thành
//0: đang chờ duyệt
//1: từ chối 
//2: đang cho mượn -> 4: yêu cầu trả đúng hạn -> 6: chấp thuận
//3: quá hạn -> 5: yêu cầu trả quá hạn -> 7: chấp thuận trả quá hạn || 8: chấp thuận trả quá hạn + phạt






function getLoanList(res) {
    connect_DB.query("SELECT id, student_id, student_name, doc_name, request_day FROM ((requestborrow NATURAL JOIN members) NATURAL JOIN documents) WHERE status = 0", function (err, result, fields) {
        if (err) res.json({ 500: "Fail to connect to database" });
        res.json({loanList: JSON.stringify(result)});
    });
}

function getBorrowList(res){
    connect_DB.query("SELECT id, student_id, student_name, doc_name, received_day, expected_returned_day, status FROM ((requestborrow NATURAL JOIN members) NATURAL JOIN documents) WHERE status IN (2,3,4,5)", function (err, result, fields) {
        if (err) res.json({ 500: "Fail to connect to database" });
        res.json({borrowList: JSON.stringify(result)});
    });
}

function getReturnList(res) {
    connect_DB.query("SELECT id, student_id, student_name, doc_name, request_day, update_date, status FROM ((requestborrow NATURAL JOIN members) NATURAL JOIN documents) WHERE status = 4 OR status = 5", function (err, result, fields) {
        if (err) res.json({ 500: "Fail to connect to database" });
        res.json({returnList: JSON.stringify(result)});
    });
}

function getLoanHistoryForAdmin(res){
    connect_DB.query("SELECT id, student_id, student_name, doc_name, received_day, returned_day, request_day, status FROM ((requestborrow NATURAL JOIN members) NATURAL JOIN documents) WHERE status IN (6,7,8)", function (err, result, fields) {
        if (err) res.json({ 500: "Fail to connect to database" });
        res.json({loanHistory: JSON.stringify(result)});
    });
}

function approvereq(req, res) {
    var id = req.query.id;
    const currentDate = new Date().toISOString().split('T')[0];
    const curDate = new Date();
    curDate.setDate(curDate.getDate() + 14);
    const expectedDate = curDate.toISOString().split('T')[0];
    connect_DB.query(`SELECT quantity FROM documents WHERE document_id = (SELECT document_id FROM requestborrow WHERE id = ${id})`, function (err, result, fields) {
        if (err) {
            res.json({ 500: "Fail to connect to database" });
            return;
        }
        else {
            //console.log(result[0]["quantity"]);
            if (result[0]["quantity"] <= 0) {
                res.json({ 503: "No more document to be borrowed" });
                return;
            } else {
                connect_DB.query(`UPDATE requestborrow SET status = 2, update_date = "${currentDate}", received_day = "${currentDate}", expected_returned_day = "${expectedDate}" WHERE id = ${id}`, function (err, result, fields) {
                    if (err) {
                        res.json({ 501: "Fail to update request's status" });
                    }
                    else {
                        connect_DB.query(`UPDATE documents SET quantity = quantity - 1  WHERE document_id = (SELECT document_id FROM requestborrow WHERE id = ${id})`, function (err, result, fields) {
                            if (err) res.json({ 502: "Fail to update document's quantity" });
                            else res.json({ 300: "OK" });
                        });
                    }
                });
            }
        };
    });
    
}

function denyreq(req, res) {
    var id = req.query.id;
    const currentDate = new Date().toISOString().split('T')[0];
    connect_DB.query(`UPDATE requestborrow SET status = 1, update_date = "${currentDate}" WHERE id = ${id}`, function (err, result, fields) {
        if (err) res.json({ 500: "Fail to connect to database" });
        else res.json({ 300: "OK" });
    });
}

// Accept return request
function acceptreq(req, res) {
    var id = req.query.id;
    const currentDate = new Date().toISOString().split('T')[0];
    let newStatus = 6
    connect_DB.query(`SELECT status from requestborrow WHERE id=${id}`, function(err,result,fields){
        newStatus = result[0].status+2;
    })
    connect_DB.query(`UPDATE requestborrow SET status = ${newStatus}, update_date = "${currentDate}", returned_day = "${currentDate}" WHERE id = ${id}`, function (err, result, fields) {
        if (err) {
            res.json({ 501: "Fail to update request's status" });
        }
        else {
            connect_DB.query(`UPDATE documents SET quantity = quantity + 1  WHERE document_id = (SELECT document_id FROM requestborrow WHERE id = ${id})`, function (err, result, fields) {
                if (err) res.json({ 502: "Fail to update document's quantity" });
                else res.json({ 300: "OK" });
            });
        }
    });
}

function finereq(req, res) {
    var id = req.query.id;
    const currentDate = new Date().toISOString().split('T')[0];
    connect_DB.query(`UPDATE requestborrow SET status = 8, update_date = "${currentDate}", returned_day = "${currentDate}" WHERE id = ${id}`, function (err, result, fields) {
        if (err) res.json({ 500: "Fail to connect to database" });
        else {
            connect_DB.query(`UPDATE documents SET quantity = quantity + 1  WHERE document_id = (SELECT document_id FROM requestborrow WHERE id = ${id})`, function (err, result, fields) {
                if (err) res.json({ 502: "Fail to update document's quantity" });
                else res.json({ 300: "OK" });
            });
        }
    });
}

// For customer
function getLoanHistory(req, res) {
    var id = req.cur_member.student_id;
    connect_DB.query(`SELECT id, request_day, doc_name, status, update_date FROM (requestborrow NATURAL JOIN documents) WHERE student_id = ${id} AND status IN (0, 1, 2)`, function (err, result, fields) {
        if (err) res.json({ 500: "Fail to connect to database" });
        else res.json({ loanHistory: JSON.stringify(result) });
    });
}

function getBorrowHistory(req, res) {
    var id = req.cur_member.student_id;
    connect_DB.query(`SELECT id, document_id, request_day, received_day, doc_name, status, returned_day, expected_returned_day FROM (requestborrow NATURAL JOIN documents) WHERE student_id = ${id}`, function (err, result, fields) {
        if (err) res.json({ 500: "Fail to connect to database" });
        else res.json({ borrowHistory: JSON.stringify(result) });
    });
}

function getReturnHistory(req, res) {
    var id = req.cur_member.student_id;
    connect_DB.query(`SELECT id, request_day, doc_name, status, update_date FROM (requestborrow NATURAL JOIN documents) WHERE student_id = ${id} AND status IN (6, 7, 8, 9)`, function (err, result, fields) {
        if (err) res.json({ 500: "Fail to connect to database" });
        else res.json({ returnHistory: JSON.stringify(result) });
    });
}

function loanRequest(req, res) {
    var student_id = req.cur_member.student_id;
    var book_id = req.body.book_id;
    const currentDate = new Date().toISOString().split('T')[0];

    connect_DB.query(`SELECT quantity FROM documents WHERE document_id = ${book_id}`, function (err, result, fields) {
        if (err) {
            res.json({ 500: "Fail to connect to databse" });
            return;
        }
        else {
            //console.log(result[0]["quantity"]);
            if (result[0]["quantity"] <= 0) {
                res.json({ 503: "No more document to be borrowed" });
                return;
            }
        };
    });

    connect_DB.query(`INSERT INTO requestborrow(student_id, document_id, request_day, status) VALUES (${student_id}, ${book_id}, "${currentDate}", 0)`, function (err, result, fields) {
        if (err) res.json({ 500: "Fail to connect to database" });
        else res.json({ 300: "OK" });
    });
}

function returnRequest(req, res) {
    var student_id = req.cur_member.student_id;
    var book_id = req.body.book_id;
    var status = req.body.status+2;
    var id = req.body.id
    const currentDate = new Date().toISOString().split('T')[0];

    connect_DB.query(`UPDATE requestborrow SET status = "${status}", update_date = "${currentDate}" WHERE id = ${id}`, function (err, result, fields) {
        if (err) res.json({ 500: "Fail to connect to database" });
        else res.json({ 300: "OK" });
    });

}


module.exports = { getLoanHistoryForAdmin, getLoanList, getBorrowList, getReturnList, getLoanHistory, approvereq, denyreq, acceptreq, finereq, getBorrowHistory, getReturnHistory, loanRequest, returnRequest};