import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

// Routing
import PrivateRoute from "./components/routing/PrivateRoute";

import '../node_modules/bootstrap/dist/js/bootstrap.bundle.min';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'

// Screens

import RegisterScreen from "./components/screens/RegisterScreen";


import Addservices from "./components/screens/Addservices";
import Addcategories from "./components/screens/Addcategories";


import RegisterScreenp from "./components/screens/Registeradmin";
import PPPP from "./components/screens/PPP";
import  category from "./components/screens/category";




import { Login } from "./components/screens/login";
import Navbar from './components/screens/navbar';
import Update_profile from "./components/screens/update_profile";
import Footer from './components/screens/footer';



const App = () => {
  return (
    <Router>
      <div className="app">
        <Navbar/>
        <Switch>
          <Route exact path="/registerp" component={RegisterScreenp} />
          <Route exact path="/register" component={RegisterScreen} />
          <Route exact path="/Addservices" component={Addservices} />
          <Route exact path="/Addcategories" component={Addcategories} />
          <Route exact path="/pppp" component={PPPP} />
          <Route exact path="/category/:q" component={category} />
          
          <Route exact path="/login" component={Login} />
          <Route exact path="/update_profile" component={Update_profile} />
        </Switch>
        {/* <Footer/> */}
      </div>
    </Router>
  );
};

export default App;
