import React, {useContext} from "react";
import { Link } from 'react-router-dom';

import {Button, Menu, MenuItem} from "@material-ui/core";

import { VscMenu } from "react-icons/vsc";

import { ThemeContext } from "../../contexts";

import ThemeSwitch from "./ThemeSwitch";


export default function MobileMenu () {

    const {theme, setTheme} = useContext(ThemeContext);

    const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);

    const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    return (
        <div className={`mobile-menu ${theme}`}>
            <Button aria-controls="simple-menu" aria-haspopup="true" onClick={handleClick}>
                <VscMenu className={`nav-menu-button ${theme}`}/>
            </Button>
            <Menu
                id="simple-menu"
                anchorEl={anchorEl}
                keepMounted
                open={Boolean(anchorEl)}
                onClose={handleClose}
                className={theme}
            >
                <MenuItem
                    style={theme === "dark" ? {backgroundColor: 'rgb(19,19,19)', borderColor: 'rgb(37, 37, 37)', color: 'rgb(255, 255, 255)'} : {backgroundColor: "white"}}
                ><ThemeSwitch theme={theme} setTheme={setTheme}/></MenuItem>
                <MenuItem
                        style={theme === "dark" ? {backgroundColor: 'rgb(19,19,19)', borderColor: 'rgb(37, 37, 37)', color: 'rgb(255, 255, 255)'} : {backgroundColor: "white"}}
                        onClick={handleClose}>
                    <Link className={`mobile-menu-info-link ${theme}`} to='/info'>Info</Link>
                </MenuItem>
            </Menu>
        </div>
    );
}
