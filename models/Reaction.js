const { Schema, Types } = require('mongoose');

const reactionSchema = new Schema({
    reactionBody: {
       type: Schema.Types.ObjectId,
       default: () => new Types.ObjectId(),
    },
    reactionBody: {
        type: String,
        required: true,
        maxlength: 280,
    },
    username: {
        type: String,
        required: true,
    },
    createdAt: {
        type: Date,
        default: Date.now,
        get: createdAt => formatDate(createdAt),
    },
    },
    {
        toJSON: {
            getters: true,
        },
        id: false,
    }
);

function formatDate(createdAt) {
    return createdAt.toLocaleDateString();
}

module.exports = reactionSchema