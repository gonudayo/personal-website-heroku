import React from "react";
import GrassChart from "./Sections/GrassChart";
import StockChart from "./Sections/StockChart";
import AboutMe from "./Sections/AboutMe";
import Project from "./Sections/Project";

function MainPage() {
  return (
    <div>
      <div className="section" style={{ marginBottom: 150 }}>
        <div className="app">
          <AboutMe />
        </div>
      </div>
      <div className="section">
        <GrassChart />
        <div className="app">
          <StockChart />
        </div>
      </div>
      <div className="section">
        <div className="app">
          <Project />
        </div>
      </div>
    </div>
  );
}

export default MainPage;
