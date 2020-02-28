export interface Link {
  path: string;
  name: string;
  imgFileName?: string;
}
export interface MenuItem {
  logo: string;
  logoImg?: string;
  logoPath?: string;
  navItems: Link[];
}
export interface NavbarProps {
  menuItems: MenuItem;
}
export interface HorizontalBarProps extends NavbarProps {
  toggleSidebar: () => void;
}
export interface SidebarProps {
  sidebarVisibility: boolean;
  menuItems: MenuItem;
}
