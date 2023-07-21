import React from 'react';
import { Container, Row } from 'react-bootstrap';
import './Cart.css';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

const Cart = ({ obj }) => {
  return (
    <Container className="d-flex align-items-center ms-5">
      <Row>
        {obj.map((elem, index) => (
          <Card className="text-center col-sm-4 cart mt-5" key={index}>
            <Card.Img variant="top" src={elem.url} />
            <Card.Body>
              <Card.Text>{elem.text}</Card.Text>
              <Card.Title>{elem.price}</Card.Title>
              <Button className="cart_btn" variant="primary">
                Go somewhere
              </Button>
            </Card.Body>
          </Card>
        ))}
      </Row>
    </Container>
  );
};

export default Cart;
