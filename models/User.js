const { Schema, model } = require('mongoose');

const userSchema = new Schema(
    {
        username: {
            type: string,
            //Unique???
            required: true,
            //trimmed???
        },
        email: {
            type: string, 
            required: true, 
            // Unique???
            // MUST MATCH A VALID EMAIL ADDRESS???
        },
        thoughts: {
            // ARRAY OF _id VALUES REFERENCING THE Thought MODEL???
        },
        friends: {
            //ARRAY OF _id VALUES REFERENCING THE User MODEL (SELF REFERENCE)
        }
    }
)
//Create a virtual called friendCount that retrieves the length of the user's friends array field on query.