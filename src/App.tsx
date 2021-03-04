import React from "react";
import { Route, Switch } from "react-router-dom";
import "./App.scss";
import NavBar from "./components/NavBar";
import Projects from "./pages/Projects";
import Resume from "./pages/Resume";
import About from "./pages/About";
import Home from "./pages/Home";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import projectList from "./svgs/projects.json";
import { ProjectType } from "./util/customtypes";
import Food from "./pages/Food";
const App: React.FC<{}> = () => {
  return (
    <div className="App">
      <NavBar />
      <main style={{ position: "relative", paddingTop: "3rem" }}>
        <Route
          render={({ location }) => {
            let { pathname, key } = location;

            if (pathname === "/") {
              pathname = "home";
            } else {
              pathname = pathname.replace("/", "");
            }

            return (
              <TransitionGroup>
                <CSSTransition
                  key={key}
                  classNames={pathname}
                  appear={false}
                  timeout={{ enter: 1100, exit: 0 }}
                >
                  <Switch location={location}>
                    <Route
                      path="/projects"
                      render={() => (
                        <Projects projects={projectList as [ProjectType]} />
                      )}
                    />
                    <Route path="/resume" component={Resume} />
                    <Route path="/food" component={Food} />
                    <Route path="/about" component={About} />
                    <Route path="/" component={Home} />
                  </Switch>
                </CSSTransition>
              </TransitionGroup>
            );
          }}
        />
      </main>
    </div>
  );
};

export default App;
