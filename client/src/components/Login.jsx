import React, { useState } from "react";
import { Button, TextField, styled, Box, Typography } from "@mui/material";
import { loginUser } from "../Service/api";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const Box1 = styled(Box)`
  width: 50%;
  margin: 5% auto 0 auto;
  padding: 30px 40px;
  display: flex;
  flex-direction: column;
  border: 2px solid grey;
  border-radius: 20px;
  box-shadow: 20px 20px 10px rgba(0, 0, 0, 0.3);
  & > div {
    margin: 20px 0 10px 0;
  }
`;

function Login(props) {
  const initialvalue = { email: "", password: "" };
  const [Values, setValues] = useState(initialvalue);

  const navigate = useNavigate();

  const handleChange = (e) => {
    setValues({ ...Values, [e.target.name]: e.target.value });
  };

  const handleClick = async () => {
    
    try {
      // e.preventDefault();
    
      const response = await loginUser(Values);
      console.log(response);
      if (response.data.msg ==="User SuccessFully SignUp" ) {
        localStorage.setItem("token", response.data.token);
        console.log(response.data.token);
        navigate("/homepage");
      } 
      else{
    alert('Enter correct credentials')
      }
    } catch (error) {
      console.log(error)
      console.log("none")

    }

  };

  return (
    <Box1>
      <Typography variant="h3">Login Page</Typography>
      <TextField
        variant="outlined"
        label="Email"
        name="email"
        onChange={handleChange}
      />
      <TextField
        variant="outlined"
        label="Password"
        name="password"
        onChange={handleChange}
      />
      <Button variant="contained" onClick={handleClick}>
        Log in
      </Button>
      <span>
        <h2>
          New User?<Link to="../signup">signup</Link>
        </h2>
      </span>
    </Box1>
  );
}

export default Login;
