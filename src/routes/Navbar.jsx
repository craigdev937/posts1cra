import React from "react";
import { Link } from "react-router-dom";
import { Menu } from "semantic-ui-react";

export const Navbar = () => {
    const pathname = window.location.pathname;
    const path = pathname === "/" ? "home" : pathname.substr(1);
    const [activeItem, setActiveItem] = React.useState(path);

    const handleItemClick = (event, {name}) => setActiveItem(name);

    return (
        <Menu pointing secondary size="massive" color="blue">
            <Menu.Item
                name="home"
                active={activeItem === "home"}
                onClick={handleItemClick}
                as={Link}
                to="/"
            />
            <Menu.Menu position="right">
                <Menu.Item
                    name="register"
                    active={activeItem === "register"}
                    onClick={handleItemClick}
                    as={Link}
                    to="/register"
                />
                <Menu.Item
                    name="login"
                    active={activeItem === "login"}
                    onClick={handleItemClick}
                    as={Link}
                    to="/login"
                />
            </Menu.Menu>
        </Menu>
    );
};



