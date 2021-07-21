import React from "react";
import "../Resources/App.css";
import { Header } from "./Header";
import { Home } from "../pages/Home";

function App() {
  return (
    <div className="App">
      <Header />
      <Home />
    </div>
  );
}

export default App;
