import { useState } from "react";
import { Button, Col, Container, Form, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import swal from 'sweetalert';

const LogIn = () => {
  const [email, setEmail] = useState(""); 
  const [password, setPassword] = useState(""); 

  let navigate=useNavigate()

  function handleEmailChange(e) {
    setEmail(e.target.value);
  }

  function handlePasswordChange(e) {
    setPassword(e.target.value);
  }

  function handalsubmit(){
    let user= JSON.parse(localStorage.getItem("user_key"))
    if(user.email===email && user.password === password){
        swal("Good job!", "you are login successfully!", "success");
        navigate("/")
    }else {
        swal("error!", "email or password is wrong!", "error");
    }
  }

  return (
    <Container>
      <Row>
        <Col>
          <h1>Log In</h1>
          <Form.Control
            onChange={handleEmailChange}
            style={{ width: "50%" }}
            className="input_bar"
            size="lg"
            type="email"
            placeholder="Email"
          />
          <br />
          <Form.Control
            onChange={handlePasswordChange}
            style={{ width: "50%" }}
            className="input_bar"
            size="lg"
            type="password"
            placeholder="Password"
          />
          <br />
          <Button onClick={handalsubmit} variant="dark">Log In</Button>
          <p className="mt-3">
            New user <Link to={"/sign"}>click here</Link>
          </p>
        </Col>
      </Row>
    </Container>
  );
};

export default LogIn;
