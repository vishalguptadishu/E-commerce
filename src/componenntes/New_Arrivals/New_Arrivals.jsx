import { Col, Container, Row } from "react-bootstrap";
import "./New_Arrivals.css"

const New_Arrivals=()=>{
    return (
        <Container className="mt-5"  >
            <Row>
                <Col className="text-center" >
                  <h1>New Arrivals</h1>
                </Col>
            </Row>
            <Row  >
            <Col className="col mt-5 d-flex align-items-center justify-content-center">
              <div class="btn-group  " role="group" aria-label="Basic example">
                <button type="button" class="btn btn-primary">All</button>
                <button type="button" class="btn btn-primary">Women's</button>
                <button type="button" class="btn btn-primary">ACCESSORIES</button>
                <button type="button" class="btn btn-primary">MEN's</button>
              </div>
            </Col>
            </Row>
        </Container>
    )
}
export default New_Arrivals;

// align-items-center
