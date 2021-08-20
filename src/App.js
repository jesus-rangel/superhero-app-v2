import React from "react";
import { useSelector } from "react-redux";
import { ToastContainer } from "react-toastify";

import HeroShowcase from "./components/Layout/HeroShowcase";
import AuthModal from "./components/UI/AuthModal";
import Navbar from "./components/UI/Navbar";
import TeamShowcase from "./components/Layout/TeamShowcase";

import "react-toastify/dist/ReactToastify.css";

const App = () => {
  const userIsSearching = useSelector((state) => state.userIsSearching);

  return (
    <div>
      <Navbar />
      <ToastContainer />
      {!userIsSearching && <TeamShowcase />}
      {userIsSearching && <HeroShowcase />}
      <AuthModal />
    </div>
  );
};

export default App;
