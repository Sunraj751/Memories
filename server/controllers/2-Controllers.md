# 2 - Creating logic for routes using model we created
-  each function will have try and catch block
-  Now `finding` something inside of a model takes time therefore, we need to make it async
-  With post request we have access to something called `request.body`, but we don't have a way to send post request. 
   - And therefore we move to frontend to make a basic layout to send post requests
 - Before going onto frontend, we make sure we have a way to save the new post. 
 - So in function `createPost` create a new post, and we save them, 
   - Again since we need to do something inside the model, it need to be an async method
  
# Next
- We add the frontend
- [Click here](../../client/src/1-Client.md)