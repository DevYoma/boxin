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
                    <h4>DELIVERY SPEND</h4>
                    <p>Total deliveries within the specified period </p>
                </div>

                <div className="userDashboard__deliveriesSide">
                    <div className="top">
                        <h4>DELIVERY SPEND</h4>
                        <h2>&#8358;0.00</h2>
                        <small>This is how much you've spent on deliveries in the specified period</small>
                    </div>

                    <hr />

                    <div className="bottom">
                        <h4>E-COMMERCE SALES</h4>
                        <h2>&#8358;0.00</h2>
                        <small>This is how much you've spent on deliveries in the specified period</small>
                    </div>

                </div>
            </div> 

            <div className="userDashboard__bottom">
                <div className="userDashboard__orders box">
                    <h4>ORDERS</h4>
                    <p>Total orders received within the specified period</p>
                    <p className="amount">&#8358;0.00</p>
                </div>
                <div className="userDashboard__revenue box">
                    <h4>REVENUE</h4>
                    <p>Revenue generated within the specified period</p>
                    <p className="amount">&#8358;0.00</p>
                </div>
                <div className="userDashboard__customers box">
                    <h4>CUSTOMERS</h4>
                    <p>Unique customers within the specified period</p>
                    <p className="no_of_customers">0</p>
                </div>
            </div>
        </div>
     );
}
 
export default UserDashboard;