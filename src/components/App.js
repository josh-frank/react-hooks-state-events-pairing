import video from "../data/video.js";
import Comments from "./Comments.js";
import Video from "./Video.js";
import VideoInfo from "./VideoInfo.js";


function App() {
  console.log("Here's your data:", video);

  return (
    <div className="App">
      <Video url={video.embedUrl} title={video.title}/>
      <VideoInfo views={video.views} title={video.title}
        uploadDate={video.createdAt} upVote={video.upvotes}
        downVote={video.downvotes}
      />
      <Comments comments={video.comments} />

    </div>
  );
}

export default App;
