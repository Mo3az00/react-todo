import React from "react";

// Stateless functional component
const Header = props => (
  <header className="header">
    {/* We acre building a ToDo app! */}
    <h1 className="foo">What to do?</h1>
    <span className="tagline">{props.tagline}</span>
  </header>
);

export default Header;
