const { Schema, model } = require('mongoose');
const reactionSchema = require('./Reaction.js')
const formatDate = require('../formatDate')

const thoughtSchema = new Schema(
    {
        thoughtText: {
            type: String,
            required: true,
            maxlength: 280
        },
        createdAt: {
            type: Date,
            default: Date.now,
            get: timeStamp => formatDate(timeStamp)
        },
        username: {
            type: String,
            date: true,
        },
        reactions: [
            reactionSchema
        ],
    },
    {
        toJSON: {
            getters: true,
            virtuals: true
        }
    })

thoughtSchema.virtual('reactionCount').get(function () {
    return this.reactions.length;
})

const Thought = model('Thought', thoughtSchema);

module.exports = Thought;
