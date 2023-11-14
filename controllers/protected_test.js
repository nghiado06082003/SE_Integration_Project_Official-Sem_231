const path = require("path");
const authorization_model = require('../model/DAO/authorization');

module.exports = {
    authorize: [authorization_model.loadCurMember, authorization_model.authorizeAdmin, function (req, res) {
        res.json({status: 200})
    }],
    load: [authorization_model.loadCurMember, authorization_model.authorizeAdmin, function (req, res) {
        res.json({status: 200, message: "Phản hồi từ server: Đăng nhập vào tài khoản ban chủ nhiệm thành công!"})
    }]
}