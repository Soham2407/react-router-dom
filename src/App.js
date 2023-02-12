import { Route, Routes } from "react-router-dom";
import About from "./components/About";
import Home from "./components/Home";
import "./App.css";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />} />
      </Routes>
    </div>
  );
}

export default App;
