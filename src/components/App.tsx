import React, {useState, useEffect} from 'react'
import {BrowserRouter as Router, Route, Switch } from "react-router-dom";

import '../styles/index.scss'
import { ThemeContext } from "../contexts";

import ResultsPage from "./ResultsPage";
import Search from "./Search";
import NotFound from './NotFound';
import Footer from "./Footer";
import DataSourcesInfo from "./DataSourcesInfo";

export default function App() {

    const [ theme, setTheme ] = useState(localStorage.theme)

    useEffect(() => {
        setTheme(localStorage.theme)
    });

      return (
          <ThemeContext.Provider value={{theme, setTheme}}>
            <div className={`container ${theme}`}>
                <Router>
                    <Switch>
                        <Route exact path='/' component={Search} />
                        <Route path='/results' component={ResultsPage} />
                        <Route path='/info' component={DataSourcesInfo} />
                        <Route render={() => <NotFound text='Page not found' /> } />
                    </Switch>
                    <Footer />
                </Router>

            </div>
          </ThemeContext.Provider>
      );
}

