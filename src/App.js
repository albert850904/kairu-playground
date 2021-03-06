import { Route, Routes } from "react-router-dom";

// views
import Home from "./views/Home/Home";

// components
import Header from "./components/Header/Header";
import Grid from "./views/Grid/Grid";
import Videos from "./views/Videos/Videos";

// css
import "./App.scss";
import Weather from "./views/Weather/Weather";
import AppleProduct from "./views/AppleProduct/AppleProduct";

function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="grid" element={<Grid />} />
        <Route path="videos" element={<Videos />} />
        <Route path="weather" element={<Weather />} />
        <Route path="airpods" element={<AppleProduct />} />
      </Routes>
    </div>
  );
}

export default App;
