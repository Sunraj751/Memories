# Setup
- Create a folder named `controllers` -> file named `posts.js`
- In this file we create all the handlers for our routes. 
  - This means we don't write logic in `../routes/posts.js`. Why?
    - Because we don't want to make it easier for us to manage the functionality of the routes
- So what we do is we remove all the functions or logic from the routes and put it in `../controllers/posts.js`:
  
```jsx
export const getPosts = (req, res) => {
    res.send("This works from controllers");
};
```
- Now we go back to `../routes/posts.js` and [go to Setup for Controllers](../routes/1-Routing.md)
