import React from "react";
//import { Navbar, Nav, Dropdown } from "rsuite";
import { Navbar, Container, Nav, NavDropdown } from "react-bootstrap";
const NavigationBar = ({ handleToggleSideNav }) => {
  return (
    <Navbar
      bg="white"
      expand="lg"
      className="d-flex justify-content-center"
      fixed="top"
    >
      <div style={{ width: "100%" }} className="row">
        <div className="col-2 d-flex align-items-center">
          <i
            className="fas fa-bars"
            onClick={han}
            style={{ cursor: "pointer" }}
          ></i>
        </div>
        <div className="col-10 d-flex justify-content-center">
          <h5 className="nav-header-text">AwareMoma</h5>
        </div>
      </div>
    </Navbar>
  );
};

export default NavigationBar;
