const express = require('express');
const post_management_router = express.Router();
const post_management_controller = require('../controllers/post_management');
const path = require("path");
const post_management = require('../controllers/post_management');


post_management_router.get("", post_management_controller.getPostList);
post_management_router.get("/detail", post_management_controller.getPost); //done
post_management_router.get("/new", post_management_controller.createPost); //done
post_management_router.get("/edit", post_management_controller.editPost);
post_management_router.get("/delete", post_management_controller.deletePost);

// For comment 
post_management_router.get("/comment/list", post_management_controller.getCommentList); //done
post_management_router.post("/comment/new", post_management_controller.createPostcmt); //done
post_management_router.post("/comment/edit", post_management_controller.editPostcmt); //done
post_management_router.get("/comment/delete", post_management_controller.deletePostcmt); 




module.exports = post_management_router;