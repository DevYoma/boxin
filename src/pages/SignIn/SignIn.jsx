import * as React from 'react';
import { useState } from 'react'
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
import axios from 'axios';

const theme = createTheme();

export default function SignIn() {
  const [{}, dispatch] = useStateValue()
  const [userData, setUserData] = useState({
    email: "",
    password: ""
  })

  const [signInSuccess, setSignInSuccess] = useState(false)
  const [error, setError] = useState("")

  const baseURL = "https://api.boxin.ng/api/v1"


  let history = useHistory()
  
  const handleSubmit = (e) => {
    e.preventDefault();
    // dispatch({
    //   type: "ADD_USER",
    //   item: {
    //     user: true 
    //   }
    // })
    // history.push('/app')
    const postLoginDataToDB = async => {  
      axios.post(`${baseURL}/auth/login/`,userData)
      .then(res => console.log(res.data))
      .then(setSignInSuccess(true))
      .catch(err => console.log(err))
    }

    postLoginDataToDB() 

    // setSignInSuccess ?  history.push('/app') : history.push('/signin')
    if(signInSuccess){
      history.push('/app')
    }
    else{
      alert("Error")
    }

    setUserData({
      email: "",
      password: ""
    })

  }

  const handleChange = e => {
    setUserData(prevUserData => {
      return{
        ...prevUserData,
        [e.target.name]: e.target.value
      }
    })
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
                autoComplete="given-name"
                name="email"
                required
                fullWidth
                id="email"
                label="Email"
                onChange={handleChange}
              />
            </div>
            
            <div>
              <TextField
                autoComplete="given-name"
                name="password"
                required
                fullWidth
                id="password"
                label="Password"
                autoFocus
                onChange={handleChange}
                type="password"
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