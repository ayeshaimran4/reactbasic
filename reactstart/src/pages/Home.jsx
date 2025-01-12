import React, { useEffect, useState } from "react";
import usePosts from "../hooks/usePosts";
import Modal from "../Components/modal/Model";
import "./Home.css";
import SearchBar from "../Components/searchbar/SearchBar";
import axios from "axios";
import useDebounce from "../hooks/useDebounce";

function Home() {
  const {
    posts,
    loading,
    error,
    deletePost,
    updatePost,
    getPost,
    addPost,
    setPosts,
  } = usePosts();

  const [showModal, setShowModal] = useState(false);
  const [editingPost, setEditingPost] = useState(null);
  const [searchValue, setSearchValue] = useState("");

  const searchDebounce = useDebounce(searchValue, 500);
  useEffect(() => {
    if (searchDebounce) {
      fetchFilteredPosts(searchDebounce);
    } else {
      getPost();
    }
  }, [searchDebounce]);

  const fetchFilteredPosts = async (searchValue) => {
    try {
      const response = await axios.get(
        `http://localhost:5000/posts?title_like=${searchValue}`
      );
      console.log("API Response:", response.data);

      if (response.data.length > 0) {
        setPosts(response.data); // Update the posts state with the filtered results
      } else {
        console.log("No matching posts found.");
      }
    } catch (error) {
      console.error("Error fetching filtered posts:", error);
    }
  };

  const handleSearch = (value) => setSearchValue(value);

  const handleEdit = (post) => {
    setEditingPost(post);
    setShowModal(true);
  };

  const handleSaveEdit = async (updatedData) => {
    if (editingPost) {
      await updatePost(editingPost.id, updatedData);
    } else {
      try {
        await addPost(updatedData);
        await getPost(); // Refresh posts after adding a new post
      } catch (error) {
        console.error("Failed to add post", error);
      }
    }
    setEditingPost(null);
    setShowModal(false);
  };

  const handleDelete = (id) => {
    deletePost(id);
  };

  if (loading) {
    return <p>Loading posts...</p>;
  }
  if (error) {
    return <p>{error}</p>;
  }
  if (posts.length === 0) {
    return <p>No posts found</p>;
  }

  return (
    <>
      <SearchBar onSearch={handleSearch} />
      <div className="btn">
        <button onClick={() => setShowModal(true)} className="add-post-btn">
          Add Post
        </button>
      </div>
      {showModal && (
        <Modal
          closeModal={() => setShowModal(false)}
          onSave={handleSaveEdit}
          post={editingPost}
        />
      )}
      <div>
        <h2 className="heading">List of Posts</h2>
        <table>
          <thead>
            <tr>
              <th>Title</th>
              <th>Description</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {posts.map((post) => (
              <tr key={post.id}>
                <td>{post.title}</td>
                <td>{post.body}</td>
                <td>
                  <button className="edit" onClick={() => handleEdit(post)}>
                    Edit
                  </button>
                  <button className="del" onClick={() => handleDelete(post.id)}>
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}

export default Home;
