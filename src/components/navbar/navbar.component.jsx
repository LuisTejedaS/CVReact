import React from "react";
import "./navbar.styles.css";
import { withRouter } from "react-router-dom";

const Navbar = ({ history }) => (
  <div className="navbar">
    <ul>
      <li className="navbarelement">
        <label onClick={() => history.push("/CVReact/")}>Home</label>
      </li>
      <li className="navbarelement">
        <label onClick={() => history.push("/CVReact/about")}>About me</label>
      </li>
    </ul>
  </div>
);

export default withRouter(Navbar);
