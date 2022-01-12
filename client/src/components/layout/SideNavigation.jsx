import React, { Component } from "react";
import { Sidenav, Nav, Dropdown, Icon } from "rsuite";
import { NavLink } from "react-router-dom";
const SideNavigation = () => {
  return (
    <Sidenav className="sidenav-position" style={{ paddingTop: "100px" }}>
      <Sidenav.Body>
        <Nav>
          <Nav.Item icon={<Icon icon="home" />} eventKey="1">
            <NavLink style={{ border: "none !important" }} to="/home">
              Home
            </NavLink>
          </Nav.Item>
          <Nav.Item eventKey="2">Journaling</Nav.Item>
          <Nav.Item eventKey="2">Blog</Nav.Item>
          <Nav.Item icon={<Icon icon="mail" />} eventKey="2">
            <NavLink style={{ border: "none !important" }} to="/contact">
              Contact Me
            </NavLink>
          </Nav.Item>
          <Nav.Item eventKey="2">Podcast</Nav.Item>
          <Nav.Item eventKey="2">School of Sexual Healing</Nav.Item>
        </Nav>
      </Sidenav.Body>
    </Sidenav>
  );
};

export default SideNavigation;

// expanded={expanded}
// defaultOpenKeys={['3', '4']}
// activeKey={activeKey}
// onSelect={setActiveKey}
