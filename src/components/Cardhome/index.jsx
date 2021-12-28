import React, { Component } from "react";
import { Card, Button } from "react-bootstrap";

class CardMovie extends Component {
  handleSetUpdate = () => {
    // proses 1 ...
    this.props.handleUpdate(1);
  };
  render() {
    // console.log(this.props);
    const { id, name, category, image } = this.props.data;

    return (
      <>
        <Card style={{ width: "13rem" }}>
          <Card.Img
            variant="top"
            src={
              image
                ? `http://localhost:3001/uploads/movie/${image}`
                : "https://www.a1hosting.net/wp-content/themes/arkahost/assets/images/default.jpg"
            }
          />
          <Card.Body>
            <Card.Title style={{ textAlign: "center" }}>{name}</Card.Title>
            <Card.Text style={{ textAlign: "center" }}>{category}</Card.Text>
            <Button
              variant="primary"
              onClick={() => this.props.handleDetail(id)}
            >
              Detail
            </Button>
          </Card.Body>
        </Card>
      </>
    );
  }
}

export default CardMovie;
