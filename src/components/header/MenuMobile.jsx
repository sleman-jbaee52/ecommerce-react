import { ChevronDown } from "lucide-react";
import React, { useState } from "react";
import { Link } from "react-router-dom";
const NavLinks = [
  { title: "Home", link: "/" },
  { title: "About", link: "/about" },
  { title: "Accessories", link: "/accessories" },
  { title: "Blog", link: "/blog" },
  { title: "Contact", link: "/contact" },
];

const Sidebar = ({ isOpen, closeSidebar, categories }) => {
  const [isCategoriesOpen, setIsCategoriesOpen] = useState(false);
  const toggleCategories = () => {
    setIsCategoriesOpen(!isCategoriesOpen);
  };
  return (
    <div className={`sidebar ${isOpen ? "open" : ""}`}>
      <button className="close-btn" onClick={closeSidebar}>
        X
      </button>
      <ul className="nav-links">
        {NavLinks.map((item) => (
          <li
            key={item.link}
            className={location.pathname === item.link ? "active" : ""}
          >
            <Link to={item.link} onClick={closeSidebar}>
              {item.title}
            </Link>
          </li>
        ))}
      </ul>

      <div className="sidebar-categories">
        <button className="category-toggle" onClick={toggleCategories}>
          Browse Category{" "}
          <span className={`arrow ${isCategoriesOpen ? "open" : ""}`}>
            <ChevronDown />
          </span>
        </button>
        {isCategoriesOpen && (
          <ul className="category-list">
            {categories.map((category) => (
              <li key={caches.id}>
                <Link
                  key={category.slug}
                  to={`category/${category.slug}`}
                  onClick={closeSidebar}
                >
                  {category.name}
                </Link>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default Sidebar;
