import { useState } from "react";
import Comment from "./Comment";

function Comments({ comments }) {
  const [isShowing, setIsShowing] = useState(true);
  const [search, setSearch] = useState("");
  const [sortBy, setSortBy] = useState("id");
  const [commentsArray, setCommentsArray] = useState(comments);

  function handleToggleComments() {
    setIsShowing((isShowing) => !isShowing);
  }

  const commentItems = commentsArray
    .filter((comment) =>
      comment.user.toLowerCase().includes(search.toLowerCase())
    )
    .sort((commentA, commentB) => {
      if (sortBy === "name") {
        return commentA.user.localeCompare(commentB.user);
      } else {
        return commentA.id - commentB.id;
      }
    })
    .map((comment) => (
      <Comment
        key={comment.id}
        id={comment.id}
        user={comment.user}
        comment={comment.comment}
        onDelete={onDeleteComment}
      />
    ));

  function onDeleteComment(id) {
    setCommentsArray((comments) =>
      comments.filter((comment) => comment.id !== id)
    );
  }

  return (
    <div>
      <div>
        <button onClick={handleToggleComments}>
          {isShowing ? "Hide" : "Show"} Comments
        </button>
        <br />
        <input
          type="text"
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Search by name"
        />
        <br />
        <button onClick={() => setSortBy("id")}>Sort by id</button>
        <button onClick={() => setSortBy("name")}>Sort by name</button>
      </div>
      <hr />
      <h2>{comments.length} Comments</h2>
      {isShowing ? commentItems : null}
    </div>
  );
}

export default Comments;
