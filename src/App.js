import './App.css';
import Menu from "./components/MenuComponent"
import Home from "./components/BlogPages/Home"
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Movies from "./components/BlogPages/Movies"
import Cars from "./components/BlogPages/Cars"
import Animals from "./components/BlogPages/Animals"
import Editor from './components/BlogPages/Editor';
function App() {
  return (
    <div className="App">
    <Router>
    <header header className="App-header">
      <Menu />
      </header>
      
      <Switch>
        <Route path= "/" exact component= {Home}/>
        <Route path = "/Movies" exact component= {Movies}/>
        <Route path= "/Cars" exact component= {Cars} />
        <Route path= "/Animals" exact component= {Animals}/>
        <Route path= "/Editor" exact component= {Editor}/>
      </Switch>
    </Router>
    </div>
  );
}

export default App;
