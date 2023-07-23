import React, { useState } from 'react';
import { Container, Row } from 'react-bootstrap';
import './Cart.css';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import swal from 'sweetalert';



const Cart = ({ obj }) => {
  const [cartobj, setCartObj] = useState([]); // Use useState to manage cartobj state

  function handalbtn(elem) {
    setCartObj((prevCartObj) => [...prevCartObj, elem]);
    localStorage.setItem("proobj",JSON.stringify(cartobj))
    swal("Thank you!", "Your product has been added to the card!", "success");
  }
  
  return (
    <Container className="d-flex align-items-center ">
      <Row>
        {obj.map((elem, index) => (
          <Card className="text-center col-sm-4 cart mt-5" key={index}>
            <Card.Img variant="top" src={elem.url} />
            <Card.Body>
              <Card.Text>{elem.text}</Card.Text>
              <Card.Title>$ {elem.price}</Card.Title>
              <Button onClick={() => handalbtn(elem)} className="cart_btn" variant="primary">
                ADD TO CARD
              </Button>
            </Card.Body>
          </Card>
        ))}
      </Row>
    </Container>
  );
};

export default Cart;
