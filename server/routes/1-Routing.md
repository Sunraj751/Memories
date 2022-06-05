# 1 - Setup
- In Server directory -> create `routes` folder -> and a file `posts.js`
- import express and setup router. And then we can start adding routes
- After adding basic routes we go back to `index.js`, and import router that we just exported.
  - Then we use express middleware to connect this to our app. We use `.use` method to do so:
  ```jsx
    import postRoutes from `./routes/posts.js`; // .js is required
    app.use('/posts',postRoutes); // this is gonna make sure every route inside postRoutes starts with /posts and not just /
  ``` 
  - Now by running the command `npm start` we should see the message of `This Works` meaning we sucessfully connected to the database
- Now before adding functionality to this we do another setup for a folder that will hold all the functionality for backend
  - This is needed to make app scalable
- This is where `Controllers` come into play
<br/><br/>

# Setup With Controllers
 ## Why is it needed?
  - We can do logic for each route in this same file but it is gonna get complex so to avoid that we create a Controlled file and export logic from that file into this function 
  - Continue to [this file](../controllers/1-Controllers.md)
 ## After exporting the function
  - Now we get back here and import all different functions
  ```jsx
      import {getPosts} from '../controllers/posts.js'; // inside curly braces name that function.
      router.get('/', getPosts); // and call that function here
  ```
  - Now this way we can have all the routes here and, execute functions in the other file. 

Now we know how to do routing and make our code clean, we have connected server to mongoose, now it's time to design what our database is gonna look like. And for that we start by creating models.
<br/><br/>

# Next Step
- [Designing Databse](../models/1-Models.md)
