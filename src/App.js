import React from "react";
import { useSelector } from "react-redux";
import { ToastContainer } from "react-toastify";

import GoTopButton from "./components/UI/GoTopButton";
import HeroSearch from "./components/Layout/HeroSearch";
import MyTeam from "./components/Layout/MyTeam";
import Navbar from "./components/UI/Navbar";

import "react-toastify/dist/ReactToastify.css";

const App = () => {
  const userIsSearching = useSelector((state) => state.userIsSearching);

  return (
    <div>
      <Navbar />
      <ToastContainer />
      {!userIsSearching && <MyTeam />}
      {userIsSearching && <HeroSearch />}
      <GoTopButton />
    </div>
  );
};

export default App;
