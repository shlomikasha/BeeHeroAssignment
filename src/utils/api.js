import axios from "axios";

export const getUsers = async () => {
  try {
    const users = await axios.get('https://jsonplaceholder.typicode.com/users');
    return users;
  } catch (err) {
    console.error('Error getting users');
  }
}

export const getPosts = async () => {
  try {
    const posts = await axios.get('https://jsonplaceholder.typicode.com/posts');
    return posts;
  } catch (err) {
    console.error('Error fetching posts');
  }
}
