import "./poster.css"
import { useNavigate } from "react-router-dom";
const Poster =()=>{
  let navigate=useNavigate()

  function handalClick(){
    navigate("/shop")
  }
    return (
        <div>
        <img  class="img-fluid poster "  src="https://images.pexels.com/photos/871495/pexels-photo-871495.jpeg?auto=compress&cs=tinysrgb&w=1560&h=750&dpr=1" alt="" />
        <div className="heading card-img-overlay " >
          <p>SPRING / SUMMER COLLECTION 2023</p>
          <h1>Get up to 30% Off New Arrivals</h1>
          <button onClick={handalClick} className="btn-heading" >SHOP NOW</button>
        </div>
        </div>
    )
}
export default Poster ;