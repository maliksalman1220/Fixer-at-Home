import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

// Routing
import PrivateRoute from "./components/routing/PrivateRoute";

import '../node_modules/bootstrap/dist/js/bootstrap.bundle.min';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'

// Screens

import EmployeeDashboard from "./components/screens/employeeDashboard/EmployeeDashboard";
import ForgetPassword from "./components/screens/forgetPassword/ForgetPassword";
import ResetPassword from "./components/screens/resetPassword/ResetPassword";



import RegisterScreen from "./components/screens/RegisterScreen";


import Addservices from "./components/screens/addservicesLayout";
import AddcatagoriesLayout from "./components/screens/addcatagoriesLayout";

import viewprofile from "./components/screens/viewprofile";


import RegisterScreenp from "./components/screens/Registeradmin";
import PPPP from "./components/screens/PPP";
import  category from "./components/screens/category";
import  workerorder from "./components/screens/workerorder";
import  workerorderdetail from "./components/screens/workerorderdetail";

import  order from "./components/screens/order";

import placeorder from "./components/screens/placeorder";


import  workerlist from "./components/screens/workerlist";


import  Addworkerlist from "./components/screens/addworker";
import { Login } from "./components/screens/login";
import Navbar from './components/screens/navbar';
import Update_profile from "./components/screens/update_profile";
import Footer from './components/screens/footer';
import WorkerCard from "./components/screens/worker_card";
import Homepage from "./components/screens/homepage";
import { Userprofile } from "./components/screens/userprofile";
import { Workerprofile } from "./components/screens/workerprofile";
import Workerprofileupdate from "./components/screens/workerprofileupdate";
import { Message } from "./components/screens/Message";
import { Workerprofileview } from "./components/screens/workerprofileview";
// import sidebarTEMP from "./components/screens/sidebarTEMP";
import addworkerLayout_admin from "./components/screens/addworkerLayout_admin";
import {UserprofileView} from "./components/screens/userprofileview";
import NavbarCustomer from "./components/screens/navbarCustomer";
import workerlandingpage from "./components/screens/workerlandingpage";
import {Customerviewsworker} from "./components/screens/customerviewsworker";
import Aboutus from "./components/screens/aboutus";
import AboutusW from "./components/screens/aboutusW";
import AboutusA from "./components/screens/aboutusA";
import AboutusC from "./components/screens/aboutusC.js";
import RegisterCustomer from "./components/screens/RegisterCustomer";
import Rating from "./components/screens/rating";
import HomepageCust from "./components/screens/homecustomer";
import HomepageWorker from "./components/screens/homeworker";
const App = () => {
  return (
    <Router>
      <div className="app">
      
        {/* <NavbarCustomer/> */}
    <div className="container align-left">
    </div>

        <Switch>
          <Route exact path="/" component={Homepage} />
          <Route exact path="/home" component={Homepage} />
          <Route exact path="/registerp" component={RegisterScreenp} />
          <Route exact path="/register" component={RegisterScreen} />

        {/* admin pages - access from addservices*/}
          <Route exact path="/Addservices" component={Addservices} />
          <Route exact path="/Addcategories" component={AddcatagoriesLayout} />
          <Route exact path="/category/:q" component={category} />
          <Route exact path="/worker/:q" component={workerlist} />
          <Route exact path="/addworker" component={addworkerLayout_admin} />
          {/* <Route exact path="/addworker" component={Addworkerlist} /> */}
        
          {/*worker - access from navbar*/}
          <Route exact path="/workerorder/:q" component={workerorder} />
          <Route exact path="/order/:q" component={order} />
          <Route exact path="/workerorderdetail/:q" component={workerorderdetail} />
  
        {/* customer - in progress */}
          <Route exact path="/pppp" component={PPPP} />
          <Route exact path="/viewprofile/:q" component={viewprofile} />
          <Route exact path="/userprofileview/:q" component={() => <UserprofileView/>} />
          <Route exact path="/userprofile/:q" component={() => <Userprofile/>} />
          <Route exact path="/workerprofileview/:q" component={() => <Workerprofileview/>} />
          <Route exact path="/workerprofile/:q" component={() => <Workerprofile/>} />
          <Route exact path="/order/:q" component={order} />
          <Route exact path="/worker_card" component={WorkerCard} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/updateprofile/:q" component={() => <Update_profile />} />
          <Route exact path="/workerupdateprofile/:q" component={() => <Workerprofileupdate />} />
          <Route exact path="/placeorder/:q" component={placeorder} />
          <Route exact path="/employeeDashboard" component = {EmployeeDashboard} />
          <Route exact path="/resetPassword/:q" component = {ResetPassword} />
          <Route exact path="/forgetPassword" component = {ForgetPassword} />
          <Route exact path="/message/:q" component = {Message} />
          <Route exact path="/workerland" component = {workerlandingpage} />
          <Route exact path="/customerviewsworker/:q" component = {Customerviewsworker} />
          <Route exact path="/about" component={Aboutus} />
          <Route exact path="/aboutW" component={AboutusW} />
          <Route exact path="/aboutA" component={AboutusA} />
          <Route exact path="/aboutC" component={AboutusC}/>
          <Route exact path="/registercust" component={RegisterCustomer} />
          <Route exact path="/rating" component={Rating} />
          <Route exact path="/homecust" component={HomepageCust} />
          <Route exact path="/homework" component={HomepageWorker} />

          {/* RegisterCustomer */}
          {/* <Route exact path="/aboutC" component={AboutusC} />
          <Route exact path="/aboutW" component={AboutusW} />
          <Route exact path="/aboutA" component={AboutusA} /> */}

        
        </Switch>
        <Footer/>   
      </div>
   
    </Router>
  );
};

export default App;
