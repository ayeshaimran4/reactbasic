import { useState, useEffect } from "react";
import axios from "axios";

const usePosts = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const getPost = async () => {
    try {
      console.log("fetching post...");
      const response = await axios.get("http://localhost:5000/posts");
      console.log("fetched posts", response.data);
      setPosts(response.data);
    } catch (error) {
      setError(`Error in fetching: ${error.message}`);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getPost();
  }, []);

  // deleting a post
  const deletePost = async (id) => {
    try {
      await axios.delete(`http://localhost:5000/posts/${id}`);
      console.log(`deleted post : ${id}`);
      await getPost();
    } catch (error) {
      setError(`Failed to delete: ${error.message}`);
    }
  };

  // editing the post
  const updatePost = async (id, updatedData) => {
    try {
      await axios.put(`http://localhost:5000/posts/${id}`, updatedData);
      console.log(`update post with id: ${id}`);
      await getPost();
    } catch (error) {
      setError(`Failed to update: ${error.message}`);
    }
  };

  // adding a post
  const addPost = async (newPost) => {
    try {
      await axios.post("http://localhost:5000/posts", newPost);
      console.log("Post added successfully");
      await getPost(); // Refresh posts after adding
    } catch (error) {
      setError(`Failed to add post: ${error.message}`);
    }
  };

  return {
    posts,
    loading,
    error,
    deletePost,
    updatePost,
    getPost,
    addPost,
    setPosts,
  };
};

export default usePosts;
