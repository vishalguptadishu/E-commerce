import { Container, Nav, Navbar } from "react-bootstrap";

import { BsSearch ,BsFillPersonFill , BsFillCartFill  } from "react-icons/bs";
import "./Navbar.css"
function Navbarcom() {

  return (
    <Navbar expand="lg" className="navcss">
      <Container >
        <Navbar.Brand href="#home">
          <img
            style={{ height: 40 }}
            src="https://w7.pngwing.com/pngs/621/196/png-transparent-e-commerce-logo-logo-e-commerce-electronic-business-ecommerce-angle-text-service.png"
            alt=""
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto gap-5" style={{fontSize:"12px"}}  >
            <Nav.Link href="#home" className="text-black" >HOME</Nav.Link>
            <Nav.Link href="#link" className="text-black" >SHOP</Nav.Link> 
            <Nav.Link href="#link" className="text-black" >PROMOTION</Nav.Link>  
            <Nav.Link href="#link" className="text-black" >PAGES</Nav.Link>  
            <Nav.Link href="#link" className="text-black" >BLOG</Nav.Link>  
            <Nav.Link href="#link" className="text-black" >CONTACT</Nav.Link> 
            <div className="d-flex gap-3" style={{fontSize:"16px" , fontWeight:"bold"}} >
            <Nav.Link href="#link" className="text-black ms-4 d-flex align-items-center " ><BsSearch /></Nav.Link>  
            <Nav.Link href="#link" className="text-black d-flex align-items-center" ><BsFillPersonFill /></Nav.Link> 
            <Nav.Link href="#link" className="text-black d-flex align-items-center "  ><BsFillCartFill /></Nav.Link> 
            </div> 
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Navbarcom;


 

 
 

 

