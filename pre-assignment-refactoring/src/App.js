
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Feeds from "./pages/Feeds";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/feeds" element={<Feeds />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
