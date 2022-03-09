import * as React from "react";
import { useState, useEffect } from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputAdornment from "@mui/material/InputAdornment";
import IconButton from "@mui/material/IconButton";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
// import Link from '@mui/material/Link';
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import LoadingButton from "@mui/lab/LoadingButton";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { Link, useHistory } from "react-router-dom";
import "./SignUp.css";
import axios from "axios";

const theme = createTheme();

export default function SignUp() {
  const baseURL = "https://api.boxin.ng/api/v1";
  const [userDetails, setUserDetails] = useState({
    // country: "",
    email: "",
    lastname: "",
    firstname: "",
    phone: "",
    password: "",
  });

  const [showpass, setShowPass] = React.useState(false);

  const history = useHistory();

  const handleClick = async (e) => {
    try {
      e.preventDefault();
      const urlSearchParams = new URLSearchParams(window.location.search);
      const params = Object.fromEntries(urlSearchParams.entries());
      const response = await axios.post(`${baseURL}/auth/users/`, {
        ...userDetails,
        referred_by: params?.uid,
      });
      history.push("/verifytoken");
      setUserDetails({
        // country: "",
        email: "",
        firstname: "",
        lastname: "",
        phone: "",
        password: "",
      });
      console.warn("signup action", response.data);
    } catch (error) {
      alert("Failed to sign up, please check your input and try again");
    }
  };

  const handleChange = (event) => {
    setUserDetails((prevUserDetails) => {
      return {
        ...prevUserDetails,
        [event.target.name]: event.target.value,
      };
    });
  };

  const handleClickShowPassword = () => {
    setShowPass(!showpass);
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

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
              <OutlinedInput
                // autoComplete="given-name"
                name="password"
                placeholder="Password"
                required
                fullWidth
                id="password"
                endAdornment={
                  <InputAdornment position="end">
                    <IconButton
                      aria-label="toggle password visibility"
                      onClick={handleClickShowPassword}
                      onMouseDown={handleMouseDownPassword}
                      edge="end"
                    >
                      {showpass ? <VisibilityOff /> : <Visibility />}
                    </IconButton>
                  </InputAdornment>
                }
                // autoFocus
                value={userDetails.password}
                onChange={handleChange}
                type={showpass ? "text" : "password"}
                //label="Password"
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
