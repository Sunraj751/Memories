# Setup
- First install UI kit called Material-ui by running following command while in client directory.

```bash
  npm install @material-ui/core
```
<br/><br/>
# Directory Structure
- Create the following structure starting with 2 folders in `src` directory
  1. `Form`
     1. `Forms.js`
     2. `styles.js`
  2. `Posts`
     1. Another Directory `Post` => Our Posts is gonna use `Post` component i.e. this 
        1. `Post.js`
        2. `styles.js`
     2. `Posts.js`
     3. `styles.js`
<br/><br/>

# Starting the code
- Start the application
- First import components from material-UI
  - To understand the components used click [here](#material-ui-comonents-explained)
- Now using thoes components create teh frontend. 
- To add the image, we first create a folder called `images`, download the image there, and `import` it in our code base
- All we coded in this component for now was the main header
- After we make grids where we import `<Posts/>` and `<Form/>`, but we don't have any code for them. So next we code those components
<br/><br/>

# Next
- Writing code for Form, Posts, and Post .
- Start [here](../src/components/Form/1-Form.md) at Form
- Once done with setup of Form, Posts and Post. Start at [Continue](#continue)
<br/><br/>

# Continue
- Now in `App.js` we need to add import statements for `Form` and `Posts` so that we don't get an error
- Once done we can see words Post, Posts, and Form on the screen (Frontend's compiled version, run the command `npm start`)
- Now we add Styles and structure to it, [Click Here](#continue---adding-styles-and-structure-to-the-code)
<br/><br/>

# Continue - adding styles and structure to the code
- Do this to add styles using material-UI
  - Add a new file `styles.js` in src folder, and write an import statement for material-UI
- Copy the code for styles from [here](#styles-for-srcstylesjs) and paste it in `../src/styles.js`
- After that write another import statement in `App.js` importing styles that we just created, and in our `App function` use a const to call that component, and now we can use this to add styles.
  - To add styles to a specific place, just use `className={classes.something}`. Example below:
  
```jsx
import useStyles from './styles.js'; 
const App = () => {
    const classes = useStyles();
  //something
  //something
  <AppBar className={classes.appBar} position = "static" color="inherit"/>
  //something
  //something
}
```
- Next we add content to styles.js for
  -  Form  : [Click here](#styles-for-srccomponentsformstylesjs)
  -  Posts : [Click here](#styles-for-srccomponentspostsstylesjs)
  -  Post  : [Click here](#styles-for-srccomponentspostspoststylesjs)
- Now after doing this we need to copy the 2 lines we added in `App.js`, and paste them in `Form.js`, `Post.js` and `Posts.js`
```jsx
import useStyles from './styles.js'
  const classes = useStyles();
```
<br/><br/>

# Next - APIs
- Now we add calls to the API 
- Start [here](../src/api/1-api.md)
<br/><br/>

# Material UI Comonents Explained
1. `Container` = It centers content horizontally. [Link](https://mui.com/material-ui/react-container/)
2. `AppBar` = The top App bar provides content and actions related to the current screen. It's used for branding, screen titles, navigation, and actions. [Link](https://mui.com/material-ui/react-app-bar/)
3. `Typography` = used to standardize the text and its related CSS properties without worrying about browser compatibility issues [Link](https://mui.com/material-ui/react-typography/)
4. `Grow` = Grow Component adds a Grow animation to a child element or component [Link](https://www.geeksforgeeks.org/how-to-use-grow-component-in-reactjs/)
5. `Grid` = grid adapts to screen size and orientation, ensuring consistency across layouts. [Link](https://mui.com/material-ui/react-grid/)
<br/><br/>

# Styles for ./src/styles.js
```jsx
import { makeStyles } from "@material-ui/core/styles";

export default makeStyles(()=>({
  appBar: {
    borderRadius: 15,
    margin: '30px 0',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  heading: {
    color: 'rgba(0,183,255, 1)',
  },
  image: {
    marginLeft: '15px',
  },
}));
```
<br/><br/>

# Styles for ../src/components/Form/styles.js
```jsx
import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  root: {
    '& .MuiTextField-root': {
      margin: theme.spacing(1),
    },
  },
  paper: {
    padding: theme.spacing(2),
  },
  form: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
  },
  fileInput: {
    width: '97%',
    margin: '10px 0',
  },
  buttonSubmit: {
    marginBottom: 10,
  },
}));
```
<br/><br/>

# Styles for ../src/components/Posts/styles.js
```jsx
import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  mainContainer: {
    display: 'flex',
    alignItems: 'center',
  },
  smMargin: {
    margin: theme.spacing(1),
  },
  actionDiv: {
    textAlign: 'center',
  },
}));
```
<br/><br/>

# Styles for ../src/components/Posts/Post/styles.js
```jsx
import { makeStyles } from '@material-ui/core/styles';

export default makeStyles({
  media: {
    height: 0,
    paddingTop: '56.25%',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    backgroundBlendMode: 'darken',
  },
  border: {
    border: 'solid',
  },
  fullHeightCard: {
    height: '100%',
  },
  card: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    borderRadius: '15px',
    height: '100%',
    position: 'relative',
  },
  overlay: {
    position: 'absolute',
    top: '20px',
    left: '20px',
    color: 'white',
  },
  overlay2: {
    position: 'absolute',
    top: '20px',
    right: '20px',
    color: 'white',
  },
  grid: {
    display: 'flex',
  },
  details: {
    display: 'flex',
    justifyContent: 'space-between',
    margin: '20px',
  },
  title: {
    padding: '0 16px',
  },
  cardActions: {
    padding: '0 16px 8px 16px',
    display: 'flex',
    justifyContent: 'space-between',
  },
});
```
<br/><br/>