import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Card from "./components/Card";
import "./App.css";

function App() {
  return (
    <Router>
      <h1 className="text-center text-3xl font-bold font-grey">2048 Game</h1>
      <Routes>
        <Route path="/" element={<Card />} />
      </Routes>
    </Router>
  );
}

export default App;
