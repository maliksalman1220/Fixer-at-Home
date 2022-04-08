import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

// Routing
import PrivateRoute from "./components/routing/PrivateRoute";

import 'bootstrap/dist/css/bootstrap.min.css';

import 'bootstrap/dist/js/bootstrap.bundle.min';



// Screens

import RegisterScreen from "./components/screens/RegisterScreen";


import Addservices from "./components/screens/Addservices";
import Addcategories from "./components/screens/Addcategories";


import RegisterScreenp from "./components/screens/Registeradmin";
import PPPP from "./components/screens/PPP";
import  category from "./components/screens/category";






const App = () => {
  return (
    <Router>
      <div className="app">
        <Switch>
          <Route exact path="/registerp" component={RegisterScreenp} />
          <Route exact path="/register" component={RegisterScreen} />
          <Route exact path="/Addservices" component={Addservices} />
          <Route exact path="/Addcategories" component={Addcategories} />
          <Route exact path="/pppp" component={PPPP} />
          <Route exact path="/category/:q" component={category} />
          
        </Switch>
      </div>
    </Router>
  );
};

export default App;
