import React from "react";
import Navbar from "./components/Navbar";
import HeroShowcase from "./components/HeroShowcase";
import TeamShowcase from "./components/TeamShowcase";
import { useSelector } from "react-redux";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const App = () => {
  const isSearching = useSelector((state) => state.isSearching);

  return (
    <div>
      <Navbar />
      <ToastContainer />
      {!isSearching && <TeamShowcase />}
      {isSearching && <HeroShowcase />}
    </div>
  );
};

export default App;
