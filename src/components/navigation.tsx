import * as React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import {About} from "../page/about"
import { FizzBuzz } from "../page/fizzBuzz"
import { Login } from "../page/login"
import { Honeydew } from "../page/honeydew"

const Navigation = () => {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/login">Log in</Link>
            </li>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/fizzbuzz">Fizzbuzz</Link>
            </li>
          </ul>
        <hr/>
        </nav>

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
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
          <Route path="/">
            <Honeydew />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default Navigation;