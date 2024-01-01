const path = require("path");
const post_model = require("../model/DAO/posts")
const authorization_model = require('../model/DAO/authorization');

module.exports = {
    getPostList: function (req, res) {
        post_model.getPostList(res);
    },

    getPost: function (req, res) {
        post_model.getPost(req, res);
    },

    createPost: function (req, res) {
        post_model.createPost(req, res);
    },

    editPost: function (req, res) {
        post_model.editPost(req, res);
    },

    deletePost: function (req, res) {
        post_model.deletePost(req, res);
    },

    getCommentList: function (req, res) {
        post_model.getCommentList(req, res);
    },

    createPostcmt: [authorization_model.loadCurMember, post_model.createPostcmt, function (req, res) {
        res.status(200).json({});
    }],

    editPostcmt: [authorization_model.loadCurMember, post_model.editPostcmt, function (req, res) {
        res.status(200).json({});
    }],

    deletePostcmt: function (req, res) {
        post_model.deletePostcmt(req, res);
    }


}