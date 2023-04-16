import mongoose from "mongoose";

export const PostsModel = mongoose.model(
    "node-test-api",
    {
        author: {
            type: String,
            required: true,
        },
        message: {
            type: String,
            required: true,
        },
        date: {
            type: Date,
            default: Date.now,
        },
    },
    "posts"
);
