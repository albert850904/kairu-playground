<<<<<<< HEAD:frontend/src/App.js
import { Route, Routes } from "react-router-dom";

// views
import Home from "./views/Home/Home";

// components
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Grid from "./views/Grid/Grid";
import Videos from "./views/Videos/Videos";

// css
import "./App.scss";
import Weather from "./views/Weather/Weather";

function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="grid" element={<Grid />} />
        <Route path="videos" element={<Videos />} />
        <Route path="weather" element={<Weather />} />
      </Routes>
      <Footer />
=======
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
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
      </header>
>>>>>>> parent of cba5e2ef (5/18: youtube player clone):src/App.js
    </div>
  );
}

export default App;
