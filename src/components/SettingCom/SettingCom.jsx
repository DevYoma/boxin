import React from 'react';
import './SettingCom.css'
import { Link } from 'react-router-dom';
import Button from '../Button/Button'
import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem'
import axios from 'axios'

const SettingCom = () => {

      const [storeDetails, setStoreDetails] = React.useState({
        id: "",
        store_domain: "",
        store_name: "",
        store_description: "",
        store_shop_number: 0,
        store_street_name: "",
        store_city: "",
        store_state: "",
        store_postal_code: "",
        store_escrow: "",
        primary_store_color: "",
        secondary_store_color: "",
        next_pickup_date: "2022-02-21",
        customer_pay_delivery_fee: true,
        user: null
    })

   React.useEffect(() => {
    let token = JSON.parse(localStorage.getItem('token'))
    let authorizationHeader = `Bearer ${token}`
    // let history = useHistory()

    // console.log(token)

    const baseURL = 'https://api.boxin.ng/api/v1/store'

    const getStoreDetails = async () => {
        axios.get(`${baseURL}/get-store/`, {headers: {Authorization: authorizationHeader}})
        .then(res => {
            console.log(res.data)
            setStoreDetails(res.data.store_details)
        })
        .catch(err => {
            console.log(err)
        })
    }    
        
    if (storeDetails.user === null) {
        getStoreDetails()
    }
   }, [storeDetails])

        const handleChange = (e) => {
            setCurrency(e.target.value);
        };

        const submit = (e) => {
            e.preventDefault()
            alert("working")
        }

    return ( 
        <div className="settingCom">
            <div className="settingCom__head">
                <h1>Settings</h1>

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
                        defaultValue={storeDetails.store_domain}
                        className="settingCom__input"
                    />

                    <button id="setting__button">
                        Change
                    </button>
                </div>

                <div>
                <TextField 
                    id="outlined-basic" 
                    label="Business Name" 
                    defaultValue={storeDetails.store_name}
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
                        defaultValue={storeDetails.store_description}
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

                <button 
                    onClick={submit}
                    className="settingCom__saveChanges"
                >
                    Save changes
                </button>

            </div>

        </div>
     );
}
 
export default SettingCom;