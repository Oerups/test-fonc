const mongoose = require("mongoose");

const todolistSchema = new mongoose.Schema(
    {
        name: { type: String, required: true },
        tasks: [
            {
                done: { type: Boolean, required: true },
                content: { type: String, required: true },
            },
        ],
        user_id: { type: String, required: true },
    },
    {
        versionKey: false,
    }
);

module.exports = mongoose.model("Todolist", todolistSchema);
