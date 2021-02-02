import Video from "./Video.js";
import Comments from "./Comments.js";
import video from "../data/video.js";

function App() {
  console.log("Here's your data:", video);

  return (
    <div className="App">
      <Video video={video} />
      <Comments comments={video.comments} />
    </div>
  );
}

export default App;
