import "./App.css";
import NavBar from "./components/NavBar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Home } from "./components/Pages/Home";
import { About } from "./components/Pages/About";
import { Weather } from "./components/Pages/Weather";
import { Data } from "./components/Pages/Data";
import {CarouselContainer} from "./components/Carousel";

function App() {
  return (
    <>
      <Router>
        <NavBar />
        <CarouselContainer />

        <div className="pages">
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/about" component={About} />
            <Route path="/weather" component={Weather} />
            <Route path="/data" component={Data} />
          </Switch>
        </div>
      </Router>
    </>
  );
}

export default App;
