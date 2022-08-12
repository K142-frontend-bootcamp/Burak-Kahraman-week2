import React from "react";
import { Link } from "react-router-dom";
import "../all.css";

class HeaderTop extends React.Component {
  constructor() {
    super();
    this.state = {
        name:'Log In'
    };
  }


  render() {
    return (
      <nav className="header">
        <h2>W-DATA</h2>
        <Link
          to="/logged"
        >
          {this.state.name}
        </Link>
      </nav>
    );
  }
}
export default HeaderTop;
