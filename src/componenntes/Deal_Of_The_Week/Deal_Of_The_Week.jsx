import { Col, Container, Row } from "react-bootstrap"
import "./Deal_Of_The_Week.css"
import { useEffect, useState } from "react"

const Deal_Of_The_Week = ()=>{
    let [mint,setmint]=useState(59)
    let [sec,setsec]=useState(59)

    useEffect(() => {
        const interval = setInterval(() => {
          if (sec === 0) {
            if (mint > 0) {
                setmint((prevMinutes) => prevMinutes - 1);
                setsec(59);
            }
          } else {
            setsec((prevSeconds) => prevSeconds - 1);
          }
        }, 1000);
    
        return () => clearInterval(interval);
      }, [mint, sec]);

    

    return( <>
        <Container fluid className="mt-4" style={{backgroundColor:"#f2f2f2" , width:"100%"}} >
            <Row>
               <Col className="cal-sm-12 deal_col d-flex align-itmes-center">

                 <div className="ms-5 ps-5 deal_img ">
                    <img src="https://preview.colorlib.com/theme/coloshop/images/deal_ofthe_week.png" alt="" />
                 </div>

                 <div className="time_deal" >
                    <h1 className="text-center mb-5 " >Deal Of The Week</h1>
                    <div className="d-flex align-items-center gap-3 time_deal2 " >
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
                        </div>
                        <div className="timer_deal" >
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