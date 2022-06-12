# setup in src/index.js
- Now we initialize redux in `index.js`
- Import `provider`. What does this do?
- Import `createStore, applyMiddleware, compose` from redux
- Import thunk from redux-thunk , reducers from ./reducers folder
- Then we make a const `store` which sets up createStore, adn it takes 2 parameters `reducers` and `compose(applyMiddleware(thunk))`

# Next
- Now we go to `./reducers/index.js` to setup things in it 
- [Click here](reducers/1-reducer.md)