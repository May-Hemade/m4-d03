import { Component } from "react"
import AddComment from "./AddComment"

import CommentList from "./CommentList"

class CommentsArea extends Component {
  state = {
    comments: [],
  }
  componentDidMount = async () => {
    try {
      let response = await fetch(
        `https://striveschool-api.herokuapp.com/api/comments/${this.props.asin}`,
        {
          headers: {
            Authorization:
              "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MWJiMzBmM2NhMTZlYjAwMTU2Yzk3NmIiLCJpYXQiOjE2Mzk2NTc3MTUsImV4cCI6MTY0MDg2NzMxNX0.ZanleSqInFZNZuXonzL1Mu8KohG4YzKkfSTko2JwDfo",
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

  render() {
    return (
      <div>
        <CommentList comments={this.state.comments}></CommentList>
        <AddComment asin={this.props.asin} />
      </div>
    )
  }
}

export default CommentsArea
