import React, { useState } from "react";

function VideoInfo({ title, views, uploadDate, upVote, downVote }) {

    const [ numberOfUpvotes, updateUpvotes ] = useState( upVote );
    const [ numberOfDownvotes, updateDownvotes ] = useState( downVote );

    function incrementUpvotes(){ updateUpvotes( numberOfUpvotes + 1 ) }

    function incrementDownvotes(){ updateDownvotes( numberOfDownvotes + 1 ) }

    return (
        <section className="video-info">
            <h1>
                {title}
            </h1>
            <p>
                {views} Views 
                | Uploaded {uploadDate}
            </p>
            <button className="upvote-button" onClick={ incrementUpvotes }>
                {numberOfUpvotes} 👍
            </button>
            <button className="downvote-button" onClick={ incrementDownvotes }>
                {numberOfDownvotes} 👎
            </button>
            <br/>
            <br/>
        </section>
    )
}

export default VideoInfo