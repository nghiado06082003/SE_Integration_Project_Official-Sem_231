const path = require("path");
const post_model = require("../model/DAO/posts")

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

    createPostcmt: function (req, res) {
        post_model.createPostcmt(req, res);
    },

    editPostcmt: function (req, res) {
        post_model.editPostcmt(req, res);
    },

    deletePostcmt: function (req, res) {
        post_model.deletePostcmt(req, res);
    }


}