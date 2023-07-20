import { Container ,Row } from "react-bootstrap";
import "./Cart.css"
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

const Cart = ()=>{
    return (
        <Container className="d-flex align-items-center ">
        <Row> 
         <Card className="text-center col-sm-4 cart mt-5" >
          <Card.Img variant="top" src="https://preview.colorlib.com/theme/coloshop/images/product_1.png" />
          <Card.Body>
          <Card.Text>Fujifilm X100T 16 MP Digital Camera (Silver)</Card.Text>
          <Card.Title>$520.00$590.00</Card.Title>
          <Button className="cart_btn" variant="primary">Go somewhere</Button>
        </Card.Body>
      </Card>

      </Row>
      </Container>
    )
}
export default Cart;