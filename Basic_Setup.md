# How to use the Files
- Every required step is explained in `.md` files.
- So just follow steps and click on each as link it comes up. 
- They are all in sequence.
- Start [here](#directory-structure)
<br/><br/>

# Directory Structure
- Create a folder base directory (in my case it was Memories), and 2 sub-directories (Client and Server).
- Starting with [Client](#client)
<br/><br/>

# Client
## *Setup*
- create a Client folder and when inside that folder, intialize empty react app 
  ```bash
    npx create-react-app ./
  ```
- instal node.js using website
- Now we will use the same versions of dependencies, so copy and paste the `package.json`, and then run (while in client folder):
  ```bash
    npm install --legacy-peer-deps
  ```
- empty the `src` folder, and create a new file `index.js`, and write the basic import statements
- Another empty file `App.js` and write basic statements. 
<br/><br/>

# Server
## *Local Setup*
- We create the files for server folder
- Starting with `index.js`
- In server directory run command, to initialize empty `package.json`:
  ``` console
    npm init -y
  ```
- Now we install all the necessary dependencies by running the following:
  ```console
    npm install body-parser cors express mongoose nodemon
  ```
    - `Body parser` => Enables us to send post requests
    - `cors` => Enables cross origin requests
    - `express` => To create routing for our app
    - `mongoose` => To create models for our posts
    - `nodemon` => It resets server every time we change something
- In `index.js` => write the import statements for importing the things that we just installed
  - Now to **avoid** writing the line:
  ```jsx
    const express = require ('express');
  ```
    - We just go to `package.json` -> under main(line5), write (this tells the app to use ES6, so now we can write import express line):
  ```JSON
    "type": "module",
  ```
  - Also remove `test` script and add `start` script:
  ```JSON
    "start": "nodemon index.js"
  ```
    - It starts the index.js file with nodemon
  
## *Backend Setup in `index.js` file*
- Start with general setup:
  - We have 30mb limit because we will also be sending some images 
  ``` JSX
    const app = express();
    app.use(bodyParser.json({limit: "30mb", extended: true}));
    app.use(bodyParser.urlencoded({limit: "30mb", extended: true}));
  ``` 

## *Database linking*
- [First we setup database. Follow the link](#database-mongodb)
- **FOR NOW** After getting the connection string, make a `const` that holds that URL, and add username and password.
  - Later we will change this to make it secure cause we can't just leave our database credentials out 
- **FOR NOW** Select a PORT 
- Then using connect database. We use `.connect()` method, with 2 parameters
  - Connection URL which is required
  - The other 2 which are only there so that we don't get any warnings
- Then we chain a `.then` and `.catch` because the above returns a promise 
  - `.then`: so once our connection is success, we call our app, and have a listen call, with a callback function, and using template strings tell which port is used
  - `.catch`: for if connection is not successful, the give error 

```jsx
const CONNECTION_URL = 'mongodb+srv://<username>:<password>@clusterxvyaxvyadycvsdgvbioasbdfg';
const PORT = process.env.PORT || 5000;

mongoose.connect(CONNECTION_URL, {useNewUrlParser: true, useUnifiedTopology: true})
    .then(() => app.listen(PORT, () => console.log(`server running on port :${PORT}`)))
    .catch((error) => console.log(error.message));
```
- Now type `NPM start`, and we should get `.then` console.log. Meaning our server is successfuly connected to database
- [Next Step](#next-step)
<br/><br/>

# Database (MongoDB)
- Make an account-> build a cluster-> Shared Cluster, adn just create cluster.
- It takes some time.
- Then go to `Database Access`, and create a new user, create a username and password
  - These credentials will be used to read and write to any database
- Then go to `Network Access`, and add IP address.
  - In our case we can just click on current IP address button
- Once it is deployed click on `Connect` button
  - Select the option. In our case we click connect to our application.
  - we copy the string and get back to `index.js` in Server
- [Adding database string to `index.js` (click here)](#database-linking)
<br/><br/>
 

# Next Step
- Now we have a frontend base, backend base and connection to the database, we can start creating routes for our backend application. 
- [Continue to Routing](server/routes/1-Routing.md)
