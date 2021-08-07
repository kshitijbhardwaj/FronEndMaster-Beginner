import { StrictMode } from "react";
import ReactDOM from "react-dom";
import SearchParams from "./SearchParams";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import Details from "./Details";

// const App = () => {
//   return React.createElement("div", {}, [
//     React.createElement("h1", { id: "adopt-me" }, "Adopt me!"),
//     React.createElement(Pet, { name: "Tuna?", type: "animal", breed: "lab" }),
//     React.createElement(Pet, { name: "Luna", type: "bird", breed: "pigeon" }),
//     React.createElement(Pet, { name: "Puna", type: "animal", breed: "GR" }),
//   ]);
// };

const App = () => {
  return (
    <div>
      <Router>
        <header>
          <Link to="/">
            <h1 id="adopt-me">Adopt me!</h1>
          </Link>
        </header>
        <Switch>
          <Route path="/details/:id">
            <Details />
          </Route>
          <Route path="/">
            <SearchParams />
          </Route>
        </Switch>
      </Router>
    </div>
  );
};

ReactDOM.render(
  <StrictMode>
    <App />
  </StrictMode>,
  document.getElementById("root")
);
