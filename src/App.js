import React from "react";
import { useSelector } from "react-redux";
import { ToastContainer } from "react-toastify";

import HeroShowcase from "./components/HeroShowcase";
import Navbar from "./components/Navbar";
import TeamShowcase from "./components/TeamShowcase";
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
