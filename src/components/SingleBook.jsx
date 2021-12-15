import { Component } from "react"
import { Card } from "react-bootstrap"

class SingleBook extends Component {
  state = {
    selected: false,
  }
  bookClass = () => {
    if (this.state.selected) {
      return "m-3 border-danger"
    }
    return "m-3"
  }

  toggleSelection = () => {
    this.setState({
      selected: !this.state.selected,
    })
  }

  render() {
    return (
      <Card
        style={{ height: 500, objectFit: "cover" }}
        className={this.bookClass()}
        key={this.props.book.asin}
        onClick={() => this.toggleSelection()}
      >
        <Card.Img
          variant="top"
          src={this.props.book.img}
          style={{ height: 300, objectFit: "cover" }}
        />
        <Card.Body>
          <Card.Title>{this.props.book.title}</Card.Title>
          <Card.Text className="text-warning">
            {this.props.book.category}
          </Card.Text>
        </Card.Body>
      </Card>
    )
  }
}

export default SingleBook
