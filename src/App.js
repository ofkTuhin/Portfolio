import logo from './logo.svg';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import Project from './Components/Project/Project';
import Home from './Components/HomePage/Home/Home';
import Resume from './Components/Resume/Resume';
import Blog from './Components/Blog/Blog';
import Navbar from './Components/Navbar/Navbar';
import About from './Components/About/About';



function App() {
  return (
    <div className="App">
     <Router>
      <div>
      <Navbar></Navbar>
        

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
        <Route path="/about">
           <About></About>
          </Route>
          
          <Route path="/project">
           <Project></Project>
          </Route>
          <Route path="/resume">
           <Resume></Resume>
          </Route>
          <Route path="/blog">
           <Blog></Blog>
          </Route>
          <Route path="/">
           <Home></Home>
          </Route>
        </Switch>
      </div>
    </Router>
    </div>
  );
}

export default App;
