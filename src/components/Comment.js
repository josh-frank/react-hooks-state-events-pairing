import { useState } from "react";

function Comment({ id, user, comment, onDelete }) {
  const [upvotes, setUpvotes] = useState(0);
  const [downvotes, setDownvotes] = useState(0);

  function handleDownvote() {
    setDownvotes((down) => down + 1);
  }

  function handleUpvote() {
    setUpvotes((up) => up + 1);
  }

  function handleDelete() {
    onDelete(id);
  }

  return (
    <div>
      <h3>{user}</h3>
      <p>{comment}</p>
      <div>
        <button onClick={handleUpvote}>{upvotes} 👍</button>
        <button onClick={handleDownvote}>{downvotes} 👎</button>
        <button onClick={handleDelete}>🗑</button>
      </div>
    </div>
  );
}

export default Comment;
