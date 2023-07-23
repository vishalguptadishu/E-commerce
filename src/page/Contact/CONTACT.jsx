import { Button, Col, Container, Row } from "react-bootstrap"
import { BsFacebook, BsInstagram , BsTwitter ,BsYoutube } from "react-icons/bs";
import Form from 'react-bootstrap/Form';
import "./CONTACT.css"

const Contact = () =>{
    return(
     <Container>
        <Row>
            <Col className="mb-5" sm={12} lg={6}>
             <h2>Contact Us</h2>
             <p className="mt-5" >There are many ways to contact us. You may drop us a line, give us a call or send an email, choose what suits you the most.</p>
             <p>9554939678 / 7800305495</p>
             <p>vishalguptadishu@gmail.com</p>
             <p>Open hours: 8.00-18.00 Mon-Fri Sunday: Closed</p>
                <h1 className="mt-5" >Follow Us</h1>
                <div class="social d-flex flex-row gap-3 icon_bar">
                <i><BsFacebook /></i>
                <i><BsInstagram /></i>
                <i><BsTwitter/></i>
                <i><BsYoutube /></i>
                </div>
            </Col>
            <Col sm={12} lg={6}>
             <h1>Get In Touch With Us!</h1>
             <p>Fill out the form below to recieve a free and confidential.</p>

             <Form.Control className="input_bar" size="lg" type="text" placeholder="Name" />
             <br />
             <Form.Control className="input_bar" size="lg" type="email" placeholder="Email" />
             <br />
             <Form.Control className="input_bar" size="lg" type="text" placeholder="website" />
             <br />
             <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                <Form.Control className="input_bar" placeholder="MESSAGE" as="textarea" rows={3} />
            </Form.Group>
            <Button variant="dark">SEND MESSAGE</Button>
            </Col>
        </Row>
     </Container>
    )
}
export default Contact ;