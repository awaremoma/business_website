import React, { Component } from "react";
import { Sidenav, Nav, Dropdown } from "rsuite";
const SideNavigation = () => {
  return (
    <Sidenav className="sidenav-position">
      <Sidenav.Body>
        <Nav>
          <Nav.Item eventKey="1">Dashboard</Nav.Item>
          <Nav.Item eventKey="2">User Group</Nav.Item>
          <Dropdown placement="rightStart" eventKey="3" title="Advanced">
            <Dropdown.Item eventKey="3-1">Geo</Dropdown.Item>
            <Dropdown.Item eventKey="3-2">Devices</Dropdown.Item>
            <Dropdown.Item eventKey="3-3">Loyalty</Dropdown.Item>
            <Dropdown.Item eventKey="3-4">Visit Depth</Dropdown.Item>
          </Dropdown>
          <Dropdown placement="rightStart" eventKey="4" title="Settings">
            <Dropdown.Item eventKey="4-1">Applications</Dropdown.Item>
            <Dropdown.Item eventKey="4-2">Channels</Dropdown.Item>
            <Dropdown.Item eventKey="4-3">Versions</Dropdown.Item>
            <Dropdown.Menu eventKey="4-5" title="Custom Action">
              <Dropdown.Item eventKey="4-5-1">Action Name</Dropdown.Item>
              <Dropdown.Item eventKey="4-5-2">Action Params</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
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
