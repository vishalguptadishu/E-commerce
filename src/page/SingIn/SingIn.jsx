import { useState } from "react";
import { Button, Col, Container, Form, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import swal from 'sweetalert';

const SignIn=()=>{
    const [email, setEmail] = useState(""); 
    const [password, setPassword] = useState(""); 

    let navigate =useNavigate()
  
    function handleEmailChange(e) {
      setEmail(e.target.value);
    }
  
    function handlePasswordChange(e) {
      setPassword(e.target.value);
    }
  
    function handalsubmit(){
      let obj_user_info={
          email,
          password
      };

      if(email==="" || password==""){
        swal("error!", "please fill in the inputbox!", "error");
      }else {
        localStorage.setItem("user_key",JSON.stringify(obj_user_info))
        swal("Good job!", "you are sign up successfully!", "success");
        navigate("/LogIn")
      }
      
    }
    return (

        <Container>
          <Row >
            <Col> 
            <h1>Sign In</h1>
                <Form.Control style={{width:"50%"}} className="input_bar" size="lg" type="name" placeholder="Name" />
                <br />
                <Form.Control style={{width:"50%"}} className="input_bar" size="lg" type="number" placeholder="Mobile Number" />
                <br />
                <Form.Control onChange={handleEmailChange} style={{width:"50%"}} className="input_bar" size="lg" type="email" placeholder="Email" />
                <br />
                <Form.Control onChange={handlePasswordChange} style={{width:"50%"}} className="input_bar" size="lg" type="Password" placeholder="Password" />
                <br />
                <Button onClick={handalsubmit} variant="dark">Sign In</Button>
                <p className="mt-3"  >already have account <Link to={"/LogIn"} >click here</Link></p>
            </Col>
          </Row>
        </Container>
      

    )
}
export default SignIn;