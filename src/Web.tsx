import Navbar from "./components/navbar/Navbar";
import Stars from "./components/stars/Stars";
import Home from "./pages/Home/Home";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <header>
        <Navbar />
      </header>

      <main>
        <Stars />
        <div className="over-comet"></div>

        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </main>
    </>
  );
}

export default App;
