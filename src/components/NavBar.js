import React from "react";
import About from "./About";
import Home from "./Home";

  
  

function NavBar() {
  return (
    <nav> 
      <a href="./Home"> Home</a>
      <a href="./About"> About</a>   
      <Home/>
      <About/>   
    </nav>
    

  );
}
export default NavBar;