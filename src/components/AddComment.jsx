import { Component } from "react"

import Form from "react-bootstrap/Form"
import Button from "react-bootstrap/Button"

class AddComment extends Component {
  state = {
    comment: {
      comment: "",
      rate: "5",
      elementId: this.props.asin,
    },
  }

  handleInput = (property, value) => {
    this.setState({
      comment: {
        ...this.state.comment,
        [property]: value,
      },
    })
  }

  submitComment = async () => {
    try {
      let response = await fetch(
        `https://striveschool-api.herokuapp.com/api/comments/`,
        {
          method: "POST",
          headers: {
            Authorization:
              "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MWJiMzBmM2NhMTZlYjAwMTU2Yzk3NmIiLCJpYXQiOjE2Mzk2NTc3MTUsImV4cCI6MTY0MDg2NzMxNX0.ZanleSqInFZNZuXonzL1Mu8KohG4YzKkfSTko2JwDfo",
            "Content-Type": "application/json",
          },
          body: JSON.stringify(this.state.comment),
        }
      )
      console.log(response)
      if (response.ok) {
        let bookComments = await response.json()
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
        <Form.Group controlId="exampleForm.ControlTextarea1">
          <Form.Control
            as="textarea"
            rows={3}
            placeholder="Add Comment"
            onChange={(e) => {
              this.handleInput("comment", e.target.value)
            }}
          />

          <div key="inline-radio" className="mb-3 d-inline">
            {["1", "2", "3", "4", "5"].map((rating) => (
              <Form.Check
                inline
                label={rating}
                name="rating"
                type="radio"
                className="d-inline"
                value={rating}
                onClick={(e) => {
                  this.handleInput("rate", e.target.value)
                }}
              />
            ))}
          </div>
          <Button variant="info" onClick={this.submitComment}>
            Submit
          </Button>
        </Form.Group>
      </div>
    )
  }
}

export default AddComment
