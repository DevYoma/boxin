import logo from './logo.svg'
import './App.css'
import React, { useState } from 'react'
// import SignUp from './pages/Pages/SignUp';
import SignUp from './pages/SignUp/SignUp'
import SignIn from './pages/SignIn/SignIn'
// import Home from './pages/Home/Home'
import Dashboard from './pages/Dashboard/Dashboard'
import Nav from './components/Nav/Nav'
import NoMatch from './pages/NoMatch/NoMatch';
import CssBaseline from '@mui/material/CssBaseline';
import {
  Routes,
  Route,
  Link
} from "react-router-dom";
import { useStateValue } from './context/StateProvider';


function App() {
  const [{user}, dispatch] = useStateValue()
  console.log(user)

  return (

    <React.Fragment>
      <CssBaseline />
      <div className="App">
        {!user && (<Nav background="#fff"/>)}
          <Routes>  
          <Route path="/" element={<SignUp />} />
          <Route path="app" element={ <Dashboard />} />
          <Route path="signin" element={<SignIn />} />
          <Route path="*" element={<NoMatch />} />
            
          </Routes>
      </div>
    </React.Fragment>
  )
}

export default App
