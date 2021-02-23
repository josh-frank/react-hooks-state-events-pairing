import React, { useState } from "react";

function Comments({ comments }) {
    // const commentVoteObject = comments.map()
    const [ isHidden, toggleHidden ] = useState( false );
    const [ currentComments, updateComments ] = useState( comments );
    const [ searchQuery, updateSearchQuery ] = useState('')
    console.log('searchQuery: ', searchQuery);
    
    function deleteComment( commentToDeleteId ) {
        const updatedComments = currentComments.filter( comment => comment.id !== commentToDeleteId );
        updateComments( updatedComments );
    }
    
    function hide() {
        toggleHidden( isHidden => !isHidden );
    }
    
    // function incrementUpvotes(){ updateUpvotes( numberOfUpvotes + 1 ) }
    // function incrementDownvotes(){ updateDownvotes( numberOfDownvotes + 1 ) }
    // const [ numberOfUpvotes, updateUpvotes ] = useState( 0 );
    // const [ numberOfDownvotes, updateDownvotes ] = useState( 0 );
    
    const commentList = filterComments().map(comment => {
        return (
            <div key={comment.id}  className="comment">
                <b>
                    {comment.user}
                    <button className="delete-comment" onClick={ () => deleteComment( comment.id ) }>🆇</button>
                </b>
                <p>
                    {comment.comment}
                    {/* <button className="upvote-button" onClick={ incrementUpvotes }>
                        {numberOfUpvotes} 👍
                    </button>
                    <button className="downvote-button" onClick={ incrementDownvotes }>
                        {numberOfDownvotes} 👎
                    </button> */}
                </p>
            </div>
        )
    })

    function filterComments() {
        return currentComments.filter(comment => comment.user.toLowerCase().includes(searchQuery.toLowerCase()))
        
    }

    const commentsSection = (
        <div className="comments-section">
            <input className="search-bar" placeholder="Search comments" onChange={(e) => updateSearchQuery(e.target.value)}/>
            <h3>
            {commentList.length} Comments 
            </h3>
            {commentList}
        </div>
    );

    return (
        <section className="comments-container">
            <button className="hide-comments" onClick={ hide }>
                { isHidden ? "Show" : "Hide" } Comments
            </button>
            <hr/>
            { isHidden ? null : commentsSection }
        </section>
    )

}

export default Comments