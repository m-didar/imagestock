import Header from '../header'
import Home from '../home'
import PhotoPage from "../photo_page";
import './app.css'
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import React from "react";


function App() {
    return (
      <Router>
          <div className="app">
            <Header />
            <Switch>
                <Route exact path="/" component={Home} />
                <Route path="/favorites" render={props => <h1>Favorites</h1>} />
                <Route path="/:id" children={<PhotoPage photoId={}/>}/>
            </Switch>
          </div>
      </Router>
    );
}

export default App;
