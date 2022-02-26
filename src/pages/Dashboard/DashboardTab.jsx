import React from 'react';
import  { useState, useEffect } from 'react'
import './DashboardTab.css'
import { Link } from 'react-router-dom';
import { useStateValue } from '../../context/StateProvider';
import { useHistory } from 'react-router-dom';
import axios from 'axios'
import { ProSidebar, SidebarHeader, SidebarFooter, SidebarContent } from 'react-pro-sidebar';
import 'react-pro-sidebar/dist/css/styles.css';


const DashboardTab = () => {
    const [toggled, setToggled] = useState(true)
    // let navigate = useNavigate()
    // const [{user}, dispatch] = useStateValue()
    const history = useHistory()

    const [storeDetails, setStoreDetails] = useState({
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

   useEffect(() => {
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
    // const handleLogout = () => {
    //     if( confirm("Are you sure you want to log out")){
    //         dispatch({
    //             type: "REMOVE_USER",
    //             item: {
    //                 user: null
    //             }
    //         })
    //         history.push('/signin')
    //         // navigate('/signin')
    //     }
        
    // }

    const mainTabs = [
        {
            id: 1,
            name: "Dashboard", 
            link: '/dashboard'
        },
        {
            id: 2, 
            name: "Settings",
            link: '/setting'
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
            link: '/deliveries'
        },
        {
            id: 3,
            name: "AddNewProduct",
            link: '/add-product'
        }
    ]

    const mainTabsMapping = (
        mainTabs.map(mainItem => <p key={mainItem.id}>
            <Link className='dashboardTab__link'  to={`/app${mainItem.link}`}>{mainItem.name}</Link>
        </p>)
    )

    const eCommerceMapping = (
        eCommerce.map(eCommerceItem => <p key={eCommerceItem.id}>
            <Link className='dashboardTab__link'  to={`/app${eCommerceItem.link}`}>{eCommerceItem.name}</Link>
        </p>)
    )

    return ( 
        <ProSidebar 
            // this one makes sure the sidenav bar is closed when somewhere else is clicked
            // collapsed
            // toggled={false}
            toggled="false"
            breakPoint="md"
            className="dashboardTab"
        >
            <SidebarContent>
                <div>
                    {mainTabsMapping}
                    <a key="3" className='dashboardTab__link'  href={`https://${storeDetails.store_domain}.boxin.site`} target="_blank">
                        <p className='dashboardTab__link'>View my store</p>
                    </a>
                </div>

                <div>
                    <small>Ecommerce</small>
                    {eCommerceMapping}
                </div>

                <button onClick={() => alert("working")}>
                    Logout
                </button>
            </SidebarContent>
        </ProSidebar>
     );
}
 
export default DashboardTab;