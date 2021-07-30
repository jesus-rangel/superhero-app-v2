import React from "react";
import Navbar from "./components/Navbar";
import HeroShowcase from "./components/HeroShowcase";
import TeamShowcase from "./components/TeamShowcase";

const App = () => {
  return (
    <div>
      <Navbar />

      <TeamShowcase />
      <HeroShowcase />
    </div>
  );
};

export default App;
