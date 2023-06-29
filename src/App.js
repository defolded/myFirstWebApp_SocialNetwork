import "./App.css";
import Content from "./components/Content/Content";
import Messages from "./components/Messages/Messages";
import Navbar from "./components/Navbar/Navbar";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/content" element={<Content />} />
          <Route path="/messages/*" element={<Messages />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
