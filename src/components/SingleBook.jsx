import { Component } from "react"
import { Card } from "react-bootstrap"
import MyBadge from "./MyBadge"
import CommentsArea from "./CommentArea"

class SingleBook extends Component {
  state = {
    isSelected: false,
  }
  bookClass = () => {
    if (this.state.isSelected) {
      return "m-3 border-success"
    }
    return "m-3"
  }

  toggleSelection = () => {
    this.setState({
      isSelected: !this.state.isSelected,
    })
  }

  render() {
    return (
      <Card className={this.bookClass()}>
        <Card.Img
          onClick={() => this.toggleSelection()}
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
              message={"$" + this.props.book.price}
            ></MyBadge>
          </Card.Title>
          <Card.Text className="text-warning">
            {this.props.book.category}
          </Card.Text>
        </Card.Body>
        {this.state.isSelected ? (
          <CommentsArea asin={this.props.book.asin} />
        ) : (
          <div></div>
        )}
      </Card>
    )
  }
}

export default SingleBook
