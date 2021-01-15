import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Header from "./components/Header"
import Footer from "./components/Footer"
import Main from "./components/Main"
import Portfolio from "./components/Portfolio"
import Contact from "./components/Contact"
import './App.css';
function App() {
  return (
    <>
    <Router>      
      <Header/>
      <Switch>
        <Route path="/portfolio">
          <Portfolio />
        </Route>
        <Route path="/contact">
          <Contact />
        </Route>        
        <Route path="*">
          <Main />
        </Route>
      </Switch>
    </Router>
    <Footer/>
    </>
  );
}

export default App;
