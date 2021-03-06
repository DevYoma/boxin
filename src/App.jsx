import logo from './logo.svg'
import './App.css'
import React, { useState } from 'react'
// import SignUp from './pages/Pages/SignUp';
import SignUp from './pages/SignUp/SignUp'
import SignIn from './pages/SignIn/SignIn'
// import Home from './pages/Home/Home'
import Dashboard from './pages/Dashboard/Dashboard'
import Nav from './components/Nav/Nav'
import Store from './components/Store/Store'
import VerifyComponent from './components/VerifyComponent/VerifyComponent'
import NoMatch from './pages/NoMatch/NoMatch';
import CssBaseline from '@mui/material/CssBaseline';
import {
  Switch,
  Route,
  Link
} from "react-router-dom";
// import { useStateValue } from './context/StateProvider';
import ResendToken from './components/ResendToken/ResendToken'
import CreateStore from './components/CreateStore/CreateStore';



function App() {
  // const [{user}, dispatch] = useStateValue()
  // console.log(user)

  return (

    <React.Fragment>
      <CssBaseline />
      <div className="App">
        {/* {!user && (<Nav background="#fff"/>)} */}
          <Switch>  

            <Route path="/app" exact>
              <Dashboard />
            </Route>
            
            <Route path="/signin" exact>
              <SignIn />
            </Route>

            <Route path="/verifytoken" exact>
              <VerifyComponent />
            </Route>

            <Route path="/resendtoken" exact>
              <ResendToken />
            </Route>

            <Route path="/createstore" exact>
              <CreateStore />
            </Route>

            <Route path="/" exact>
              <SignUp />
            </Route>

            {/* <Route path="*" element={<NoMatch />} /> */}
            <Route path="*">
              <NoMatch />
            </Route>
            
          </Switch>
      </div>
    </React.Fragment>
  )
}

export default App
