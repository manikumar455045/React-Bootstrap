import React from 'react';
import Navbar from "./components/Navbar";
import LandingComponent from "./components/LandingComponent";
import Card from "./components/Card";
let App  = () => {
  return (
    <React.Fragment>
        <Navbar />
        <LandingComponent />
        <Card />
     </React.Fragment>
  );
}

export default App;
