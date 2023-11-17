// Create web server

// Import express
const express = require('express');

// Import controller
const commentController = require('../controllers/commentController');

// Create router
const router = express.Router();

// Create routes
router.post('/create', commentController.comment_create_post);

router.get('/create', commentController.comment_create_get);

router.get('/:id/delete', commentController.comment_delete_get);

router.post('/:id/delete', commentController.comment_delete_post);

// Export router
module.exports = router;