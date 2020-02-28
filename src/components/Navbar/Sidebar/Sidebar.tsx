import React from "react";

import { SidebarProps } from "../../types/types";
import { NavLink as Link } from "react-router-dom";
import "./Sidebar.scss";

const Sidebar: React.FC<SidebarProps> = ({ menuItems, sidebarVisibility }) => {
  let visibility = "side-bar";
  const imgPath = menuItems.logoImg ? `/images/${menuItems.logoImg}` : "";
  console.log(imgPath);
  if (sidebarVisibility) {
    visibility = "side-bar open";
  }
  console.log(visibility);
  return (
    <>
      <nav className={visibility}>
        <div className="nav-items">
          <div className="logo">
            {menuItems.logoImg ? (
              <>
                <img src={imgPath} alt={menuItems.logo} />
                <span>{menuItems.logo}</span>
              </>
            ) : (
              <></>
            )}
          </div>
          {!menuItems.logoImg ? (
            <a
              className="logo-less"
              href={menuItems.logoPath ? menuItems.logoPath : "#"}
            >
              {menuItems.logo}
            </a>
          ) : (
            <></>
          )}
          <ul>
            {menuItems.navItems.map((item, idx) =>!item.imgFileName ?  (
              <Link
                to={item.path}
                key={idx}
                className="list-item"
                activeClassName="isActive"
                exact
              >
                <li>{item.name}</li>
              </Link>
            ):null)}
          </ul>
        </div>
      </nav>
    </>
  );
};
export default Sidebar;
