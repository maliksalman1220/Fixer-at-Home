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


import Addservices from "./components/screens/Addservices";
import Addcategories from "./components/screens/Addcategories";

import viewprofile from "./components/screens/viewprofile";


import RegisterScreenp from "./components/screens/Registeradmin";
import PPPP from "./components/screens/PPP";
import  category from "./components/screens/category";
// import Sidebar from './components/screens/sidebar';


import  workerlist from "./components/screens/workerlist";
import  addworkerlist from "./components/screens/addworker";
import { Login } from "./components/screens/login";
import Navbar from './components/screens/navbar';
import Update_profile from "./components/screens/update_profile";
import Footer from './components/screens/footer';
import WorkerCard from "./components/screens/worker_card";
import Homepage from "./components/screens/homepage";
// import sidebarTEMP from "./components/screens/sidebarTEMP";

const App = () => {
  return (
    <Router>
      <div className="app">
      
        <Navbar/>
    <div className="container align-left">
    </div>

        <Switch>
        <Route exact path="/home" component={Homepage} />
          <Route exact path="/registerp" component={RegisterScreenp} />
          <Route exact path="/register" component={RegisterScreen} />
          <Route exact path="/Addservices" component={Addservices} />
          <Route exact path="/Addcategories" component={Addcategories} />
          <Route exact path="/pppp" component={PPPP} />
          <Route exact path="/category/:q" component={category} />
          <Route exact path="/worker/:q" component={workerlist} />
          <Route exact path="/addworker" component={addworkerlist} />
          <Route exact path="/viewprofile/:q" component={viewprofile} />
          {/* <Route exact path="/sidebarTEMP" component={sidebarTEMP} /> */}
          
          <Route exact path="/worker_card" component={WorkerCard} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/update_profile" component={Update_profile} />
          <Route exact path="/employeeDashboard" component = {EmployeeDashboard} />
          <Route exact path="/resetPassword" component = {ResetPassword} />
          <Route exact path="/forgetPassword" component = {ForgetPassword} />
        </Switch>
        {/* <Footer/> */}
      </div>
    </Router>
  );
};

export default App;
