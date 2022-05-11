import logo from "./logo.svg";
import "./App.css";
import Contacts from "./components/Contacts";
import Edit from "./components/Contacts/Edit";
import { Routes, Route, Link } from "react-router-dom";
function App() {
  return (
    <div className="App">
      <div id="container">
        <Routes>
          <Route exact path="/" element={<Contacts />} />
          <Route path="/edit/:id" element={<Edit />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
