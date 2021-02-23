function VideoInfo({ title, views, uploadDate, upVote, downVote }) {
    return (
        <section className="video-info">
            <h1>
                {title}
            </h1>
            <p>
                {views} Views 
                | Uploaded {uploadDate}
            </p>
            <button className="upvote-button">
                {upVote} 👍
            </button>
            <button className="downvote-button">
                {downVote} 👎
            </button>
            <br/>
            <br/>
        </section>
    )
}

export default VideoInfo