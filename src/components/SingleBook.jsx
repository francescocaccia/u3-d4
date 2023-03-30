import { Component } from "react";
import { Container } from "react-bootstrap";

class SingleBook extends Component {
  render() {
    return (
      <Container>
        <Row className="p-5 justify-content-center">
          <Col>
            <Card id="card">
              <Card.Img className="img-fluid" variant="top" src={this.props.img} />
              <Card.Body>
                <Card.Title className="text-truncate">{this.props.title}</Card.Title>
                <Card.Text>
                  <Badge className="p-2 my-2" bg="warning">
                    {this.props.price} €
                  </Badge>
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default SingleBook;
