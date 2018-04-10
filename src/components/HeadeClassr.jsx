import React, { Fragment } from "react";

// class component
class Header extends React.Component {
  render() {
    return (
      <Fragment>
        {/* We acre building a ToDo app! */}
        <h1 className="foo">What to do?</h1>
        <span className="tagline">{this.props.tagline}</span>
      </Fragment>
    );
  }
}

export default Header;
