import React, { useState } from "react";

import { NavbarProps} from "../types/types";
import HorizontalBar from "./HorizontalBar/HorizontalBar";
import Backdrop from "../Backdrop/Backdrop";
import Sidebar from "./Sidebar/Sidebar";

const Navbar: React.FC<NavbarProps> = ({menuItems}) => {
  const [sidebarVisibility, setSidebarVisibility] = useState(false);
  const toggleSidebar = (): void => {
    setSidebarVisibility(prevState => {
      return !prevState;
    });
  };
  let backdrop: (null |JSX.Element) = null;
  if (sidebarVisibility)
    backdrop = (
      <>
        <Backdrop closeModal={toggleSidebar} />
      </>
    );
  return (
    <div className="container">
      <HorizontalBar menuItems={menuItems} toggleSidebar={toggleSidebar} />
      <Sidebar sidebarVisibility={sidebarVisibility} menuItems={menuItems}/>
      {backdrop}
    </div>
  );
};
export default Navbar;
