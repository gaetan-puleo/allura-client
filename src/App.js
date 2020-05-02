import React from "react";
import Lists from "./pages/Lists";
import Light from "./pages/Light";

import useLights from "./hooks/useLights";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { StylesProvider } from "@material-ui/core/styles";
export default function App(props) {
  const { lights, setPower, setBright, setRGB, setCT } = useLights();
  return (
    <StylesProvider injectFirst={true}>
      <Router>
        <div style={{ maxWidth: 400, width: "100%", margin: "auto" }}>
          <Switch>
            <Route exact path="/">
              <Lists
                {...{
                  lights,
                  setPower,
                  setBright,
                  setRGB,
                  setCT,
                }}
              />
            </Route>
            <Route path="/light/:id">
              <Light
                {...{
                  lights,
                  setPower,
                  setBright,
                  setRGB,
                  setCT,
                }}
              />
            </Route>
          </Switch>
        </div>
      </Router>
    </StylesProvider>
  );
}
