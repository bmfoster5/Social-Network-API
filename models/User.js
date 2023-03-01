const { Schema, model } = require('mongoose');

const userSchema = new Schema(
    {
        username: {
            type: string,
            unique: true,
            required: true,
            trim: true
        },
        email: {
            type: string, 
            required: true, 
            unique: true,
            match: [/^([a-z0-9_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/, 'Must use a valid email address']
        },
        thoughts: [{
            type: Schema.Types.ObjectId,
            ref: 'Thought'
        }],
        friends: [{
            type: Schema.Types.ObjectId,
            ref: 'User'
        }]
    },
    {
        toJSON: {
            virtuals: true
        }
    }
)
userSchema.virtuals('friendCount').get(function () {
    return this.friends.length;
})

const User = model('User', userSchema);

module.exports = User;