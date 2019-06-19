import React, { Fragment } from 'react';
import { BrowserRouter as Router, Route, Switch} from "react-router-dom"
import HomeComponent from './components/home/homeComponent';
import LoginComponent from './components/loginComponent';
import RegisterComponent from './components/registerComponent';
// import logo from './logo.svg';
import './App.css';

const App = () => 

    <Fragment>
      <Router>
        <Route exact path="/" component={HomeComponent} />
        <Switch>
          <Route exact path="/login" component={LoginComponent} />
          <Route exact path="/register" component={RegisterComponent} />
        </Switch>
      </Router>
    </Fragment>



export default App;
