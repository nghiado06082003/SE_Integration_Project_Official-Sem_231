var connect_DB = require('./connect_db');

function checkNoEmpty(res, obj) {
    for (let key in obj) {
        if (obj.hasOwnProperty(key)) {
            if (obj[key] == undefined || obj[key] == null || obj[key] == "") {
                res.json({ status: 400, message: "Vui lòng không bỏ trống bất kỳ trường nào!" });
                return false;
            }
        }
    }
    return true;
}

function checkNoDuplicate(res, student_id, email, valid) {
    connect_DB.query("SELECT * FROM members WHERE student_id = ?", [student_id], function (err, result, field) {
        if (err) {
            res.json({ status: 500 });
            valid(false);
        }
        else if (result.length > 0) {
            res.json({ status: 400, message: "Mã số sinh viên đã tồn tại!" });
            valid(false);
        }
        else {
            connect_DB.query("SELECT * FROM members WHERE email = ?", [email], function (err, result, field) {
                if (err) {
                    res.json({ status: 500 });
                    valid(false);
                }
                else if (result.length > 0) {
                    res.json({ status: 400, message: "Email đã tồn tại!" });
                    valid(false);
                }
                else {
                    valid(true);
                }
            })

        }
    })
}

function validate(res, obj, register) {
    if (checkNoEmpty(res, obj)) {
        checkNoDuplicate(res, obj.student_id, obj.email, function (valid) {
            register(valid);
        });
    }
    else
        register(false);
}

function register(res, obj) {
    validate(res, obj, function (valid) {
        if (valid) {
            let currentDate = new Date().toJSON().slice(0, 10);
            let sql = "INSERT INTO members (student_id, student_name, email, password, state, join_date, permission) VALUES (?, ?, ?, ?, ?, ?, ?)"
            connect_DB.query(sql, [
                obj.student_id,
                obj.student_name,
                obj.email,
                obj.password,
                "Đang hoạt động",
                currentDate,
                "Thành viên ban chủ nhiệm"
            ], function (err, result) {
                if (err)
                    res.json({ status: 500 });
                else {
                    let member = {
                        student_id: obj.student_id,
                        email: obj.email,
                        state: "Đang hoạt động",
                        permission: "Thành viên ban chủ nhiệm"
                    };
                    const token = jwt.sign(member, "RANDOM-TOKEN", { expiresIn: "24h" });
                    res.json({ status: 200, member: member, token });
                }
            })
        }
    })
}

module.exports = { register }