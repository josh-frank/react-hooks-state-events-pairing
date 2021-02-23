function Video({ url, title }) {
    return (
        < iframe
        width="919"
        height="525"
        src={url}
        frameborder="0"
        allowfullscreen
        title={title}
        />
    )
}

      {/* <iframe
        width="919"
        height="525"
        src="https://www.youtube.com/embed/dQw4w9WgXcQ"
        frameborder="0"
        allowfullscreen
        title="Thinking in React"
      /> */}

export default Video