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

function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="grid" element={<Grid />} />
        <Route path="videos" element={<Videos />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
