import * as React from "react";
import { useState, useEffect } from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
// import Link from '@mui/material/Link';
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import LoadingButton from "@mui/lab/LoadingButton";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { Link, useHistory } from "react-router-dom";
import "./SignUp.css";
import axios from "axios";

const theme = createTheme();

export default function SignUp() {
  const [userDetails, setUserDetails] = useState({
    // country: "",
    email: "",
    lastname: "",
    firstname: "",
    phone: "",
    password: "",
  });

  const history = useHistory();

  const handleClick = (e) => {
    e.preventDefault();
    // history.push('/signin')

    // if(userDetails.password !== userDetails.verifypassword){
    //   alert("The Passwords do not match")
    //   return
    // }

    console.log(userDetails);

    const postToDB = async () => {
      axios
        .post(`${baseURL}/auth/users/`, userDetails)
        // .then(res => res.json())
        .then((res) => {
          console.log(res.data);
          history.push("/verifytoken");
        })
        .catch((err) => {
          console.log(err);
          alert("Please fill all required fields");
        });
    };

    postToDB();

    // fetch('​/api​/v1​/auth​/users​/').

    setUserDetails({
      // country: "",
      email: "",
      firstname: "",
      lastname: "",
      phone: "",
      password: "",
    });

    // history.push('/verifytoken')
  };

  const handleChange = (event) => {
    setUserDetails((prevUserDetails) => {
      return {
        ...prevUserDetails,
        [event.target.name]: event.target.value,
      };
    });
  };

  const baseURL = "https://api.boxin.ng/api/v1";

  useEffect(() => {
    // const postToDB = async () => {
    //   axios.post(`${baseURL}/auth/users/`, userDetails)
    //   // .then(res => res.json())
    //   .then(res => {console.log(res.data)})
    //   .catch(err => {console.log(err)})
    // }
    // postToDB()
  }, [userDetails]);

  const handleResendToken = () => {
    history.push("/resendtoken");
  };

  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="sm" className="container">
        {/* <CssBaseline /> */}
        <div className="signUp">
          <h1>Sign Up</h1>
          <p>
            Already have an account?{" "}
            <Link
              to={"/signin"}
              style={{ color: "#4270b7", textDecoration: "none" }}
            >
              Sign In
            </Link>
          </p>

          <form className="signUp__form">
            {/* <div>
              <TextField
                name="country"
                required
                fullWidth
                id="country"
                label="Country"
                value={userDetails.country}
                onChange={handleChange}
              />
            </div> */}
            <div className="row">
              <div>
                <TextField
                  // autoComplete="given-name"
                  name="firstname"
                  required
                  fullWidth
                  id="firstName"
                  label="Last Name"
                  // autoFocus
                  value={userDetails.firstname}
                  onChange={handleChange}
                />
              </div>

              <div>
                <TextField
                  // autoComplete="given-name"
                  name="lastname"
                  required
                  fullWidth
                  id="lastName"
                  label="First Name"
                  // autoFocus
                  value={userDetails.lastname}
                  onChange={handleChange}
                />
              </div>
            </div>
            <div className="row">
              <div>
                <TextField
                  // autoComplete="given-name"
                  name="email"
                  required
                  fullWidth
                  id="email"
                  label="Email Address"
                  // autoFocus
                  value={userDetails.email}
                  onChange={handleChange}
                />
              </div>

              <div>
                <TextField
                  className="col"
                  // autoComplete="given-name"
                  name="phone"
                  required
                  fullWidth
                  id="phone"
                  label="Phone Number"
                  // autoFocus
                  value={userDetails.phone}
                  onChange={handleChange}
                />
              </div>
            </div>

            <div className="row">
              <TextField
                // autoComplete="given-name"
                name="password"
                required
                fullWidth
                id="password"
                label="Password"
                // autoFocus
                value={userDetails.password}
                onChange={handleChange}
                type="password"
              />

              {/* <TextField
                // autoComplete="given-name"
                name="verifypassword"
                required
                fullWidth
                id="verifypassword"
                label="Verify Password"
                value={userDetails.verifypassword}
                // autoFocus
                onChange={handleChange}
                type="password"

              /> */}
            </div>

            <p className="form__terms">
              By clicking create account, I represent, I have read, understood,
              and agreed to the sendbox's{" "}
              <span className="red">Privacy Policy</span> and{" "}
              <span className="red">Terms of Service</span>
            </p>
            <button onClick={handleClick} className="form__button">
              Create Account
            </button>
            <LoadingButton
              className="form__resend__token"
              onClick={handleResendToken}
              variant="outlined"
            >
              Resend Token ?
            </LoadingButton>
          </form>
        </div>
      </Container>
    </ThemeProvider>
  );
}
{
  /* <Copyright sx={{ mt: 5 }} /> */
}
