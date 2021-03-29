import React, {useState, useEffect} from 'react'
import {BrowserRouter as Router, Route, Switch } from "react-router-dom";

import '../styles/index.scss'
import { ThemeContext } from "../contexts";

import ResultsPage from "./ResultsPage";
import Search from "./Search";
import NotFound from './NotFound';
import DataSourcesInfo from "./DataSourcesInfo";
import DayDetails from "./DayDetails";

export default function App() {

    const [ theme, setTheme ] = useState(localStorage.theme)
    const [ weather, setWeather ] = useState({})
    const [ pollution, setPollution ] = useState({})
    const [ locationInfo, setLocationInfo ] = useState({})
    const [ err, setErr ] = useState('')


    useEffect(() => {
        setTheme(localStorage.theme ? localStorage.theme : 'light')
    }, []);

      return (
          <ThemeContext.Provider value={{theme, setTheme}}>
            <div className={`container ${theme}`}>
                <Router>
                    <Switch>
                        <Route exact path='/' component={Search} />
                        <Route path='/results' render={() => <ResultsPage
                            weather={weather}
                            weatherSetter={setWeather}
                            pollution={pollution}
                            pollutionSetter={setPollution}
                            locationInfo={locationInfo}
                            locationInfoSetter={setLocationInfo}
                            err={err}
                            errSetter={setErr}
                        /> } />
                        <Route path='/info' component={DataSourcesInfo} />
                        <Route path='/day-view' render={() => <DayDetails
                            pollution={pollution}
                            weather={weather}
                            locationInfo={locationInfo}
                        /> } />
                        <Route render={() => <NotFound text='Page not found' /> } />
                    </Switch>
                </Router>

            </div>
          </ThemeContext.Provider>
      );
}

