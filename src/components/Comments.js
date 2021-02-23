import React, { useState } from "react";

function Comments({ comments }) {

    const [ isHidden, toggleHidden ] = useState( false );
    const [ currentComments, updateComments ] = useState( comments );

    function deleteComment( commentToDeleteId ) {
        const updatedComments = currentComments.filter( comment => comment.id !== commentToDeleteId );
        updateComments( updatedComments );
    }

    function hide() {
        toggleHidden( isHidden => !isHidden );
    }

    const commentList = currentComments.map(comment => {
        return (
            <div key={comment.id}  className="comment">
                <b>
                    {comment.user}
                    <button className="delete-comment" onClick={ () => deleteComment( comment.id ) }>🆇</button>
                </b>
                <p>
                    {comment.comment}
                </p>
            </div>
        )
    })

    const commentsSection = (
        <div className="comments-section">
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