import { AnimatePresence } from 'framer-motion';
import { Route, Switch, useLocation } from "react-router-dom";
import "./animations/scss/animations.scss";
import "./App.css";
import Bigmenu from "./components/Bigmenu/Bigmenu";
import Navigation from "./components/Navigation/Navigation";
import Scroll from "./components/SmoothScroll/SmoothScroll";
import Home from "./pages/Home/Home";
import Project from "./pages/Project/Project";


function App() {
  let location = useLocation();

  return (
    <div className='App' id="APP">
      <Scroll />
      <Navigation />
      <Bigmenu />
      <AnimatePresence exitBeforeEnter>


        <Switch location={location} key={location.key}>
          <Route path='/project/:id'>
            <Project />
          </Route>
          <div id="my-scrollbar">
            <Route path='/'>
              <Home />
            </Route>
          </div>
        </Switch>


      </AnimatePresence>

    </div>
  );
}

export default App;
