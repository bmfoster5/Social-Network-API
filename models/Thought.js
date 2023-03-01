const { Schema, model } = require('mongoose');
const reactionSchema = require('./Reaction.js')
const formatDate = require('../formatDate')

const thoughtSchema = new Schema(
    {
        thoughtText: {
            type: string,
            required: true,
            maxlength: 280
        },
        createdAt: {
            type: Date,
            default: Date.now,
            get: timeStamp => formatDate(timeStamp)
        },
        username: {
            type: string,
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

thoughtSchema.virtuals('reactionCount').get(function () {
    return this.reactions.length;
})

const Thought = model('Thought', thoughtSchema);

module.exports = Thought;
