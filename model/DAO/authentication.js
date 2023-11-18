var connect_DB = require('./connect_db');
var jwt = require("jsonwebtoken");
var bcrypt = require("bcrypt");

function checkNoEmpty(obj) {
    for (let key in obj) {
        if (obj.hasOwnProperty(key)) {
            if (obj[key] == undefined || obj[key] == null || obj[key] == "") {
                return false;
            }
        }
    }
    return true;
}

function signin(res, obj) {
    connect_DB.query("SELECT * FROM members WHERE email = ?", [obj.email], function (err, result, field) {
        if (err) {
            res.status(500).json({ message: "Hệ thống gặp vấn đề. Vui lòng thử lại sau" });
        }
        else if (result.length == 0) {
            res.status(400).json({ message: "Người dùng không tồn tại hoặc sai thông tin đăng nhập. Vui lòng thử lại" });
        }
        else {
            bcrypt.compare(obj.password, result[0].password)
                .then((passwordCheck) => {
                    if (!passwordCheck) {
                        res.status(400).json({ message: "Người dùng không tồn tại hoặc sai thông tin đăng nhập. Vui lòng thử lại" });
                    }
                    else {
                        let member = {
                            student_id: result[0].student_id,
                            email: result[0].email,
                            state: result[0].state,
                            permission: result[0].permission
                        };
                        const token = jwt.sign(member, "RANDOM-TOKEN", { expiresIn: "5m" });
                        res.json({ member: member, token });
                    }
                })
                .catch((error) => {
                    res.status(400).json({ message: "Người dùng không tồn tại hoặc sai thông tin đăng nhập. Vui lòng thử lại" });
                })
        }
    })

}

module.exports = { checkNoEmpty, signin }