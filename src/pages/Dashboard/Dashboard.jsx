import { TryRounded } from '@mui/icons-material';
import React, { useEffect } from 'react';
// import { useStateValue } from './context/StateProvider';
import { useStateValue } from '../../context/StateProvider';
import { BrowserRouter as Router, Routes, Route, Link, useNavigate } from 'react-router-dom';
import DashboardTab from './DashboardTab';
import './Dashboard.css'
import Store from '../../components/Store'


const Dashboard = () => {

    let navigate = useNavigate()
    const [{user}, dispatch] = useStateValue()
    console.log(user)
    
    // const [userState, setUserState] = useState(user)

    useEffect(() => {
    dispatch({
        type: "ADD_USER",
        item: {
            user: true
        }
    })
    }, user)

  


    return ( 
        <div className="dashboard">
                <div className="dashboard__tab">
                    <DashboardTab />
                </div>

                <div className="dashboard__main">
                    <h2>Other tab</h2>
                    <Link to={'yoma'}>Yoma</Link>
                </div>
        </div>
     );
}
 
export default Dashboard;