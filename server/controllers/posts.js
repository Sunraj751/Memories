import PostMessage from "../models/postMessage.js"; // this gives access to our model that we created
export const getPosts = (req, res) => {
    res.send("This works from controllers");
};

export const createPost = (req, res) => {
    res.send('Post Creation');
}