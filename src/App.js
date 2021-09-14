import React, { Component } from "react";
import Navbar from "./components/Navbar";
import News from "./components/News";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

export default class App extends Component {
  constructor() {
    super();
    this.state = { searched: null };
  }

  changeState = (newState) => {
    this.setState(newState);
  };

  render() {
    return (
      <Router>
        <Navbar changeState={this.changeState} />
        <div className="container mx-auto">
          <Switch>
            <Route exact path="/">
              <News
                country="in"
                pageSize={10}
                key="general"
                category="general"
              />
            </Route>
            <Route exact path="/searched">
              <News
                country="in"
                pageSize={10}
                key={this.state.searched}
                category="general"
                searched={this.state.searched}
              />
            </Route>
            <Route exact path="/business">
              <News
                country="in"
                pageSize={10}
                key="business"
                category="business"
              />
            </Route>
            <Route exact path="/entertainment">
              <News
                country="in"
                pageSize={10}
                key="entertainment"
                category="entertainment"
              />
            </Route>
            <Route exact path="/health">
              <News country="in" pageSize={10} key="health" category="health" />
            </Route>
            <Route exact path="/science">
              <News
                country="in"
                pageSize={10}
                key="science"
                category="science"
              />
            </Route>
            <Route exact path="/sports">
              <News country="in" pageSize={10} key="sports" category="sports" />
            </Route>
            <Route exact path="/technology">
              <News
                country="in"
                pageSize={10}
                key="technology"
                category="technology"
              />
            </Route>
          </Switch>
        </div>
      </Router>
    );
  }
}
