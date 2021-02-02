import { useState } from "react";

function Comments({ comments }) {
  const [isShowing, setIsShowing] = useState(true);

  function handleToggleComments() {
    setIsShowing((isShowing) => !isShowing);
  }

  const commentItems = comments.map((comment) => (
    <div>
      <h3>{comment.user}</h3>
      <p>{comment.comment}</p>
    </div>
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
