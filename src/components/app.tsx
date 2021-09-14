import * as React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import NavigationBar from './navigationBar'

import {About} from "../page/about"
import { FizzBuzz } from "../page/fizzBuzz"
import { Login } from "../page/login"
import { Honeydew } from "../page/honeydew"
import { Dashboard } from "../page/dashboard"
import { Configuration } from "../page/configuration"

const pageNotFound = () => (
  <div>
    404 Page not found. return <Link to="/">home</Link>
  </div>
)

export const App = () => (
  <div>
    <Router>
      <div id="router-container">
        <NavigationBar userName=""/>
        <hr/>
        <Switch>
          <Route path="/login">
            <Login/>
          </Route>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/fizzbuzz">
            <FizzBuzz />
          </Route>
          <Route exact={true} path="/">
            <Honeydew />
          </Route>
          <Route component={pageNotFound}/>
        </Switch>
      </div>
    </Router>
    <hr/>
    <div>
      [footer]
    </div>
  </div>
);
