import React from 'react';
import './SettingCom.css'
import { Link } from 'react-router-dom';
import TextField from '@mui/material/TextField';
// import TextField from '@mui/material/TextField';
import Button from '../Button/Button'

const SettingCom = () => {

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
                        defaultValue="We sell all your perfumes"
                        className="width"
                    />
                </div>

                <hr />

                <div className="settingCom__category">
                    <p>WHAT CATEGORY BEST DECRIBES YOUR BUSINESS?</p>
                    <div className="settingCom__categoryButton">
                        <Button name="Wigs and Hair Extensions"/>                        
                        <Button name="EveryDay Essentials"/>                        
                        <Button name="Others"/>                        
                        <Button name="Cosmetics and SkinCare"/>                        
                        <Button name="Drinks and Beverage"/>                        
                        <Button name="Phones and Accessories"/>                        
                        <Button name="Food and Groceries"/>                        
                        <Button name="Clothing and Fashion"/>                        
                    </div>

                </div>

                <hr />

                <div className="settingCom__location">
                    <p>WHERE IS YOUR PRIMARY BUSINESS LOCATION</p>
                    <div className="settingCom__locationDetails">
                        <div>
                            <TextField 
                                id="outlined-basic" 
                                label="Business Name" 
                                variant="outlined"
                                className="width"
                            />
                        </div>
                    </div>
                </div>

            </div>

           
        </div>
     );
}
 
export default SettingCom;