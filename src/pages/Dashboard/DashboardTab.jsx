import React from 'react';
import  { useState, useEffect } from 'react'
import './DashboardTab.css'
import { Link } from 'react-router-dom';
import { useStateValue } from '../../context/StateProvider';
import { useHistory } from 'react-router-dom';
import axios from 'axios'
import { ProSidebar, SidebarHeader, SidebarFooter, SidebarContent } from 'react-pro-sidebar';
import 'react-pro-sidebar/dist/css/styles.css';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';


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
            name: "Deliveries",
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


    const [state, setState] = React.useState({
        top: false,
        left: false,
        bottom: false,
        right: false,
      });
    
      const toggleDrawer = (anchor, open) => (event) => {
        if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
          return;
        }
    
        setState({ ...state, [anchor]: open });
      };
    
      const list = (anchor) => (
        <Box
          sx={{ width: anchor === 'top' || anchor === 'bottom' ? 'auto' : 250 }}
          role="presentation"
          onClick={toggleDrawer(anchor, false)}
          onKeyDown={toggleDrawer(anchor, false)}
        >

{/* const mainTabsMapping = (
        mainTabs.map(mainItem => <p key={mainItem.id}>
            <Link className='dashboardTab__link'  to={`/app${mainItem.link}`}>{mainItem.name}</Link>
        </p>)
    ) */}

{/* <ListItemIcon>
                  {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                </ListItemIcon> */}
          <List style={{background: "#12113d", color: "white", height: "100vh" }}>
            {mainTabs.map((mainItem) => (
                <ListItem button key={mainItem.id}>
                <Link to={`/app${mainItem.link}`} className='dashboardTab__link'>
                    <ListItemText primary={mainItem.name} />
                </Link>
              </ListItem>
            ))}
                
            <ListItem>
                <a key="3" className='dashboardTab__link'  href={`https://${storeDetails.store_domain}.boxin.site`} target="_blank">
                    <p className='dashboardTab__link'>View my store</p>
                </a>
            </ListItem>

            {eCommerce.map((eCommerceItem) => (
                <ListItem button key={eCommerceItem.id}>
                
                <Link to={`/app${eCommerceItem.link}`} className='dashboardTab__link'>
                    <ListItemText primary={eCommerceItem.name} />
                </Link>
              </ListItem>
            ))}
          </List>
        </Box>
      );

      const NavIcon = (
        <IconButton
        size="large"
        edge="start"
        color="inherit"
        aria-label="open drawer"
        sx={{ mr: 2 }}
      >
        <MenuIcon />
      </IconButton>
      )
    

    return ( 
        <div>
        {['left'].map((anchor) => (
          <React.Fragment key={anchor}>
            <Button onClick={toggleDrawer(anchor, true)}>{anchor}</Button>
            <Drawer
              anchor={anchor}
              open={state[anchor]}
              onClose={toggleDrawer(anchor, false)}
            >
              {list(anchor)}
            </Drawer>
          </React.Fragment>
        ))}
      </div>
  
     );
}
 
export default DashboardTab;


   // toggled="false"
            // breakPoint="md"
            // className="dashboardTab"