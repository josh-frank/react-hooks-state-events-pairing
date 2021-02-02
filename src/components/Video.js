import { useState } from "react";

function Video({ video }) {
  const [upvotes, setUpvotes] = useState(video.upvotes);
  const [downvotes, setDownvotes] = useState(video.downvotes);

  function handleDownvote() {
    setDownvotes((down) => down + 1);
  }

  function handleUpvote() {
    setUpvotes((up) => up + 1);
  }

  return (
    <div>
      <iframe
        width="800"
        height="460"
        src="https://www.youtube.com/embed/dpw9EHDh2bM"
        frameborder="0"
        allowfullscreen
        title="Thinking in React"
      />
      <h1>{video.title}</h1>
      <p>
        {video.views} Views | Uploaded {video.createdAt}
      </p>
      <div>
        <button onClick={handleUpvote}>{upvotes} 👍</button>
        <button onClick={handleDownvote}>{downvotes} 👎</button>
      </div>
    </div>
  );
}

export default Video;
