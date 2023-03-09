const router = require('express').Router();
const {
  getReaction,
  getSingleReaction,
  createReaction,
  deleteReaction,
  
} = require('../../controllers/reactionController.js');

// /api/reactions
router.route('/').get(getReaction).post(createReaction);

// /api/reactions/:reactionId
router.route('/:reactionId').get(getSingleReaction).delete(deleteReaction);

module.exports = router;