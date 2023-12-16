import React from "react";
import Footer from "./Footer";
import Navbar from "./Navbar";
import BrowseCards from "./BrowseCards";
import "./main.css";
import "./imgstyles.css";

function Body() {
  return (
    <div className="BROWSE_BODY">
      {/* <Navbar /> */}
      <BrowseCards />
      
    </div>
  );
}

export default Body;
