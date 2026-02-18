import { ChevronDown, DollarSign, Globe, Menu, UserPlus } from "lucide-react";
import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import SearchBox from "./SearchBox";

const NavLinks = [
  { title: "Home", link: "/" },
  { title: "About", link: "/about" },
  { title: "Accessories", link: "/accessories" },
  { title: "Blog", link: "/blog" },
  { title: "Contact", link: "/contact" },
];

function BtmHeader({ updateCategories }) {
  const location = useLocation();
  const [categories, setCategories] = useState([]);
  const [isCategoryOpen, setIsCategoryOpen] = useState(false);

  useEffect(() => {
    setIsCategoryOpen(false);
  }, [location]);

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await fetch(
          "https://dummyjson.com/products/categories",
        );
        const data = await response.json();
        setCategories(data);
        updateCategories(data);
      } catch (error) {
        console.error("Error fetching Categories", error);
      }
    };
    fetchCategories();
  }, [updateCategories]);

  const toggleDropdown = () => {
    setIsCategoryOpen(!isCategoryOpen);
  };

  return (
    <nav className="btm-header">
      <div className="container">
        <div className="left-section">
          <div className="browse-category">
            <button className="browse-btn" onClick={toggleDropdown}>
              <Menu />
              Browse Category{" "}
              <span className={`arrow ${isCategoryOpen ? "open" : ""}`}>
                <ChevronDown />
              </span>
            </button>
            {isCategoryOpen && (
              <ul className="dropdown-menu">
                {categories.map((category) => (
                  <li>
                    <Link key={category.slug} to={`category/${category.slug}`}>
                      {category.name}
                    </Link>
                  </li>
                ))}
              </ul>
            )}
          </div>
        </div>

        <ul className="nav-links">
          {NavLinks.map((item) => (
            <li
              key={item.link}
              className={location.pathname === item.link ? "active" : ""}
            >
              <Link to={item.link}>{item.title}</Link>
            </li>
          ))}
        </ul>

        <div className="right-section">
          <Link to="/">
            <Globe size={20} />
          </Link>
          <Link to="/">
            <DollarSign size={20} />
          </Link>
        </div>

        <div className="search-section">
          <SearchBox />
        </div>
      </div>
    </nav>
  );
}

export default BtmHeader;
