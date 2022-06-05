import mongoose, { Schema } from "mongoose";

// First we create a schema
const postSchema = mongoose.Schema({
    title: String,
    message: String,
    creator: String,
    tags: [String],
    selectedFile: String,
    likeCount: {
        type: Number,
        default: 0
    },
    createdAt:{
        type: Date,
        default: new Date()
    },
});
// Now that we have schema we convert it into a Model
// to do that we use mongoose.model

const PostMessage = mongoose.model('PostMessage', postSchema);

// now we export that model 
export default PostMessage;