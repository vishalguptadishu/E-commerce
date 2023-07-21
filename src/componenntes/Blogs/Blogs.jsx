import { Col, Container, Row } from "react-bootstrap";
import "./Blogs.css";

const Latest_Blogs = () => {
  return (
    <Container className="mt-5 pt-5">
      <Row>
        <Col sm={12} md={6} lg={4}>
          <div className="img_blog">
            <img
              src="https://images.pexels.com/photos/17077611/pexels-photo-17077611/free-photo-of-a-woman-in-a-headscarf-and-a-man-walking-in-front-of-her.jpeg?auto=compress&cs=tinysrgb&w=600"
              alt=""
            />
          </div>
          <div className="text_blog">
            <h4>Here are the trends I see coming this fall</h4>
            <p>BY ADMIN | DEC 01, 2017</p>
          </div>
        </Col>
        <Col sm={12} md={6} lg={4}>
          <div className="img_blog">
            <img
              src="https://images.pexels.com/photos/17066203/pexels-photo-17066203/free-photo-of-smiling-woman-in-a-white-shirt-among-flowers.jpeg?auto=compress&cs=tinysrgb&w=600"
              alt=""
            />
          </div>
          <div className="text_blog">
            <h4>Here are the trends I see coming this fall</h4>
            <p>BY ADMIN | DEC 01, 2017</p>
          </div>
        </Col>
        <Col sm={12} md={6} lg={4}>
          <div className="img_blog">
            <img
              src="https://images.pexels.com/photos/3755706/pexels-photo-3755706.jpeg?auto=compress&cs=tinysrgb&w=600"
              alt=""
            />
          </div>
          <div className="text_blog">
            <h4>Here are the trends I see coming this fall</h4>
            <p>BY ADMIN | DEC 01, 2017</p>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default Latest_Blogs;
