import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

// Routing
import PrivateRoute from "./components/routing/PrivateRoute";

import '../node_modules/bootstrap/dist/js/bootstrap.bundle.min';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'

// Screens

import RegisterScreen from "./components/screens/RegisterScreen";
import RegisterScreenp from "./components/screens/Registeradmin";
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
          <Route exact path="/login" component={Login} />
          <Route exact path="/update_profile" component={Update_profile} />
        </Switch>
        {/* <Footer/> */}
      </div>
    </Router>
  );
};

export default App;
