import '../App.css';
import News from "./News";
import Weather from "./Weather";
import AirQuality from "./AirQuality";
import ResultsPage from "./ResultsPage";
import Search from "./Search";
import {BrowserRouter as Router, Route, Switch, Redirect } from "react-router-dom";

function App() {
  return (

    <div className="App">
        <Router>
            <Route exact path='/' component={Search} />
            <Route path='/results' component={ResultsPage} />
        </Router>
    </div>
  );
}

export default App;
