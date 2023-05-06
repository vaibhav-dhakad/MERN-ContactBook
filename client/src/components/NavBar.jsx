import React from 'react';
import {AppBar,Toolbar,styled} from '@mui/material';
import { NavLink } from 'react-router-dom';

const Header = styled(AppBar)`
    background: #111111;
`;
    
const Tabs = styled(NavLink)`
    color: #FFFFFF;
    margin-right: 20px;
    color: inherit;
    text-decoration: none;
    font-size: 20px;
`;


function NavBar(props) {
    return (
        <Header style={{position: "static"}}>
            <Toolbar>
                <Tabs to='/'>ContactBook</Tabs>
                <Tabs to='/all'>All Users</Tabs>
                <Tabs to='/add'>Add User</Tabs>
            </Toolbar>
        </Header>
    );
}

export default NavBar;