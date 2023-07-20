import { Container, Row, Col } from "react-bootstrap";
import "./categryCart.css";

const CategryCart = () => {
  return (
    <Container>
      <Row className=" mt-5 rowimgbtn">
        <Col xs={12} sm={6} md={4} lg={4}>
          <div className="img_categry">
            <img src="https://images.pexels.com/photos/8727391/pexels-photo-8727391.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" />
          </div>
          <div className="btn_img  ">
            <button>WOMEN'S</button>
          </div>
        </Col>

        <Col xs={12} sm={6} md={4} lg={4}>
          <div className="img_categry">
            <img src="https://images.pexels.com/photos/322207/pexels-photo-322207.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
          </div>
          <div className="btn_img ">
            <button>ACCESSORIES'S</button>
          </div>
        </Col>

        <Col xs={12} sm={6} md={4} lg={4}>
          <div className="img_categry">
            <img src="https://images.pexels.com/photos/1036627/pexels-photo-1036627.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
          </div>
          <div className="btn_img  ">
            <button>MEN'S</button>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default CategryCart;
