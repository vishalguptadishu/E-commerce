import { Button, Card, Container, Nav, Navbar, Offcanvas } from "react-bootstrap";
import { BsSearch, BsFillPersonFill, BsFillCartFill } from "react-icons/bs";
import { NavLink } from "react-router-dom"; 
import { useEffect, useState } from "react";
import "./Navbar.css";
import AddToCart from "../AddToCart/AddToCart";


function Navbarcom() {
  const [show, setShow] = useState(false);
  let [proobj ,setproobj]=useState()

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  
 
  return (
    <Navbar expand="lg" className="navcss">
      <Container>
        <NavLink style={{ textDecoration: "none" , color:"#fe4c50" }} to="/">
          <h2  >Dishu<span>Shop</span></h2>
         
        </NavLink>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto gap-5" style={{ fontSize: "12px" }}>
            <NavLink style={{ textDecoration:"none" }}  to="/" className="navcolocr">
              HOME
            </NavLink>
            <NavLink style={{ textDecoration: "none" }} to="/shop" className="navcolocr">
              SHOP
            </NavLink>
            <NavLink style={{ textDecoration: "none" }} to="/men" className="navcolocr">
              MEN
            </NavLink>
            <NavLink style={{ textDecoration: "none" }} to="/woman" className="navcolocr">
              WOMEN
            </NavLink>
            <NavLink style={{ textDecoration: "none" }} to="/blog" className="navcolocr">
              BLOG
            </NavLink>
            <NavLink style={{ textDecoration: "none" }} to="/contact" className="navcolocr">
              CONTACT
            </NavLink>
            <div className="d-flex gap-3" style={{ fontSize: "16px", fontWeight: "bold" }}>
              <NavLink  to="#link" className="text-black ms-4 d-flex align-items-center">
                <BsSearch />
              </NavLink>
              <NavLink to="/sign" className="text-black d-flex align-items-center">
                <BsFillPersonFill />
              </NavLink>
              <NavLink  className="text-black d-flex align-items-center">
               {/* <AddToCart><BsFillCartFill /></AddToCart>  */}
                  <div onClick={handleShow} ><BsFillCartFill/></div>
               <Offcanvas show={show} onHide={handleClose}>
               <Offcanvas.Header closeButton>
                <Offcanvas.Title>Cart items</Offcanvas.Title>
               </Offcanvas.Header>
               <Offcanvas.Body>
               {/* {proobj.map((elem, index) => ( */}
                <Card className="text-center col-sm-4 cart mt-5">
                  <Card.Img variant="top" src="https://preview.colorlib.com/theme/coloshop/images/product_3.png" />
                  <Card.Body>
                    <Card.Text>Blue Yeti USB Microphone Blackout Edition</Card.Text>
                    <Card.Title>$ 120</Card.Title>
                  </Card.Body>
                </Card>
              {/* ))} */}
               </Offcanvas.Body>
               </Offcanvas>
              </NavLink>
            </div>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Navbarcom;