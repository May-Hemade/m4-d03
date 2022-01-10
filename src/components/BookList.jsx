import { Component } from "react"
import {
  Container,
  Row,
  Col,
  Navbar,
  Form,
  FormControl,
  Nav,
} from "react-bootstrap"
import SingleBook from "./SingleBook"
import CommentsArea from "./CommentArea"

class BookList extends Component {
  state = {
    filter: null,
    selectedBook: null,
  }

  filterBookList = (query) => {
    this.setState({
      filter: query,
    })
  }
  setSelectedBook = (asin) => {
    this.setState({
      filter: this.state.filter,
      selectedBook: asin,
    })
  }

  render() {
    return (
      <div>
        <Navbar bg="light" expand="lg">
          <Container fluid className=" d-flex justify-content-between">
            <Navbar.Brand href="#">Scifi Books</Navbar.Brand>
            <Navbar.Toggle aria-controls="navbarScroll" />
            <Navbar.Collapse id="navbarScroll">
              <Nav
                className="me-auto my-2 my-lg-0"
                style={{ maxHeight: "100px" }}
                navbarScroll
              ></Nav>
              <Form className="d-flex">
                <FormControl
                  type="search"
                  placeholder="Search"
                  className="me-2"
                  aria-label="Search"
                  onChange={(e) => {
                    this.filterBookList(e.target.value)
                  }}
                />
              </Form>
            </Navbar.Collapse>
          </Container>
        </Navbar>

        <Container>
          <Row className="justify-content-center h-100">
            <Col>
              <h2>The Scifi Collection</h2>
              <Row>
                {this.props.books
                  .filter((book) => {
                    if (this.state.filter != null) {
                      return book.title
                        .toLowerCase()
                        .startsWith(this.state.filter.toLowerCase())
                    }
                    return true
                  })
                  .map((book) => (
                    <Col xs={12} md={6} lg={3} key={book.asin}>
                      <SingleBook
                        book={book}
                        setSelectedBook={this.setSelectedBook}
                      />
                    </Col>
                  ))}
              </Row>
            </Col>
            <Col md={2}>
              <h2>Comment Area</h2>
              {this.state.selectedBook && (
                <CommentsArea asin={this.state.selectedBook} />
              )}
            </Col>
          </Row>
        </Container>
      </div>
    )
  }
}

export default BookList
