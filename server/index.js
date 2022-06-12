import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';

import postRoutes from './routes/posts.js'; // import the routes

const app = express();

app.use('/posts', postRoutes); // this is the way the main page is going to be reached, i.e. by using /posts

app.use(bodyParser.json({limit: "30mb", extended: true}));
app.use(bodyParser.urlencoded({limit: "30mb", extended: true}));
app.use(cors());

const CONNECTION_URL = 'mongodb+srv://sunraj123:sunraj123@cluster0.0jfek1u.mongodb.net/?retryWrites=true&w=majority';
const PORT = process.env.PORT || 3004;

mongoose.connect(CONNECTION_URL, {useNewUrlParser: true, useUnifiedTopology: true})
    .then(() => app.listen(PORT, () => console.log(`server running on port :${PORT}`)))
    .catch((error) => console.log(error.message));