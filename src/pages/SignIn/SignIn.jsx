import * as React from "react";
import { useState } from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
// import TextField from '@mui/material/TextField';
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
// import Link from '@mui/material/Link';
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { Link, useHistory } from "react-router-dom";
import jwt_decode from "jwt-decode";
// import { useStateValue } from '../context/StateProvider'
// import { useStateValue } from '../../context/StateProvider'
// import './SignUp.css';
import axios from "axios";

const theme = createTheme();

export default function SignIn() {
  // const [{}, dispatch] = useStateValue()
  let history = useHistory();
  const [userData, setUserData] = useState({
    email: "",
    password: "",
  });

  const [signInSuccess, setSignInSuccess] = useState(false);
  const [error, setError] = useState("");
  const [loginAccessToken, setLoginAccessToken] = useState("");

  const baseURL = "https://api.boxin.ng/api/v1";

  const handleSubmit = (e) => {
    e.preventDefault();
    const postLoginDataToDB = async () => {
      // console.log(userData)
      axios
        .post(`${baseURL}/auth/login/`, userData)
        .then((res) => {
          let decoded = jwt_decode(res?.data?.access);
          console.warn("postLoginDataToDB", res);
          setSignInSuccess(true);
          setLoginAccessToken(res?.data?.access);
          localStorage.setItem("token", JSON.stringify(res?.data?.access));
          if (decoded?.has_store) {
            localStorage.setItem("has_store", decoded?.has_store);
            history.replace("/app");
          } else {
            history.replace("/createstore");
          }
        })
        .catch((err) => {
          console.log(err);
          alert("Unable to login, please try again");
        });
    };

    postLoginDataToDB();

    // signInSuccess ? history.push('/app') : null;

    // if(loginAccessToken){
    //   console.log('Present')
    // }
    // else{
    //   console.log("Not Present")
    //   return ==> this is what will happen when the user is not verified...
    // }

    setUserData({
      email: "",
      passsword: "",
    });

    // history.push('/app')
  };

  const handleChange = (e) => {
    setUserData((prevUserData) => {
      return {
        ...prevUserData,
        [e.target.name]: e.target.value,
      };
    });
  };

  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="sm" className="container">
        {/* <CssBaseline /> */}
        <div className="signUp">
          <h1>Sign In</h1>
          <p>
            New user?{" "}
            <Link to={"/"} style={{ color: "#4270b7", textDecoration: "none" }}>
              Create an account
            </Link>
          </p>

          <form className="signUp__form">
            <div>
              <TextField
                name="email"
                required
                fullWidth
                id="email"
                label="Email"
                onChange={handleChange}
                autoFocus
              />
            </div>

            <div>
              <TextField
                name="password"
                required
                fullWidth
                id="password"
                label="Password"
                onChange={handleChange}
                type="password"
              />
            </div>

            <small className="forgot__password red">
              <Link to="/">Forgot Password?</Link>
            </small>

            <p className="form__terms">
              By clicking create account, I represent, I have read, understood,
              and agreed to the sendbox's{" "}
              <span className="red">Privacy Policy</span> and{" "}
              <span className="red">Terms of Service</span>
            </p>
            <button
              onClick={handleSubmit}
              type="submit"
              className="form__button"
            >
              Log In
            </button>
          </form>
        </div>
      </Container>
    </ThemeProvider>
  );
}
