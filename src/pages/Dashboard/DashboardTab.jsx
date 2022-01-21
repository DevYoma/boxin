import React from 'react';
import './DashboardTab.css'
import { Link } from 'react-router-dom';
import { useStateValue } from '../../context/StateProvider';
import { useNavigate } from 'react-router-dom';


const DashboardTab = () => {
    let navigate = useNavigate()
    const [{user}, dispatch] = useStateValue()


    const handleLogout = () => {
        if( confirm("Are you sure you want to log out")){
            dispatch({
                type: "REMOVE_USER",
                item: {
                    user: null
                }
            })
            navigate('/signin')
        }
        
    }

    const mainTabs = [
        {
            id: 1,
            name: "Dashboard", 
            link: '/dashboard'
        },
        {
            id: 2,
            name: "View my Store",
            link: '/view-my-store'
        },
        {
            id: 3, 
            name: "Settings",
            link: '/setting'
        }
    ]

    const shippingTabs = [
        {
            id: 1,
            name: "Deliveries", 
            link: '/deliveries'
        },
        {
            id: 2,
            name: "Batch",
            link: '/batch'
        },
    ]

    const paymentTabs = [
        {
            id: 1,
            name: "Topups", 
            link: '/topup'
        },
        {
            id: 2,
            name: "Transfers",
            link: '/transfers'
        },
        {
            id: 3,
            name: "Requests",
            link: '/request'
        },
        {
            id: 4,
            name: "Transactions",
            link: '/transactions'
        }
    ]

    const eCommerce = [
        {
            id: 1,
            name: "Products", 
            link: '/products'
        },
        {
            id: 2,
            name: "Orders",
            link: '/orders'
        },
        {
            id: 3,
            name: "Customers",
            link: '/customers'
        }
    ]

    const mainTabsMapping = (
        mainTabs.map(mainItem => <p key={mainItem.id}>
            <Link className='dashboardTab__link'  to={`${mainItem.link}`}>{mainItem.name}</Link>
        </p>)
    )

    const shippingTabsMapping = (
        shippingTabs.map(shippingItem => <p key={shippingItem.id}>
            <Link className='dashboardTab__link'  to={`${shippingItem.link}`}>{shippingItem.name}</Link>
        </p>)
    )

    const paymentTabsMapping = (
        paymentTabs.map(paymentItem => <p key={paymentItem.id}>
            <Link className='dashboardTab__link'  to={`${paymentItem.link}`}>{paymentItem.name}</Link>
        </p>)
    )

    const eCommerceMapping = (
        eCommerce.map(eCommerceItem => <p key={eCommerceItem.id}>
            <Link className='dashboardTab__link'  to={`${eCommerceItem.id}`}>{eCommerceItem.name}</Link>
        </p>)
    )
    
    return ( 
        <div className="dashboardTab">
            <div>
                {mainTabsMapping}
            </div>

            <div>
                <small>Shipping</small>
                {shippingTabsMapping}
            </div>

            <div>
                <small>Payment</small>
                {paymentTabsMapping}
            </div>

            <div>
                <small>Ecommerce</small>
                {eCommerceMapping}
            </div>

            {/* <div className='dashboardTab__logout'> */}
                <button onClick={handleLogout}>
                    Logout
                </button>
            {/* </div> */}
        </div>
     );
}
 
export default DashboardTab;