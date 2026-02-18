import { useState } from "react";
import TopHeader from "./TopHeader";
import BtmHeader from "./BtmHeader";
import "./header.css";
import MenuMobile from "./MenuMobile";

const HeaderLayout = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [categories, setCategories] = useState([]);

  const toggleSidebar = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };
  const closeSidebar = () => {
    setMobileMenuOpen(false);
  };

  const updateCategories = (newCategories) => {
    setCategories(newCategories);
  };

  return (
    <>
      <div className="navbar">
        <TopHeader toggleSidebar={toggleSidebar} />

        <BtmHeader updateCategories={updateCategories} />

        <MenuMobile
          isOpen={mobileMenuOpen}
          closeSidebar={closeSidebar}
          categories={categories}
        />

        {mobileMenuOpen && (
          <div className="overlay" onClick={closeSidebar}></div>
        )}
      </div>
    </>
  );
};
export default HeaderLayout;
