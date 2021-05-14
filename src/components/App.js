import React, { Fragment } from "react";
import { Switch, Route } from "react-router-dom";
import Header from "./Header";
import Cars from '../pages/Cars';

function App() {
  return (
    <Fragment>
      <Header />
      <div> 
        <Switch>
          <Route exact path="/" components={Cars} />
        </Switch>
      </div>
    </Fragment>
  );
}

export default App;
