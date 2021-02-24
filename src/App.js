import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "./icons.js";
import Dashboard from "./screens/Dashboard";
import FuelQuoteForm from "./screens/FuelQuoteForm";
import FuelQuoteForm1 from "./screens/FuelQuoteForm1";
import FuelQuoteHistory from "./screens/FuelQuoteHistory";
import ProfileManagement from "./screens/ProfileManagement";
import Registration from "./screens/Registration";
import Splash from "./screens/Splash";
import "./style.css";

function App() {
  return (
    <Router>
      <Route path="/" exact component={Dashboard} />
      <Route path="/Dashboard/" exact component={Dashboard} />
      <Route path="/FuelQuoteForm/" exact component={FuelQuoteForm} />
      <Route path="/FuelQuoteForm1/" exact component={FuelQuoteForm1} />
      <Route path="/FuelQuoteHistory/" exact component={FuelQuoteHistory} />
      <Route path="/ProfileManagement/" exact component={ProfileManagement} />
      <Route path="/Registration/" exact component={Registration} />
      <Route path="/Splash/" exact component={Splash} />
    </Router>
  );
}

export default App;
