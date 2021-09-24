import React, { useState } from "react";
import Navbar from "./components/Navbar";
import News from "./components/News";
import LoadingBar from "react-top-loading-bar";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

const App = () => {
  const [searched, setSearched] = useState(null);
  const [progress, setProgress] = useState(0);

  const apiKey = process.env.REACT_APP_API_KEY;

  return (
    <Router>
      <LoadingBar
        color="#f11946"
        progress={progress}
        onLoaderFinished={() => setProgress(0)}
      />
      <Navbar setSearched={setSearched} />
      <div className="container mx-auto">
        <Switch>
          <Route exact path="/">
            <News
              setProgress={setProgress}
              apiKey={apiKey}
              country="in"
              pageSize={10}
              key="general"
              category="general"
            />
          </Route>
          <Route exact path="/searched">
            <News
              setProgress={setProgress}
              apiKey={apiKey}
              country="in"
              pageSize={10}
              key={searched}
              category="general"
              searched={searched}
            />
          </Route>
          <Route exact path="/business">
            <News
              setProgress={setProgress}
              apiKey={apiKey}
              country="in"
              pageSize={10}
              key="business"
              category="business"
            />
          </Route>
          <Route exact path="/entertainment">
            <News
              setProgress={setProgress}
              apiKey={apiKey}
              country="in"
              pageSize={10}
              key="entertainment"
              category="entertainment"
            />
          </Route>
          <Route exact path="/health">
            <News
              setProgress={setProgress}
              apiKey={apiKey}
              country="in"
              pageSize={10}
              key="health"
              category="health"
            />
          </Route>
          <Route exact path="/science">
            <News
              setProgress={setProgress}
              apiKey={apiKey}
              country="in"
              pageSize={10}
              key="science"
              category="science"
            />
          </Route>
          <Route exact path="/sports">
            <News
              setProgress={setProgress}
              apiKey={apiKey}
              country="in"
              pageSize={10}
              key="sports"
              category="sports"
            />
          </Route>
          <Route exact path="/technology">
            <News
              setProgress={setProgress}
              apiKey={apiKey}
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
};

export default App;
