const { Schema, Types } = require('mongoose');
const formatDate = require('../formatDate');

const reactionSchema = new Schema(
    {
        reactionId: {

            type: Schema.Types.ObjectId,
            default: () => new Types.ObjectId()
        },
        reactionBody: {
            type: String,
            required: true,
            maxlength: 280
        },
        username: {
            type: String,
            required: true,
        },
        createdAt: {
            type: Date,
            // Set default value to the current timestamp
            default: Date.now,
            get: timeStamp => formatDate(timeStamp)
        },
},
{
    toJSON: {
        getters: true
    }
})

module.exports = reactionSchema;