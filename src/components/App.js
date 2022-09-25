import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./Login.js";
import Home from "./Home.js";
import "../styles/App.css";
import Header from "./Header.js";
function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Routes>
          <Route exact path="/" element={<Login />} />
          <Route path="/home" element={<Home />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
