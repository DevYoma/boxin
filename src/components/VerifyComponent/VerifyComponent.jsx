import React, { useState } from 'react';
import './VerifyComponent.css';
import TextField from '@mui/material/TextField';
import axios from 'axios'


const Verify = () => {  
    const [data, setData] = useState({
        token: ""
    })

   

    const handleSubmit = (e)  => {
        e.preventDefault();
        console.log(data.token)
        const baseURL = "https://api.boxin.ng/api/v1"


        const postTokenToDB = async () =>{
            axios.post(`${baseURL}/auth/token/verify/`, data)
            .then(res => console.log(res.data))
            .catch(err => console.log(err))
        }

        postTokenToDB()

        setData({
            token: ""
        })
    }

    const handleChange = (event) => {
        setData(prevData => {
            return {
                ...prevData,
                [event.target.name]: event.target.value
            }
        })
    }

    return ( 
        <div className='verifyComponent'>
            <h1>Verify Component</h1>

            <form onSubmit={handleSubmit}>
                <TextField
                    name="token"
                    required
                    fullWidth
                    id="verifytoken"
                    label="Verify-Token"
                    value={data.token}
                    onChange={handleChange}
                />

                <button>Submit</button>
            </form>
        </div>
     );
}
 
export default Verify;  