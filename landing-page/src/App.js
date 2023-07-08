
import { Routes, Route } from "react-router-dom";
import { BasicCard } from "./components/BasicCard";
import { BasicCard2 } from "./components/BasicCard2";
import Home from "./pages/Home";
import './App.css';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/signin" element={<BasicCard2 />} />
        <Route path="/" element={<BasicCard />} />
        <Route path="/home" element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;
