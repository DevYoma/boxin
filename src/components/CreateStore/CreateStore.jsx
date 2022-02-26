import React, { useEffect, useState } from 'react';
import './CreateStore.css';
import { Link } from 'react-router-dom'
import TextField from '@mui/material/TextField';
import axios from 'axios';


const CreateStore = () => {

    const baseURL = "https://api.boxin.ng/api/v1/store/get-banks/"
    const [banks, setBanks] = useState([])

    useEffect(() => {
        // console.log(object);
        const getBanksFromPayStack = async () => {
            axios.get(`${baseURL}`)
            .then(res => setBanks([...banks, res.data.list_of_banks]))
        }

        getBanksFromPayStack();
    }, [])

    // array of an array of
    const mappedBanks = banks[0]?.map(bank => {
        console.log(bank.name)
        return (
            
            <p key={bank.name}>{bank.name}</p>
        )
    })
    console.log(banks);

    return ( 
        <div className="settingCom">
        <div className="settingCom__head">
            <h1>Create Store</h1>

            <div>
                {/* {mappedBanks} */}
            </div>

            <div className="settinCom__link">
                <Link to={'#'}>BUSINESS INFO</Link>
                <Link to={'#'}>E-COMMERCE</Link>
            </div>
        </div>

        <div className="settingCom__main">
            <div className='row'>
                <TextField 
                    id="standard-basic" 
                    label="Website Name" 
                    variant="standard"
                    // defaultValue={storeDetails.store_domain}
                    className="settingCom__input"
                />

                {/* <button id="setting__button">
                    Change
                </button> */}
            </div>

            <div>
            <TextField 
                id="outlined-basic" 
                label="Business Name" 
                // defaultValue={storeDetails.store_name}
                variant="outlined"
                className="width"
            />
            </div>

            <div>
                <TextField
                    id="outlined-multiline-static"
                    label="Describe your business"
                    multiline
                    rows={4}
                    // defaultValue={storeDetails.store_description}
                    className="width"
                />
            </div>

            <hr />

            <hr />

            <div className="settingCom__location">
                <div className="settingCom__locationDetails">
                 
                    <div>
                        <p>BUSINESS ADDRESS</p>
                        <TextField 
                            id="outlined-basic" 
                            label="Business Address" 
                            variant="outlined"
                            className="width"
                        />
                    </div>

                    <div className='row'>
                        <TextField 
                            id="outlined-basic" 
                            label="City" 
                            variant="outlined"
                        />

                         <TextField 
                            id="outlined-basic" 
                            label="State" 
                            variant="outlined"
                        />
                    </div>

                    <hr />
                </div>
            </div>  

            <div className="settingCom__location">
                <div className="settingCom__locationDetails">
                 
                    <div>
                        <p>BANK DETAILS</p> <br />

                        <TextField 
                            id="outlined-basic" 
                            label="Bank Account" 
                            variant="outlined"
                            className="width"
                        />
                    </div>

                    <div className='row'>
                        <TextField 
                            id="outlined-basic" 
                            label="City" 
                            variant="outlined"
                        />

                         <TextField 
                            id="outlined-basic" 
                            label="State" 
                            variant="outlined"
                        />
                    </div>

                    <hr />
                </div>
            </div>  

            <button 
                // onClick={submit}
                className="settingCom__saveChanges"
            >
                Create Store
            </button>

        </div>

    </div>
     );
}
 
export default CreateStore;