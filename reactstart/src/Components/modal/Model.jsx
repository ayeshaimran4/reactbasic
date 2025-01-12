import React, { useState, useEffect } from "react";
import "./Model.css";

const Modal = ({ closeModal, onSave, post }) => {
  const [title, setTitle] = useState(post ? post.title : "");
  const [body, setBody] = useState(post ? post.body : "");

  useEffect(() => {
    if (post) {
      setTitle(post.title);
      setBody(post.body);
    }
  }, [post]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const postData = { title, body };

    onSave(postData); // Trigger save logic in parent
  };

  return (
    <div className="modal">
      <div className="modal-content">
        <h2>{post ? "Edit Post" : "Add a Post"}</h2>
        <input
          type="text"
          placeholder="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <textarea
          placeholder="Description"
          value={body}
          onChange={(e) => setBody(e.target.value)}
        />
        <div>
          <button onClick={handleSubmit} className="submit-btn">
            Submit
          </button>
          <button onClick={closeModal} className="close-btn">
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
