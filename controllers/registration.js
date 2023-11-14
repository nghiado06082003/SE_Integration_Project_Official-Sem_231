var bcrypt = require("bcrypt");
var registration_model = require("../model/DAO/registration")

module.exports = {
    register: function (req, res) {
        if (req.body.password) {
            bcrypt.hash(req.body.password, 10)
                .then((hashedPassword) => {
                    let member = {
                        student_id: req.body.student_id,
                        student_name: req.body.student_name,
                        email: req.body.email,
                        password: hashedPassword
                    };
                    registration_model.register(res, member);
                })
                .catch((error) => {
                    res.json({ status: 500 });
                })
        }
        else {
            res.json({ status: 400, message: "Vui lòng không bỏ trống mật khẩu!" });
        }
    }
}