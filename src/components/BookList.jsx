import { Container, Row, Col } from "react-bootstrap"
import SingleBook from "./SingleBook"

const BookList = (props) => {
  return (
    <Container>
      <h2>The Scifi Collection</h2>
      <Row className="justify-content-center h-100">
        {props.books.map((book) => (
          <Col xs={12} md={6} lg={3}>
            <SingleBook book={book} />
          </Col>
        ))}
      </Row>
    </Container>
  )
}

export default BookList
