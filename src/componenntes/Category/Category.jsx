import { Col, Container, Row } from "react-bootstrap";
import "./Category.css"
import Cart from "../Cart/Cart";
import Navbarcom from "../Navbar/Navbar";


let New_Arrivals_obj=[
    {id:1 ,url:"https://preview.colorlib.com/theme/coloshop/images/product_1.png",text:"Fujifilm X100T 16 MP Digital Camera (Silver)",price:"389"  },
    {id:2 ,url:"https://preview.colorlib.com/theme/coloshop/images/product_2.png",text:"Samsung CF591 Series Curved 27-Inch FHD Monitor",price:"452"},
    {id:3 ,url:"https://preview.colorlib.com/theme/coloshop/images/product_3.png",text:"Blue Yeti USB Microphone Blackout Edition",price:"234"},
    {id:4 ,url:"https://preview.colorlib.com/theme/coloshop/images/product_4.png",text:"DYMO LabelWriter 450 Turbo Thermal Label Printer",price:"522" },
    {id:5 ,url:"https://preview.colorlib.com/theme/coloshop/images/product_5.png",text:"Pryma Headphones, Rose Gold & Grey",price:"432"},
    {id:6 ,url:"https://preview.colorlib.com/theme/coloshop/images/product_6.png",text:"Fujifilm X100T 16 MP Digital Camera (Silver)",price:"343"},
    {id:7 ,url:"https://preview.colorlib.com/theme/coloshop/images/product_7.png",text:"Fujifilm X100T 16 MP Digital Camera (Silver)",price:"341"},
    {id:8 ,url:"https://preview.colorlib.com/theme/coloshop/images/product_8.png",text:"Samsung CF591 Series Curved 27-Inch FHD Monitor",price:"342"},
    {id:9 ,url:"https://preview.colorlib.com/theme/coloshop/images/product_9.png",text:"Blue Yeti USB Microphone Blackout Edition",price:"342"},
    {id:10 ,url:"https://preview.colorlib.com/theme/coloshop/images/product_10.png",text:"DYMO LabelWriter 450 Turbo Thermal Label Printer",price:"234" },
   
  ]
const Category = ()=>{
    return (
        <> 
        <Navbarcom />
        <Container sm={6} md={3} lg={2} className="mt-5" >
            <Row>
                <Col >
                <Row>
                    <Col >
                    <h5>Product Category</h5>
                    </Col>
                  
                </Row>
                <Row className="mt-3 text-secondary">
                    <Col>
                    <p>Men</p>
                    </Col>
                  
                </Row>
                <Row>
                    <Col  >
                    <p className="text-secondary" >Women</p>
                    </Col>
                  
                </Row>
                <Row>
                    <Col>
                    <p>Accessories</p>
                    </Col>
                  
                </Row>
                <Row>
                    <Col>
                    <p>New Arrivals</p>
                    </Col>
                  
                </Row>
                ----------------
                <Row className="mt-5" >
                    <Col>
                      <h5>Filter by Price</h5>
                    </Col>
                </Row>
                <Row  >
                    <Col>
                      <p>$0 - $800</p>
                    </Col>
                </Row>
                <Row  >
                    <Col>
                      
                    </Col>
                </Row>
                <Row  >
                    <Col>
                      <button>Filter</button>
                    </Col>
                </Row>
                </Col>
 {/* ----------------------------------------------------------------------------- */}
                <Col  sm={6} md={3} lg={10}  >
                <Row className="d-flex  justify-content-space-between " >
                    <Col className="d-flex  ">
                     <button>Product name</button>
                     <button>show</button>

                    </Col>
                    <Col className="d-flex justify-content-end">
                    <button>1</button>
                    <p>of 3</p>
                     <button>--</button>
                    </Col>
                </Row>

                <Row >
                <Col className="Category_carts  ">
                   <Cart obj={New_Arrivals_obj} />
                </Col>
                </Row>

               
                </Col>
            </Row>
        </Container>
        </>
    )
}
export default Category; 

