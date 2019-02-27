import React, { Component } from 'react';
import './App.css';
import DisplayPosts from "./components/DisplayPosts";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Post from "./components/Post";
import Home from './components/Home';
import Error from "./components/Error";
import Navigation from "./components/Navigation";
import SinglePost from './components/SinglePost';

class App extends Component {
  render() {
    return (
      <div className="App">
      <BrowserRouter> 
        <div>
          <Navigation />
          <Switch>
            <Route path="/" component={Home} exact/>
            <Route path="/display" component={DisplayPosts}/>
            <Route path="/post/:id" component={SinglePost}/>
            <Route component={Error} />
          </Switch>
        </div>
        </BrowserRouter>
        
      </div>
    );
  }
}

export default App;
