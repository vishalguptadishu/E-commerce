import { Col, Container, Row } from "react-bootstrap"
import { BsFacebook , BsTwitter , BsInstagram , BsSkype ,BsPinterest } from "react-icons/bs";
import "./Footer.css"

const Footer =()=>{
    return (
        <div className="cont_foot">

       
        <Container fluid className=" " >
            <Row className="count_foot2 pt-3 pb-3  ">
                <Col className="col-sm-6 col_foot_h ps-5 ">
                  <h4>Newsletter</h4>
                  <p>Subscribe to our newsletter and get 20% off your first purchase</p>
                </Col>
                <Col className="col-sm-6 email_col_foot ">
                  <input type="text" placeholder="Your email" />
                  <button>SUBSCRIBE</button>
                 </Col>
            </Row>

            <Row className="">
                <Col className="col-sm-6 row_foot d-flex align-items-center justify-content-between ">
                 <div className=" d-flex row_foot_div1 align-items-center gap-5 ms-5 ps-5 mt-5 text-secondary ">
                    <p>Blog</p>
                    <p> FAQs</p>
                    <p>Contact us</p>
                 </div>
                
                 <div className="d-flex row_foot_div11 align-items-center me-5 pe-5 mt-5  gap-5 text-secondary " >
                    <i><BsFacebook /></i>
                    <i><BsTwitter /></i>
                    <i><BsInstagram /></i>
                    <i><BsSkype/></i>
                    <i><BsPinterest/></i>
                 </div> 
                </Col>
            </Row>
                <Row >
                <Col className="col_sm-12">
                <div className="row_foot_div2 text-center mt-5 ms-5 pt-5 mb-5">
                    <p>©2018 All Rights Reserverd. This template is made with  by Colorlib.</p>
                 </div>
                </Col>
                </Row>
            
        </Container>
        </div>

    )
}
export default Footer;

