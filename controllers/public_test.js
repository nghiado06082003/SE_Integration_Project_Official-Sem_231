const path = require("path");
const authorization_model = require('../model/DAO/authorization');

module.exports = {
  authenticate: [authorization_model.loadCurMember, authorization_model.authorizeCollaborator, function (req, res) {
    res.send('Đăng nhập thành công');
  }],
  loadCommentFrame: [authorization_model.loadCurMember, authorization_model.authorizeCollaborator, function (req, res) {
    res.send('OK');
  }],
  loadMemberConfig: [authorization_model.loadCurMember, authorization_model.authorizeAdmin, function (req, res) {
    res.json({});
  }]
}