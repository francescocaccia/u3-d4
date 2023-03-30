import { Col, Container, Row } from "react-bootstrap";
import SingleBook from "./SingleBook";

class BookList extends Component {
  render() {
    return (
      <Container>
        <Row className="p-5 justify-content-center">
          {this.props.books.map(book => (
            <Col key={book.asin}>
              <SingleBook img={book.img} title={book.title} price={book.price} />
            </Col>
          ))}
        </Row>
      </Container>
    );
  }
}
export default BookList;
