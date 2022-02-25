import React, { useState } from 'react';
import './VerifyComponent.css';
import TextField from '@mui/material/TextField';
import axios from 'axios'
import { useHistory } from 'react-router-dom';

const Verify = () => {  
    const history = useHistory();
    const [tokenData, setTokenData] = useState({
        token: ""
    })

    const [verifyToLogin, setVerifyToLogin] = useState(false);
   
    const handleSubmit = (e)  => {
        e.preventDefault();
        console.log(tokenData.token)
        const baseURL = "https://api.boxin.ng/api/v1"


        const postTokenToDB = async () =>{
            axios.post(`${baseURL}/auth/users/verify-token/`, tokenData)    
            .then(res => {
                console.log(res.data)
                if (res.data.valid) {
                    history.push('/signin')
                } else {
                    alert('Token is invalid')
                }
            })
            // .then(setVerifyToLogin(true)) //this should be true...
            .catch(err => {
                console.log(err)
                alert('Token is invalid')
            })
            // console.log(verifyToLogin);

        }

        postTokenToDB()
      
    }

    const handleChange = (event) => {
        setTokenData(prevData => {
            return {
                ...prevData,
                [event.target.name]: event.target.value
            }
        })
    }

    return ( 
        <div className='verifyComponent'>
            <h1>A token has been sent to your email</h1>

            <form onSubmit={handleSubmit}>
                <TextField
                    name="token"
                    required
                    fullWidth
                    id="verifytoken"
                    label="Verify-Token"
                    value={tokenData.token}
                    onChange={handleChange}
                /> <br />

                <button className='verifyComponent__Button'>Submit</button>
            </form>
        </div>
     );
}
 
export default Verify;  