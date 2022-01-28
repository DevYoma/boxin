import { TryRounded } from '@mui/icons-material';
import React, { useEffect } from 'react';
// import { useStateValue } from './context/StateProvider';
import { useStateValue } from '../../context/StateProvider';
import { BrowserRouter as Router, Route, Link, useHistory, Switch } from 'react-router-dom';
import DashboardTab from './DashboardTab';
import './Dashboard.css'
import Store from '../../components/Store/Store'
import SettingCom from '../../components/SettingCom/SettingCom'
import Deliveries from '../../components/Deliveries/Deliveries'
import BatchCom from '../../components/BatchCom/BatchCom'
import TopUps from '../../components/TopUps/TopUps'
import Transfers from '../../components/Transfers/Transfers'
import Request from '../../components/Requests/Request'
import Product from '../../components/Products/Product'
import Orders from '../../components/Orders/Orders'
import Customers from '../../components/Customers/Customers';
import Transactions from '../../components/Transactions/Transactions';
import UserDashboard from '../../components/UserDashboard/UserDashboard'

const Dashboard = () => {

    // let navigate = useNavigate()
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

    useEffect(() => {
        window.addEventListener("popstate", () => {
            history.go(1);
        });
    }, [])

  


    return ( 
        <div className="dashboard">
            <Router>
                <div className="dashboard__tab">
                    <DashboardTab />
                </div>

                <div className="dashboard__main">
                    <Switch>
                        <Route path='/app/dashboard'>
                            {/* <h1>Dashboard</h1> */}
                            <UserDashboard />
                        </Route>
                        <Route path="/app/view-my-store">
                            <Store />
                        </Route>

                        <Route path="/app/setting">
                            <SettingCom />
                        </Route>

                        <Route path='/app/deliveries'>
                            <Deliveries />
                        </Route>
                        
                        <Route path='/app/batch'>
                            <BatchCom />
                        </Route>

                        {/* topups path not working */}
                        <Route path='/app/topup'>
                            <TopUps />
                        </Route>

                        <Route path='/app/transfers'>
                            <Transfers />
                        </Route>

                        <Route path='/app/request'>
                            <Request />
                        </Route>

                        <Route path='/app/products'>
                            <Product />
                        </Route>

                        <Route path='/app/orders'>
                            <Orders />
                        </Route>

                        <Route path='/app/customers'>
                            <Customers />
                        </Route>

                        <Route path='/app/transactions'>
                            <Transactions />
                        </Route>

                    </Switch>
                    {/* </Router> */}

                </div>
            </Router>
        </div>
     );
}
 
export default Dashboard;
