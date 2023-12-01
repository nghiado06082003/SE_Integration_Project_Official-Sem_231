const express = require('express');
const review_router = express.Router();
const review_controller = require('../controllers/review');
const path = require("path");

review_router.post("/reviewListAccepted", review_controller.reviewListAccepted);
review_router.post("/reviewContentAccepted", review_controller.reviewContentAccepted);
review_router.post("/searchReviewAccepted", review_controller.searchReviewAccepted);

review_router.post("/reviewListMember", review_controller.reviewListMember);
review_router.post("/reviewContentMember", review_controller.reviewContentMember);
review_router.post("/searchReviewMember", review_controller.searchReviewMember);
review_router.post("/submitNewReview", review_controller.submitNewReview);

review_router.post("/reviewListAll", review_controller.reviewListAll);
review_router.post("/reviewContentAll", review_controller.reviewContentAll);
review_router.post("/searchReviewAll", review_controller.searchReviewAll);
review_router.post("/editReview", review_controller.editReview);
review_router.post("/deleteReview", review_controller.deleteReview);
review_router.post("/acceptReview", review_controller.acceptReview);
review_router.post("/rejectReview", review_controller.rejectReview);

module.exports = review_router;