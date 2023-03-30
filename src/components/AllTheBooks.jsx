import { Component } from "react";
import { Container, Row, Card, Col, Badge, Carousel } from "react-bootstrap";
import data from "../data/history.json";

class AllTheBooks extends Component {
  render() {
    return (
      <Container>
        <Row className="p-5 justify-content-center">
          <Col xs={4}>
            <Carousel>
              {data.map((data, index) => (
                <Carousel.Item key={`data-${index}`}>
                  <Card>
                    <Card.Img variant="top" src={data.img} height="600px" />
                    <Card.Body>
                      <Card.Title className="fs-6 fw-bold">Title: {data.title}</Card.Title>
                      <Card.Text>
                        <Badge className="bg-warning">Price €{data.price}</Badge>
                      </Card.Text>
                    </Card.Body>
                  </Card>
                </Carousel.Item>
              ))}
            </Carousel>
          </Col>
        </Row>
      </Container>
    );
  }
}
export default AllTheBooks;
