import React from 'react';
import './UserDashboard.css'
import UserDashboardButton from '../../components/UserDashboardButton/UserDashboardButton';
import Paper from '@mui/material/Paper';
import DayButton from '../DayButton/DayButton';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
  } from 'chart.js';
  import { Bar } from 'react-chartjs-2';
  import faker from 'faker';

  
ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
  );

  
export const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
      },
      title: {
        display: true,
        text: 'Chart.js Bar Chart',
      },
    },
  };
  
  const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];
  
  export const data = {
    labels,
    datasets: [
      {
        label: 'Dataset 1',
        data: labels.map(() => faker.datatype.number({ min: 0, max: 1000 })),
        // backgroundColor: 'rgba(255, 99, 132, 0.5)',
        backgroundColor: "#4270b7"
      },
      {
        label: 'Dataset 2',
        data: labels.map(() => faker.datatype.number({ min: 0, max: 1000 })),
        backgroundColor: 'rgba(53, 162, 235, 0.5)',
      },
    ],
  };

const UserDashboard = () => {
    const greeting = () => {
        const date = new Date()
        if(date.getHours() < 12){
            return "Morning"
        }
        else if (date.getHours() >=  12 && date.getHours() < 16){
            return "Afternoon"
        }
        else{
            return "Evening"
        }
    }

    return ( 
        <div className="userDashboard">
            <div className="userDashboard__head">
                <h1>Good {greeting()}, Tobi </h1>

                <UserDashboardButton name="TRANSFER FUNDS" background="white" color="black"/>
                <UserDashboardButton name="FUND ACCOUNT" background="white" color="black"/>
                <UserDashboardButton name="REQUEST DELIVERY" background="#091E42"/>
            </div>

            <div className="userDashboard__details">
                <Paper elevation={3} className='paper'>
                    <small>FUNDS</small>
                    <div className="userDashboard__amount color">500,000.00 <small>NGN</small></div>
                </Paper>

                <Paper elevation={3} className='paper'>
                    <small>ESCROW</small>
                    <div className="userDashboard__amount">50,000.00 <small>NGN</small></div>
                </Paper>

                <Paper elevation={3} className='paper'>
                    <small>CREDITS</small>
                    <div className="userDashboard__amount">10,000.00 <small>NGN</small></div>
                </Paper>

                <Paper elevation={3} className='paper'>
                    <small>YOUR ACCOUNT NUMBER</small>
                    <div className="userDashboard__amount">7052102133<small>WEMA</small></div>
                </Paper>
                
            </div>

            <div className="userDashboard__daySorting">
                {/* <DayButton name="TODAY" background="white" color="black"/> */}
                <DayButton name="THIS WEEK" background="white" color="black"/>
                <DayButton name="THIS MONTH" background="white" color="black"/>
                {/* <DayButton name="THIS QUATER" background="white" color="black"/> */}
                {/* <DayButton name="THIS YEAR" background="white" color="black"/> */}
            </div>

            <div className="userDashboard__deliveries">
                <div className="userDashboard__deliveriesMain">
                    <h4>DELIVERY SPEND</h4>
                    <p>Total deliveries within the specified period </p>

                    <div>
                        <Bar options={options} data={data} />
                    </div>
                </div>

                <div className="userDashboard__deliveriesSide">
                    <div className="top">
                        <h4>DELIVERY SPEND</h4>
                        <h2 className='color'>&#8358;100,000.00</h2>
                        <small>This is how much you've spent on deliveries in the specified period</small>
                    </div>

                    <hr />

                    <div className="bottom">
                        <h4>E-COMMERCE SALES</h4>
                        <h2>&#8358;1,000,000.00</h2>
                        <small>This is how much you've spent on deliveries in the specified period</small>
                    </div>

                </div>
            </div> 

            <div className="userDashboard__bottom">
                <div className="userDashboard__orders box">
                    <h4>ORDERS</h4>
                    <p>Total orders received within the specified period</p>
                    <p className="amount">0</p>
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