import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
// import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { Link, useHistory } from 'react-router-dom';
import './SignUp.css';

function Copyright(props) {
  return (
    <Typography variant="body2" color="text.secondary" align="center" {...props}>
      {'Copyright © '}
      <Link color="inherit" href="https://mui.com/">
        Your Website
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const theme = createTheme();

export default function SignUp() {
  const history = useHistory();

  const handleClick = (e) => {
    e.preventDefault()
    alert("working")
    history.push('/signin')
  }

  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="sm" className="container">
        {/* <CssBaseline /> */}
        <div className="signUp">
          <h1>Sign Up</h1>
          <p>Already have an account? <Link to={'/signin'} style={{ color: "red", textDecoration: "none" }}>Sign In</Link></p>

          <form className="signUp__form">
            <div>
              <TextField
                // fullWidth    
                autoComplete="given-name"
                name="country"
                required
                fullWidth
                id="country"
                label="Country"
                autoFocus
              />
            </div>
            <div>
              <TextField
                autoComplete="given-name"
                name="full name"
                required
                fullWidth
                id="fullname"
                label="First and Last Name"
                autoFocus
              />
            </div>
            <div className='row'>

              <div>
                <TextField
                  autoComplete="given-name"
                  name="email"
                  required
                  fullWidth
                  id="email"
                  label="Email Address"
                  autoFocus
                />
              </div>

              <div>
                <TextField
                  className='col'
                  autoComplete="given-name"
                  name="phone"
                  required
                  fullWidth
                  id="phone"
                  label="Phone Number"
                  autoFocus
                />

              </div>

            </div>

            <div className="row">
              <TextField
                autoComplete="given-name"
                name="password"
                required
                fullWidth
                id="password"
                label="Password"
                autoFocus
              />

              <TextField
                autoComplete="given-name"
                name="verifypassword"
                required
                fullWidth
                id="verifypassword"
                label="Verify Password"
                autoFocus
              />

            </div>

            <p className="form__terms">
              By clicking create account, I represent, I have  read, understood, and agreed to the sendbox's <span className="red">Privacy Policy</span> and <span className="red">Terms of Service</span>
            </p>
            <button onClick={handleClick} className='form__button'>
              Create Account
            </button>

          </form>
        </div>
      </Container>
    </ThemeProvider>
  );
}
{/* <Copyright sx={{ mt: 5 }} /> */}