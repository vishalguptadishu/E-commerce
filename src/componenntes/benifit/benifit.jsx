import { FaTruck, FaRegListAlt, FaClock, FaRedo } from "react-icons/fa";
import { GrCurrency } from "react-icons/gr";
import "./benifit.css";
import { Col, Container, Row } from "react-bootstrap";
const Benifit = () => {
  return (
    <Container className="cont">
      <Row className="row_benefit">
        <Col sm={6} md={3} lg={3} className=" col_benefit ">
          <div className="icon_benefit">
            <i>
              <FaTruck />
            </i>
          </div>
          <div className="p_benefit">
            <h6>FREE SHIPPING</h6>
            <p>Suffered Alteration in Some Form</p>
          </div>
        </Col>
        <Col  sm={6} md={3} lg={3} className=" col_benefit">
          <div className="icon_benefit">
            <i>
              <FaRegListAlt />
            </i>
          </div>
          <div className="p_benefit">
            <h6>CACH ON DELIVERY</h6>
            <p>The Internet Tend To Repeatt</p>
          </div>
        </Col>
        <Col sm={6} md={3} lg={3} className=" col_benefit">
          <div className="icon_benefit">
            <i>
              <FaRedo />
            </i>
          </div>
          <div className="p_benefit">
            <h6> 45 DAYS RETURN</h6>
            <p>Making it Look Like Readable</p>
          </div>
        </Col>
        <Col sm={6} md={3} lg={3} className=" col_benefit">
          <div className="icon_benefit">
            <i>
              <FaClock />
            </i>
          </div>
          <div className="p_benefit">
            <h6>OPENING ALL WEEK</h6>
            <p>8AM - 09PM</p>
          </div>
        </Col>
      </Row>
    </Container>
  );
};
export default Benifit;
