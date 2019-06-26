import React, { Fragment } from 'react';
import { BrowserRouter as Router, Route, Switch} from "react-router-dom"
import HomeComponent from './components/home/homeComponent';
import LoginComponent from './components/loginComponent';
import RegisterComponent from './components/registerComponent';
import Header from './components/headerComponent';
import Footer from './components/footerComponent';
import DasbboardComponent from './components/dasbboard/account';
// import logo from './logo.svg';
import 'bootstrap/dist/css/bootstrap.css';
import 'font-awesome/css/font-awesome.min.css';
import './App.css';

const App = () => 

    <Fragment>
      <Header />
      <Router>
        <Route exact path="/" component={HomeComponent} />
        <Switch>
          <Route exact path="/login" component={LoginComponent} />
          <Route exact path="/register" component={RegisterComponent} />
          <Route exact path="/dashboard" component={DasbboardComponent} />
        </Switch>
      </Router>
      <Footer />
    </Fragment>



export default App;
