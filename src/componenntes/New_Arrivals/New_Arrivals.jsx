import { Col, Container, Row } from "react-bootstrap";
import Cart from "../Cart/Cart"
import "./New_Arrivals.css"
import { useState } from "react";

let New_Arrivals_obj=[
  {id:1 ,url:"https://preview.colorlib.com/theme/coloshop/images/product_1.png",text:"Fujifilm X100T 16 MP Digital Camera (Silver)",price:"389",gender:"men" },
  {id:2 ,url:"https://preview.colorlib.com/theme/coloshop/images/product_2.png",text:"Samsung CF591 Series Curved 27-Inch FHD Monitor",price:"452",gender:"women" },
  {id:3 ,url:"https://preview.colorlib.com/theme/coloshop/images/product_3.png",text:"Blue Yeti USB Microphone Blackout Edition",price:"234" ,gender:"women" },
  {id:4 ,url:"https://preview.colorlib.com/theme/coloshop/images/product_4.png",text:"DYMO LabelWriter 450 Turbo Thermal Label Printer",price:"522",gender:"men"  },
  {id:5 ,url:"https://preview.colorlib.com/theme/coloshop/images/product_5.png",text:"Pryma Headphones, Rose Gold & Grey",price:"432",gender:"men" },
  {id:6 ,url:"https://preview.colorlib.com/theme/coloshop/images/product_6.png",text:"Fujifilm X100T 16 MP Digital Camera (Silver)",price:"343",gender:"accessorties" },
  {id:7 ,url:"https://preview.colorlib.com/theme/coloshop/images/product_7.png",text:"Fujifilm X100T 16 MP Digital Camera (Silver)",price:"341",gender:"women" },
  {id:8 ,url:"https://preview.colorlib.com/theme/coloshop/images/product_8.png",text:"Samsung CF591 Series Curved 27-Inch FHD Monitor",price:"342",gender:"accessorties" },
  {id:9 ,url:"https://preview.colorlib.com/theme/coloshop/images/product_9.png",text:"Blue Yeti USB Microphone Blackout Edition",price:"342",gender:"women" },
  {id:10 ,url:"https://preview.colorlib.com/theme/coloshop/images/product_10.png",text:"DYMO LabelWriter 450 Turbo Thermal Label Printer",price:"234",gender:"men"  },
 
]



const New_Arrivals=()=>{
  let [all,setall]=useState(New_Arrivals_obj);
  // let [all,setwomen]=useState(New_Arrivals_obj);

  function handalall(){
    
    // console.log(n)
    setall(New_Arrivals_obj)
  }

  function handalmen(){
    let men=New_Arrivals_obj.filter(men => men.gender ==="men")
    // console.log(n)
    setall(men)
  }
  function handalwomen(){
    let women=New_Arrivals_obj.filter(women => women.gender ==="women")
    // console.log(n)
    setall(women)
  }

  function handalaccessorties(){
    let accessorties=New_Arrivals_obj.filter(accessorties => accessorties.gender ==="accessorties")
    // console.log(n)
    setall(accessorties)
  }

    return (
        <Container fluid className="mt-5 ps-5"  >
            <Row>
                <Col className="text-center" >
                  <h1>New Arrivals</h1>
                </Col>
            </Row>
            <Row  >
            <Col className="col mt-5 d-flex align-items-center justify-content-center">
              <div class="btn-group  " role="group" aria-label="Basic example">
                <button type="button" onClick={handalall} class="btn btn-primary">All</button>
                <button type="button" onClick={handalwomen} class="btn btn-primary">Women's</button>
                <button type="button" onClick={handalaccessorties} class="btn btn-primary">ACCESSORIES</button>
                <button type="button" onClick={handalmen} class="btn btn-primary">MEN's</button>
              </div>
            </Col>
            </Row>
            <Row>
              <Col className="new_carts">
               <Cart obj={all} />
              </Col>
            </Row>
        </Container>
    )
}
export default New_Arrivals;

// align-items-center
