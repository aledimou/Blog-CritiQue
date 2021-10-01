import './App.css';
import Menu from "./components/MenuComponent"
import Home from "./components/BlogPages/Home"
function App() {
  return (
    <div className="App">
      <header className="App-header">
      <Menu />
      </header>
      <Home />
    </div>
  );
}

export default App;
