const { Schema, model } = require('mongoose');
const reactionSchema = require('./Reaction');

const thoughtSchema = new Schema({
    thoughtText: {
        type: String,
        required: true,
        minlength: 1,
        maxlength: 280,
    },
    createdAt: {
        type: Date,
        default: Date.now,
        get: createdAt => formatDate(createdAt),
    },
    username: {
        type: String,
        required: true,
    },
    reactions: [reactionSchema],
    },
    {
        toJSON: {
            getters: true,
        },
        id: false,
    }
);

thoughtSchema.virtual('reactionCount').get(function () {
    return this.reactions.length;
});

function formatDate(createdAt) {
    return createdAt.toLocaleDateString();
}
const Thought = model('Thought', thoughtSchema);

module.exports = Thought;