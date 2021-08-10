import React from "react";
import Navbar from "./components/Navbar";
import HeroShowcase from "./components/HeroShowcase";
import TeamShowcase from "./components/TeamShowcase";
import { useSelector } from "react-redux";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const App = () => {
  const userIsSearching = useSelector((state) => state.userIsSearching);

  return (
    <div>
      <Navbar />
      <ToastContainer />
      {!userIsSearching && <TeamShowcase />}
      {userIsSearching && <HeroShowcase />}
    </div>
  );
};

export default App;
