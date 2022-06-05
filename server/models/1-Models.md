# Setup
- So create a folder called `models` -> file `postMessage.js`
- We now import `mongoose`, and create a schema using 
```jsx 
    import mongoose from 'mongoose';
    mongoose.Schema({/*object*/}); // here we add what each post is supposed to have 
```
- Once Schema is done we then create a model, and export it.
  - Confused about Model and Schema? Checkout [Detour](#detour-model-vs-schema)
```jsx
const PostMessage = mongoose.model('PostMessage', postSchema);
export default PostMessage;
```

# Next
- [Click here](2-Models.md)

 ## **Detour**: Model vs Schema
- A `schema` can have multiple `models` related with it and each `model` can have multiple instances related with it. For Example:
```jsx
animalSchema{name:String, type:String};
mongoose.model('carnivores', animalSchema) 
// This means => carnivores is a model that is based on animalSchema

const lion = new carnivores(); 
const tiger = new carnivores();
// Above both are instaces of the carnivores model of the schema animalSchema
```
- So to sum up `Schema` & `Model`:
  - `Databse Schema` is the one that contains the luist of attributes and instructions to tell the database engine how data is organised.
  - `Data Model` is a an abstract representation of database
 