import React from 'react'
import '../App.css';
import ResultsPage from "./ResultsPage";
import Search from "./Search";
import NotFound from './NotFound';
import {BrowserRouter as Router, Route, Switch } from "react-router-dom";


function App() {
  return (
    <React.Fragment>
        <Router>
            <Switch>
                <Route exact path='/' component={Search} />
                <Route path='/results' component={ResultsPage} />
                <Route render={() => <NotFound text='Page not found' /> } />
            </Switch>
        </Router>
    </ React.Fragment>
  );
}

export default App;
