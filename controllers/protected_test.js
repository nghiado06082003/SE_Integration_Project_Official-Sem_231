const path = require("path");
const authorization_model = require('../model/DAO/authorization');

module.exports = {
  authorize: [authorization_model.loadCurMember, authorization_model.authorizeAdmin, function (req, res) {
    res.send('Chào mừng Ban chủ nhiệm');
  }],
  load: [authorization_model.loadCurMember, authorization_model.authorizeAdmin, function (req, res) {
    res.json({ message: "Phản hồi từ server: Đăng nhập vào tài khoản ban chủ nhiệm thành công!" })
  }]
}