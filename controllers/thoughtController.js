//EDIT
const { User, Thought } = require('../models');

const thoughtController = {

  getThought(req, res) {
    Thought.find({})
      .then((dbUserData) => {
        res.json(dbUserData);
      })
      .catch((err) => {
        console.log(err);
        res.status(500).json(err);
      });
  },

  getSingleThought(req, res) {
    Thought.findOne({ _id: req.params.thoughtId })
      .then((dbUserData) => {

        res.status(200).json(dbUserData);
      })
      .catch((err) => {
        console.log(err);
        res.status(500).json(err);
      });
  },

  createThought(req, res) {
    Thought.create(req.body)
      .then((dbUserData) => {
        res.json(dbUserData);
      })
      .catch((err) => {
        console.log(err);
        res.status(500).json(err);
      });
  },

  updateThought(req, res) {
    Thought.findOneAndUpdate(
      { _id: req.params.thoughtId },
      {
        $set: req.body,
      },
      {
        runValidators: true,
        new: true,
      }
    )
      .then((dbUserData) => {

        res.status(200).json(dbUserData);
      })
      .catch((err) => {
        console.log(err);
        res.status(500).json(err);
      });
  },

  deleteThought(req, res) {
    Thought.findOneAndDelete({ _id: req.params.thoughtId })
      .then((dbUserData) => {
        res.status(200).json(dbUserData)
      })
      .catch((err) => {
        console.log(err);
        res.status(500).json(err);
      });

  },

  addReaction(req, res) {
    Thought.findOneAndUpdate(
      { _id: req.params.thoughtId },
      { $addToSet: { reactions: req.body } },
      { runValidators: true, new: true }
    )
      // You need to add reaction to a thought

      .then((dbUserData) => {
        res.status(200).json(dbUserData)
      })
      .catch((err) => {
        console.log(err);
        res.status(500).json(err);
      });
  },

  deleteReaction(req, res) {
    Thought.findOneAndUpdate(
      { _id: req.params.thoughtId },
      { $pull: { reactions: { reactionId: req.params.reactionId} } },
      { runValidators: true, new: true }
    )
      .then((dbUserData) => {
        res.status(200).json(dbUserData)
      })
      .catch((err) => {
        console.log(err);
        res.status(500).json(err);
      });
  },

}


module.exports = thoughtController;