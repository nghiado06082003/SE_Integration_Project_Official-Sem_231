var connect_DB = require('./connect_db');
var jwt = require("jsonwebtoken");
var bcrypt = require("bcrypt");

async function loadCurMember(req, res, next) {
    try {
        const token = await req.headers.authorization.split(" ")[1];
        const decodeToken = await jwt.verify(token, "RANDOM-TOKEN");
        const cur_member = await decodeToken;
        req.cur_member = cur_member;
        next();
    }
    catch (error) {
        res.json({ status: 401, message: "Người dùng chưa đăng nhập hoặc phiên đã hết hạn!" });
    }
}

async function authorizeCollaborator(req, res, next) {
    if (req.cur_member) {
        let sql = "SELECT * FROM members WHERE student_id = ? AND email = ? AND state = ? AND permission = ?";
        connect_DB.query(sql, [
            req.cur_member.student_id,
            req.cur_member.email,
            req.cur_member.state,
            req.cur_member.permission
        ], function (err, result, field) {
            if (err) {
                res.json({ status: 500 });
            }
            else if (result.length == 0) {
                res.json({ status: 400, message: "Người dùng không tồn tại!" });
            }
            else {
                if (result[0].state != "Đang hoạt động") {
                    res.json({ status: 403, message: "Người dùng đang bị khoá!" });
                }
                else {
                    next();
                }
            }
        })
    }
    else {
        res.json({ status: 401, message: "Người dùng chưa đăng nhập hoặc phiên đã hết hạn!" });
    }
}

async function authorizeMediaMember(req, res, next) {
    if (req.cur_member) {
        let sql = "SELECT * FROM members WHERE student_id = ? AND email = ? AND state = ? AND permission = ?";
        connect_DB.query(sql, [
            req.cur_member.student_id,
            req.cur_member.email,
            req.cur_member.state,
            req.cur_member.permission
        ], function (err, result, field) {
            if (err) {
                res.json({ status: 500 });
            }
            else if (result.length == 0) {
                res.json({ status: 400, message: "Người dùng không tồn tại!" });
            }
            else {
                if (result[0].state != "Đang hoạt động") {
                    res.json({ status: 403, message: "Người dùng đang bị khoá!" });
                }
                else if (result[0].permission != "Thành viên ban truyền thông" && result[0].permission != "Thành viên ban chủ nhiệm") {
                    res.json({ status: 403, message: "Người dùng không được phép truy cập vào trang hoặc tính năng này!" });
                }
                else {
                    next();
                }
            }
        })
    }
    else {
        res.json({ status: 401, message: "Người dùng chưa đăng nhập hoặc phiên đã hết hạn!" });
    }
}

async function authorizeContentMember(req, res, next) {
    if (req.cur_member) {
        let sql = "SELECT * FROM members WHERE student_id = ? AND email = ? AND state = ? AND permission = ?";
        connect_DB.query(sql, [
            req.cur_member.student_id,
            req.cur_member.email,
            req.cur_member.state,
            req.cur_member.permission
        ], function (err, result, field) {
            if (err) {
                res.json({ status: 500 });
            }
            else if (result.length == 0) {
                res.json({ status: 400, message: "Người dùng không tồn tại!" });
            }
            else {
                if (result[0].state != "Đang hoạt động") {
                    res.json({ status: 403, message: "Người dùng đang bị khoá!" });
                }
                else if (result[0].permission != "Thành viên ban nội dung" && result[0].permission != "Thành viên ban chủ nhiệm") {
                    res.json({ status: 403, message: "Người dùng không được phép truy cập vào trang hoặc tính năng này!" });
                }
                else {
                    next();
                }
            }
        })
    }
    else {
        res.json({ status: 401, message: "Người dùng chưa đăng nhập hoặc phiên đã hết hạn!" });
    }
}

async function authorizeLogisticMember(req, res, next) {
    if (req.cur_member) {
        let sql = "SELECT * FROM members WHERE student_id = ? AND email = ? AND state = ? AND permission = ?";
        connect_DB.query(sql, [
            req.cur_member.student_id,
            req.cur_member.email,
            req.cur_member.state,
            req.cur_member.permission
        ], function (err, result, field) {
            if (err) {
                res.json({ status: 500 });
            }
            else if (result.length == 0) {
                res.json({ status: 400, message: "Người dùng không tồn tại!" });
            }
            else {
                if (result[0].state != "Đang hoạt động") {
                    res.json({ status: 403, message: "Người dùng đang bị khoá!" });
                }
                else if (result[0].permission != "Thành viên ban hậu cần" && result[0].permission != "Thành viên ban chủ nhiệm") {
                    res.json({ status: 403, message: "Người dùng không được phép truy cập vào trang hoặc tính năng này!" });
                }
                else {
                    next();
                }
            }
        })
    }
    else {
        res.json({ status: 401, message: "Người dùng chưa đăng nhập hoặc phiên đã hết hạn!" });
    }
}

async function authorizeAdmin(req, res, next) {
    if (req.cur_member) {
        let sql = "SELECT * FROM members WHERE student_id = ? AND email = ? AND state = ? AND permission = ?";
        connect_DB.query(sql, [
            req.cur_member.student_id,
            req.cur_member.email,
            req.cur_member.state,
            req.cur_member.permission
        ], function (err, result, field) {
            if (err) {
                res.json({ status: 500 });
            }
            else if (result.length == 0) {
                res.json({ status: 400, message: "Người dùng không tồn tại!" });
            }
            else {
                if (result[0].state != "Đang hoạt động") {
                    res.json({ status: 403, message: "Người dùng đang bị khoá!" });
                }
                else if (result[0].permission != "Thành viên ban chủ nhiệm") {
                    res.json({ status: 403, message: "Người dùng không được phép truy cập vào trang hoặc tính năng này!" });
                }
                else {
                    next();
                }
            }
        })
    }
    else {
        res.json({ status: 401, message: "Người dùng chưa đăng nhập hoặc phiên đã hết hạn!" });
    }
}

module.exports = {
    loadCurMember,
    authorizeCollaborator,
    authorizeMediaMember,
    authorizeContentMember,
    authorizeLogisticMember,
    authorizeAdmin
}