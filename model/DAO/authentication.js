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
            res.json({ status: 500 });
        }
        else if (result.length == 0) {
            res.json({ status: 400, message: "Địa chỉ email không tồn tại!" });
        }
        else {
            bcrypt.compare(obj.password, result[0].password)
                .then((passwordCheck) => {
                    if (!passwordCheck) {
                        res.json({ status: 400, message: "Mật khẩu không khớp!" });
                    }
                    else {
                        let member = {
                            student_id: result[0].student_id,
                            email: result[0].email,
                            state: result[0].state,
                            permission: result[0].permission
                        };
                        const token = jwt.sign(member, "RANDOM-TOKEN", { expiresIn: "24h" });
                        res.json({ status: 200, member: member, token });
                    }
                })
                .catch((error) => {
                    res.json({ status: 400, message: "Mật khẩu không khớp!" });
                })
        }
    })

}

module.exports = { checkNoEmpty, signin }