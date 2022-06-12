# Setup
- Start by creating a new folder in src, and add file called `index.js`
- And start by `importing axios`
- Have a `const URL` pointing to the backend of your application
- A get call using axios, which returns posts from our database. 
  - But we are not gonna use it here so export that call. 
- Now we focus on adding Redux. [Why Redux?](#why-redux)
<br/><br/>

# Setup Redux
- Start with making a folder in `src` called `actions` and `reducers`
- Inside `actions`
  - file called `posts.js`
- Inside `reducers`
  - file called `posts.js`
  - another file called `index.js`
  
# Next
- Now that redux setup is done, we go back to `src/index.js`, and this is the place where we initialize redux
- [Click here](../2-Client_with_redux.md)
<br/><br/>

# Why Redux?
- All actions towards our backend are gonna be done using Redux
- We need to dispacth those actions, and to do that we need to add base code, meaning we need to add a lot of files and folders
- But using redux makes app scalable.