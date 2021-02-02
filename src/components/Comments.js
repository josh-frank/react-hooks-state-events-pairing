import { useState } from "react";
import Comment from "./Comment";

function Comments({ comments }) {
  const [isShowing, setIsShowing] = useState(true);

  function handleToggleComments() {
    setIsShowing((isShowing) => !isShowing);
  }

  const commentItems = comments.map((comment) => (
    <Comment key={comment.id} user={comment.user} comment={comment.comment} />
  ));

  return (
    <div>
      <div>
        <button onClick={handleToggleComments}>
          {isShowing ? "Hide" : "Show"} Comments
        </button>
      </div>
      <hr />
      <h2>{comments.length} Comments</h2>
      {isShowing ? commentItems : null}
    </div>
  );
}

export default Comments;
