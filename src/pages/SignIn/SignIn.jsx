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
// import { useStateValue } from '../context/StateProvider'
import { useStateValue } from '../../context/StateProvider'
// import './SignUp.css';

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

export default function SignIn() {
  const [{}, dispatch] = useStateValue()

  let history = useHistory()
  
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch({
      type: "ADD_USER",
      item: {
        user: true 
      }
    })
    // navigate('/app')
    history.push('/app')
  }

  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="sm" className="container">
        {/* <CssBaseline /> */}
        <div className="signUp">
          <h1>Sign In</h1>
          <p>New user? <Link to={'/'} style={{ color: "red", textDecoration: "none" }}>Create an account</Link></p>

          <form className="signUp__form">
            <div>
              <TextField
                // fullWidth    
                autoComplete="given-name"
                name="userName"
                required
                fullWidth
                id="userName"
                label="UserName or Email"
                autoFocus
              />
            </div>
            
            <div>
              <TextField
                // fullWidth    
                autoComplete="given-name"
                name="password"
                required
                fullWidth
                id="password"
                label="Password"
                autoFocus
              />
            </div>
            
            <small className="forgot__password red">
                <Link to="/">
                    Forgot Password?    
                </Link>
            </small>

            <p className="form__terms">
              By clicking create account, I represent, I have  read, understood, and agreed to the sendbox's <span className="red">Privacy Policy</span> and <span className="red">Terms of Service</span>
            </p>
            <button 
              onClick={handleSubmit}
              className='form__button'>
              Log In
            </button>

          </form>
        </div>
      </Container>
    </ThemeProvider>
  );
}
{/* <Copyright sx={{ mt: 5 }} /> */}