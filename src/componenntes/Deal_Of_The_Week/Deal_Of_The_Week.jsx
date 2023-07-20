import { Col, Container, Row } from "react-bootstrap"
import "./Deal_Of_The_Week.css"
import { useEffect, useState } from "react"

const Deal_Of_The_Week = ()=>{
    let [mint,setmint]=useState(59)
    let [sec,setsec]=useState(59)

    function mintfun(){
        setmint(mint-1)
    }

    function secfun(){
        setsec(sec-1)
    }

    setInterval(() => {
        mintfun()
    },360000);

    // setInterval(() => {
    //     secfun()
    // },1000);

    // useEffect(()=>{
    //     secfun()
    // },sec)

    return( <>
        <Container fluid className="mt-4" style={{backgroundColor:"#f2f2f2"}} >
            <Row>
                <Col className="col-sm-12  d-flex align-items-center col_deal " >
                  <img src="https://preview.colorlib.com/theme/coloshop/images/deal_ofthe_week.png" alt="" />
                  <div className="deal_time" >
                   <h1 className="text-center mb-5 " >Deal Of The Week</h1>
                   <div className="d-flex align-items-center  " >
                   <div className="timer_deal" >
                        <h1>2</h1>
                        <p>Day</p>
                    </div>
                    <div className="timer_deal" >
                        <h1>23</h1>
                        <p>Hours</p>
                    </div>
                    <div className="timer_deal" >
                        <h1>{mint}</h1>
                        <p>Mint</p>
                    </div><div className="timer_deal" >
                        <h1>{sec}</h1>
                        <p>Sec</p>
                    </div>
                   </div>

                   <button className="deal_btn" >SHOPE NOW</button>
                    
                  </div>
                  
                </Col>
            </Row>
        </Container>
    </>
    )
}
export default Deal_Of_The_Week;