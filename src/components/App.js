import '../App.css';
import ResultsPage from "./ResultsPage";
import Search from "./Search";
import {BrowserRouter as Router, Route } from "react-router-dom";

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
