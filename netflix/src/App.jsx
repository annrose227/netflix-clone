import React from "react";
import Navbar from "./components/Navbar/NavBar";
import "./App.css";
import Banner from "./components/Banner/Banner";
import RowPost from "./components/RowPost/RowPost";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Banner />
      <RowPost title="Originals" />
      <RowPost title="Action" isSmall />
    </div>
  );
}

export default App;
