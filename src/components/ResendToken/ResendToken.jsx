import React, { useState } from 'react';
import './ResendToken.css';
import TextField from '@mui/material/TextField';
import axios from 'axios';
import { useHistory } from 'react-router-dom';


const ResendToken = () => {
    const history = useHistory()
    const [emailResend, setEmailResend] = useState({
        email: ""
    })
    // const [loaded,setLoaded] = useState(false)
    const [error, setError] = useState("")
    
    const baseURL = "https://api.boxin.ng/api/v1"

    const handleChange = (event) => {
        setEmailResend(prevSetEmailResend => {
            return {
                ...prevSetEmailResend,
                [event.target.name]: event.target.value
            }
        })

    }

    const handleResendButtonClick = (e) =>{
        e.preventDefault()
        console.log(emailResend);

        // the async here is so so weird
        const postResentEmailTokenToDB = async => {
            axios.post(`${baseURL}/auth/users/resend-token/`, emailResend)
            .then(res => {
                console.log(res.data)
                if (res.data.success) {
                    history.push('/verifytoken')
                    alert(res.data.message)
                } else {
                    alert('You are verified already')
                    history.push('/signin')
                }
                
            })
            // .then(setLoaded(true))
            .catch(err => {
                console.log(err)
                setError('User with this email does not exist')
                alert('User with this email does not exist')
            })
            
            // res.data.success ? console.log("Success") : console.log('Failure');
            // console.log(loaded);
        }

        postResentEmailTokenToDB()
        // console.log(loaded)
        // loaded ? history.push('/verifytoken') : null;

    }

    // console.log(loaded);

    return ( 
        <div className="resendToken">
            <h1>I am the send token component</h1>

            <form>
                <TextField
                    name="email"
                    required
                    fullWidth
                    id="email"
                    label="Email Address"
                    // autoFocus
                    value={emailResend.email}
                    onChange={handleChange}
                    />
                </form>

                <button onClick={handleResendButtonClick}>Resend Token</button>
        </div>
     );
}
 
export default ResendToken;