import './App.css';
import Home from './components/Home';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import {Edit } from "./components/From/Edit"
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/edit/:id" element={<Edit />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
