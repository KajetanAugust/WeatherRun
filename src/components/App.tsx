import React from 'react'
import {BrowserRouter as Router, Route, Switch } from "react-router-dom";

import '../styles/index.scss'

import ResultsPage from "./ResultsPage";
import Search from "./Search";
import NotFound from './NotFound';
import Footer from "./Footer";
import DataSourcesInfo from "./DataSourcesInfo";

function App() {
  return (
    <React.Fragment>
        <Router>
            <Switch>
                <Route exact path='/' component={Search} />
                <Route path='/results' component={ResultsPage} />
                <Route path='/info' component={DataSourcesInfo} />
                <Route render={() => <NotFound text='Page not found' /> } />
            </Switch>
            <Footer />
        </Router>

    </ React.Fragment>
  );
}

export default App;
