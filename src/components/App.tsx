import React from 'react'
import {BrowserRouter as Router, Route, Switch } from "react-router-dom";

import '../styles/index.scss'

import ResultsPage from "./ResultsPage";
import Search from "./Search";
import NotFound from './NotFound';

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
