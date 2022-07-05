<<<<<<< HEAD
import { BrowserRouter } from 'react-router-dom';
import './App.css';
import Login from './pages/Login';

function App() {
  return (
    <BrowserRouter>
      <Login/>
    </BrowserRouter>
     );
=======
// import logo from './logo.svg';
import './App.css';
import Feeds from "../src/pages/Feeds"

function App() {
  return (
    <div className="App">
      <Feeds />
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
    </div>
  );
>>>>>>> 79a2be73e28190eaa82cdbc3da20e02553b84792
}

export default App;
