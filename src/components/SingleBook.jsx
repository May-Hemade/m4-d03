import { Component } from "react"
import { Card } from "react-bootstrap"
import MyBadge from "./MyBadge"

class SingleBook extends Component {
  state = {
    selected: false,
  }
  bookClass = () => {
    if (this.state.selected) {
      return "m-3 border-success"
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
        onClick={() => this.toggleSelection()}
      >
        <Card.Img
          variant="top"
          src={this.props.book.img}
          style={{ height: 300, objectFit: "cover" }}
        />
        <Card.Body className="d-flex">
          <Card.Title className=" justify-content-between">
            {this.props.book.title}
            <MyBadge
              className=" m-3 block"
              color="info"
              message={this.props.book.price}
            ></MyBadge>
          </Card.Title>
          <Card.Text className="text-warning">
            {this.props.book.category}
          </Card.Text>
        </Card.Body>
      </Card>
    )
  }
}

export default SingleBook
