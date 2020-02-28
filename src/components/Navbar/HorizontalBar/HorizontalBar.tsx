import React from "react";
import { NavLink as Link } from "react-router-dom";

import ToggleButton from "../ToggleButton/ToggleButton";
import { HorizontalBarProps } from "../../types/types";
import "./HorizontalBar.scss";

const HorizontalBar: React.FC<HorizontalBarProps> = ({
  menuItems,
  toggleSidebar
}) => {
  return (
    <header className="mainHB">
      <nav className="nav">
        <div className="toggle-button" onClick={toggleSidebar}>
          <ToggleButton />
        </div>
        <div className="logo">
          {menuItems.logoImg ? (
            <>
              <img src={`/images/${menuItems.logoImg}`} alt={menuItems.logo} />
              <span>{menuItems.logo}</span>
            </>
          ) : (
            <a href={menuItems.logoPath ? menuItems.logoPath : "#"}>
              {menuItems.logo}
            </a>
          )}
        </div>
        <div className="space" />
        <div className="navImg">
          {menuItems.navItems.map((item, idx) =>
            item.imgFileName ? (
              <Link to={item.path} key={idx}>
                <img
                  className="imgIcon"
                  src={`images/${item.imgFileName}`}
                  alt={item.name}
                />
              </Link>
            ) : (
              <></>
            )
          )}
        </div>
        <div className="nav-items">
          <ul>
            {menuItems.navItems.map((item, idx) =>
              !item.imgFileName ? (
                <>
                  <Link
                    to={item.path}
                    key={idx}
                    className="hb-list-item"
                    activeClassName="is-active"
                    exact
                  >
                    <li>{item.name}</li>
                  </Link>
                </>
              ) : (
                <></>
              )
            )}
          </ul>
        </div>
      </nav>
    </header>
  );
};
export default HorizontalBar;
