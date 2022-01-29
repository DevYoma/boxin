import React from 'react';
import './UserDashboard.css'
import UserDashboardButton from '../../components/UserDashboardButton/UserDashboardButton';
import Paper from '@mui/material/Paper';
import DayButton from '../DayButton/DayButton';

const UserDashboard = () => {
    return ( 
        <div className="userDashboard">
            <div className="userDashboard__head">
                <h1>Dashboard</h1>

                <UserDashboardButton name="TRANSFER FUNDS" background="white" color="black"/>
                <UserDashboardButton name="FUND ACCOUNT" background="white" color="black"/>
                <UserDashboardButton name="REQUEST DELIVERY" background="#091E42"/>
            </div>

            <div className="userDashboard__details">
                <Paper elevation={3} className='paper'>
                    <small>FUNDS</small>
                    <div className="userDashboard__amount red">0.00 <small>NGN</small></div>
                </Paper>

                <Paper elevation={3} className='paper'>
                    <small>ESCROW</small>
                    <div className="userDashboard__amount">0.00 <small>NGN</small></div>
                </Paper>

                <Paper elevation={3} className='paper'>
                    <small>CREDITS</small>
                    <div className="userDashboard__amount">0.00 <small>NGN</small></div>
                </Paper>

                <Paper elevation={3} className='paper'>
                    <small>YOUR ACCOUNT NUMBER</small>
                    <div className="userDashboard__amount">7052102133<small>WEMA</small></div>
                </Paper>
                
            </div>

            <div className="userDashboard__daySorting">
                <DayButton name="TODAY" background="white" color="black"/>
                <DayButton name="THIS WEEK" background="white" color="black"/>
                <DayButton name="THIS MONTH" background="white" color="black"/>
                <DayButton name="THIS QUATER" background="white" color="black"/>
                <DayButton name="THIS YEAR" background="white" color="black"/>
            </div>

            <div className="userDashboard__deliveries">
                <div className="userDashboard__deliveriesMain">
                    <h4>Deliveries</h4>
                    <p>Total deliveries within the specified period </p>
                </div>

                <div className="userDashboard__deliveriesSide">
                    <div className="top">
                        <h4>Delivery Spend</h4>
                        <h2>&#8358;0.00</h2>
                        <small>This is how much you've spent on deliveries in the specified period</small>
                    </div>

                    <hr />

                    <div className="bottom">
                        <h4>Delivery Spend</h4>
                        <h2>&#8358;0.00</h2>
                        <small>This is how much you've spent on deliveries in the specified period</small>
                    </div>

                </div>
            </div> 

            <div className="userDashboard__bottom">
                <div className="userDashboard__orders box">asdfasdf</div>
                <div className="userDashboard__revenue box">asdf</div>
                <div className="userDashboard__customers box">sdf</div>
            </div>
        </div>
     );
}
 
export default UserDashboard;