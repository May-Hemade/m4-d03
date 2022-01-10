import { Component } from "react"
import AddComment from "./AddComment"

import CommentList from "./CommentList"

class CommentsArea extends Component {
  state = {
    comments: [],
  }
  reload = async () => {
    try {
      let response = await fetch(
        `https://striveschool-api.herokuapp.com/api/comments/${this.props.asin}`,
        {
          headers: {
            Authorization:
              "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MWRjM2ZlM2YyNjM3ODAwMTVlNTBkMjMiLCJpYXQiOjE2NDE4MjQyMjgsImV4cCI6MTY0MzAzMzgyOH0.W742-ds5IzemTIVAKRB4zi1Cr6YVgn4vqAMwc42xblA",
          },
        }
      )
      if (response.ok) {
        let bookComments = await response.json()
        this.setState({ comments: bookComments })
        console.log(bookComments)
      } else {
        console.log(`something went wrong Don't Panic`)
      }
    } catch (error) {
      console.log(error)
    }
  }

  componentDidUpdate = (prevProps, prevState) => {
    if (this.props.asin !== prevProps.asin) this.reload()
  }

  render() {
    return (
      <div>
        <CommentList comments={this.state.comments}></CommentList>
        <AddComment fetchComments={this.reload} asin={this.props.asin} />
      </div>
    )
  }
}

export default CommentsArea
