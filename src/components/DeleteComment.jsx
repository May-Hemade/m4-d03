import { Component } from "react"

import React from "react"
import { Trash } from "react-bootstrap-icons"

class DeleteComment extends Component {
  deleteComment = async () => {
    try {
      let response = await fetch(
        `https://striveschool-api.herokuapp.com/api/comments/${this.props.commentId}`,
        {
          method: "DELETE",
          headers: {
            Authorization:
              "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MWJiMzBmM2NhMTZlYjAwMTU2Yzk3NmIiLCJpYXQiOjE2Mzk2NTc3MTUsImV4cCI6MTY0MDg2NzMxNX0.ZanleSqInFZNZuXonzL1Mu8KohG4YzKkfSTko2JwDfo",
          },
        }
      )
      if (response.ok) {
      } else {
        console.log(`something went wrong Don't Panic`)
      }
    } catch (error) {
      console.log(error)
    }
  }

  render() {
    return <Trash onClick={this.deleteComment}></Trash>
  }
}

export default DeleteComment
