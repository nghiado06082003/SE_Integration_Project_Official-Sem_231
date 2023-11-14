var authentication_model = require("../model/DAO/authentication")

module.exports = {
    signin: function(req, res) {
        let obj = {
            email: req.body.email,
            password: req.body.password
        };
        if (authentication_model.checkNoEmpty(obj)) {
            authentication_model.signin(res, obj);
        }
        else {
            res.json({ status: 400, message: "Vui lòng không bỏ trống bất kỳ thông tin đăng nhập nào!" });
        }
    }
}