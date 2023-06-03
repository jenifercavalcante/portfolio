import Stars from "./components/stars/Stars";
import Home from "./pages/Home/Home";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div>
      <Stars />
      <div className="over-comet"></div>

      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;
