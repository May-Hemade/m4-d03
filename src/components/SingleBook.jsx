import { Card } from "react-bootstrap"

const SingleBook = (props) => {
  return (
    <Card
      style={{ height: 500, objectFit: "cover" }}
      className="m-3"
      key={props.book.asin}
    >
      <Card.Img
        variant="top"
        src={props.book.img}
        style={{ height: 300, objectFit: "cover" }}
      />
      <Card.Body>
        <Card.Title>{props.book.title}</Card.Title>
        <Card.Text className="text-warning">{props.book.category}</Card.Text>
      </Card.Body>
    </Card>
  )
}

export default SingleBook
