import React from 'react';
import './App.css';
import {Route, BrowserRouter as Router, Switch} from 'react-router-dom';
import Navbar from './components/Navbar/Navbar'
import Footer from './components/Footer/Footer'
import Home from './components/Home/Home'
import Resume from './components/Resume/Resume'
function App() {
  
  return (
    <div className="App">
      <Router>
        {/* <Switch> */}
        <Navbar />
          <Route exact path='/simple-portfolio' >
            <Home />
            <Footer />
          </Route>
          <Route exact path='/' >
            <Home />
            <Footer />
          </Route>
          {/* <Route path="/about"> */}
            {/* <Resume /> */}
          {/* </Route> */}
          <Route path="/contact">
            <Footer name="Rawah"/>
          </Route>
        {/* </Switch> */}
      </Router>
      
    </div>
  );
}

export default App;
