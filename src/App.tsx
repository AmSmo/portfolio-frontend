import React from "react";
import { Route, Switch } from "react-router-dom";
import "./App.css";
import NavBar from "./components/NavBar";
import Projects from "./pages/Projects";
import Resume from "./pages/Resume";
import About from "./pages/About";
import Home from "./pages/Home";

function App() {
  return (
    <div className="App">
      <NavBar />
      <main style={{ position: "relative", paddingTop: "3rem" }}>
        <Switch>
          <Route path="/projects" component={Projects} />
          <Route path="/resume" component={Resume} />
          <Route path="/about" component={About} />
          <Route path="/" component={Home} />
        </Switch>
      </main>
    </div>
  );
}

export default App;
