import React from "react";
import Lights from "./pages/Lists";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { StylesProvider } from "@material-ui/core/styles";
export default function App(props) {
  return (
    <StylesProvider injectFirst={true}>
      <Router>
        <div>
          <Switch>
            <Route path="/">
              <Lights />
            </Route>
          </Switch>
        </div>
      </Router>
    </StylesProvider>
  );
}
