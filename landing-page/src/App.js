
import { Routes, Route } from "react-router-dom";
import SignUp from './components/SignUp';
import SignIn from "./components/SignIn"
import './App.css';

function App() {
  return (
    <div className="App">
      <Routes>
          <Route path="/signin" element={<SignIn/>} />
          <Route path="/" element={<SignUp/>} />
      </Routes>
    </div>
  );
}

export default App;
