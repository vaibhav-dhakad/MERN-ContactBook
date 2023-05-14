import React from "react";
import { AppBar, Toolbar, styled } from "@mui/material";
import { NavLink } from "react-router-dom";

const Header = styled(AppBar)`
  background: #111111;
`;

const Tabs = styled(NavLink)`
  color: #ffffff;
  margin-right: 20px;
  color: inherit;
  text-decoration: none;
  font-size: 20px;
`;

function NavBar(props) {
  return (
    <Header style={{ position: "static" }}>
      <Toolbar>
        <Tabs to="/homepage">ContactBook</Tabs>
        <Tabs to="/add">Add User</Tabs>
        <Tabs to="/all">All Users</Tabs>
      </Toolbar>
    </Header>
  );
}

export default NavBar;
