import axios from 'axios';

const url = 'http://localhost:3004/posts';

export const fetchPosts = () => axios.get(url);