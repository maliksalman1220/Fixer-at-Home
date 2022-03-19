import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

// Routing
import PrivateRoute from "./components/routing/PrivateRoute";

import 'bootstrap/dist/css/bootstrap.min.css';

import 'bootstrap/dist/js/bootstrap.bundle.min';



// Screens

import RegisterScreen from "./components/screens/RegisterScreen";



const App = () => {
  return (
    <Router>
      <div className="app">
        <Switch>
          
          <Route exact path="/register" component={RegisterScreen} />
          
        </Switch>
      </div>
    </Router>
  );
};

export default App;
