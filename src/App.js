import { Routes, Route } from "react-router-dom";
import "./App.css";
import Details from "./pages/details/Details";
import Home from "./pages/home/Home";
import Header from "./shared/component/header/Header";

function App() {
  return (
    <div className="app-container">
      <Header />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/details/:semId" element={<Details />} />
        <Route path="*" element={<div>Not Found</div>} />
      </Routes>
    </div>
  );
}

export default App;
