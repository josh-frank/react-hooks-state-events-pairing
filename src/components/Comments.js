function Comments({ comments }) {
    const commentList = comments.map(comment => {
        return (
            <div key={comment.id}  className="comment">
                <b>
                    {comment.user}
                </b>
                <p>
                    {comment.comment}
                </p>
            </div>
        )
    })
    return (
        <section className="comments-container">
            <button className="hide-comments">
                Hide Comments
            </button>
            <hr/>
            <h3>
               {commentList.length} Comments 
            </h3>
            {commentList}
        </section>
    )
}

export default Comments