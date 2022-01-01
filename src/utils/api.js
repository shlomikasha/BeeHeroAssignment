import axios from "axios";

export const getUsers = async () => {
  try {
    return await axios.get("https://jsonplaceholder.typicode.com/users");
  } catch (err) {
    console.error("Error getting users");
  }
};

export const getPosts = async () => {
  try {
    return await axios.get("https://jsonplaceholder.typicode.com/posts");
  } catch (err) {
    console.error("Error fetching posts");
  }
};