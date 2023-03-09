const { User, Reaction } = require('../models');

const reactionController = {

  getReaction(req, res) {
   Reaction.find({})
      .then((dbUserData) => {
        res.json(dbUserData);
      })
      .catch((err) => {
        console.log(err);
        res.status(500).json(err);
      });
  },

  getSingleReaction(req, res) {
    Thought.findOne({ _id: req.params.reactionId })
      .then((dbUserData) => {
      
        res.status(200).json(dbUserData);
      })
      .catch((err) => {
        console.log(err);
        res.status(500).json(err);
      });
  },
 
  createReaction(req, res) {
    Reaction.create(req.body)
      .then((dbUserData) => {
        res.json(dbUserData);
      })
      .catch((err) => {
        console.log(err);
        res.status(500).json(err);
      });
  },

  deleteReaction(req, res) {
    Reaction.findOneAndDelete({ _id: req.params.reactionId })
      .then((dbUserData) => {
        res.status(200).json(dbUserData)
      })
      .catch((err) => {
        console.log(err);
        res.status(500).json(err);
      });
  },

}
 

module.exports = reactionController;