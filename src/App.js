//import { Typography } from '@material-ui/core';
import React from 'react';
import './App.css';
import MiniDrawer from './Components/SideDrawer/index'
//import NavBar from './Components/NavBar';
//import{BrowserRouter as Router} from 'react-router-dom'
//import{Router
function App() {
  return (
    <>
   {/**<BrowserRouter>
   <Switch>
     <Router path='/' component={MiniDrawer}>

     </Router>
   </Switch>
   
   </BrowserRouter>*/}

 <MiniDrawer/>
     </>
    
  );
}
export default App;

