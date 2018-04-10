import React from "react";
import Header from "./Header";

const Help = () => (
  <div className="container">
    <Header tagline="Your question will be answered here !" />
    <dl>
      <dt>Where is the data stored?</dt>
      <dt>We store all the information in your browser's LocalStorage</dt>
    </dl>
  </div>
);

export default Help;
