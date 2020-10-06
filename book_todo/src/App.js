import React from "react";
import { Menu, Segment } from "semantic-ui-react";
import BookMain from "./view/menu/BookMain";
import TodoMain from "./view/menu/TodoMain";
import { observer } from "mobx-react";
import { Component } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Home from "./view/menu/Home";

class App extends Component {
  render() {
    return (
      <Router>
        <ul
          style={{
            width: "300px",
            display: "inline-flex",
            flexDirection: "row",
            justifyContent: "space-between",
            textDecoration: "none",
            listStyle: "none",
            fontSize: "20px",
            color: "black",
            // paddingBottom: "50px",
          }}
        >
          <li>
            <Link to="/">HOME</Link>
          </li>
          <li>
            <Link to="/books">BOOKS</Link>
          </li>
          <li>
            <Link to="/todos">TODOS</Link>
          </li>
        </ul>

        <hr></hr>
        <br></br>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/books" component={BookMain} />
          <Route path="/todos" component={TodoMain} />
        </Switch>
      </Router>
    );
  }
}

export default App;
