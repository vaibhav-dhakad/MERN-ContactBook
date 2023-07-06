import React, { useState } from "react";
import {
  Button,
  TextField,
  styled,
  Box,
  Typography,
  Card,
} from "@mui/material";
import { Link } from "react-router-dom";
import { signupUser } from "../Service/api";
import { useNavigate } from "react-router-dom";

const Box1 = styled(Box)`
    width: 50%;
    margin: 5% auto 0 auto;
    padding: 30px 40px ;
    display: flex;
    flex-direction: column;
    border: 2px solid grey;
    border-radius: 20px;
    box-shadow: 20px 20px 10px rgba(0, 0, 0, 0.3);
    & > div {
        margin: 20px 0 10px 0;
`;

function SignUp(props) {
  const initialvalue = { name: "", email: "", password: "" };
  const [Values, setValues] = useState(initialvalue);

  const navigate = useNavigate();

  const handleChange = (e) => {
    setValues({ ...Values, [e.target.name]: e.target.value });
  };

  const handleClick = async () => {
    const response = await signupUser(Values);
    // console.log(response.data.token)
    if (response.data.msg === "User SuccessFully SignUp") {
    localStorage.setItem("token", response.data.token);
      navigate("/");
    }
  };

  return (
    <Box1>
      <Typography variant="h3">SignUp Page</Typography>
      <TextField
        variant="outlined"
        label="UserName"
        name="name"
        onChange={handleChange}
      />
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
        Sign-Up
      </Button>
      <span>
        <h2>
          Already have account?<Link to="../"> login</Link>
        </h2>
      </span>
    </Box1>
  );
}

export default SignUp;
