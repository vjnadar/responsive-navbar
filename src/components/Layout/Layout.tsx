import React from "react";

import Navbar from "../Navbar/Navbar";
import {MenuItem} from '../types/types'
import "./Layout.scss";

const Layout: React.FC = props => {
  const menuItems:MenuItem = { logo:"Logo",logoImg:"logo512.png",navItems:[{path:"#",name:"Cart",imgFileName:"shopping-cart.png"},{path:"/",name:"Home"},{path:"/login",name:"Login"}] };
  return (
    <div>
      <Navbar menuItems={menuItems} />
      <main className="main">{props.children}</main>
    </div>
  );
};
export default Layout;