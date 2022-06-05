import express  from "express";
import {getPosts, createPost} from '../controllers/posts.js'

const router = express.Router();

router.get('/', getPosts);
router.get('/', createPost); // from the schema that we created

export default router;