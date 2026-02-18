import { Search } from "lucide-react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import React, { useEffect, useState } from "react";

function SearchBox() {
  const [searchTerm, setSearchTerm] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const navigate = useNavigate();
  const location = useLocation();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (searchTerm.trim()) {
      navigate(`/search?query=${encodeURIComponent(searchTerm.trim())}`);
    }
    setSuggestions([]);
  };

  useEffect(() => {
    const fetchSuggestion = async () => {
      if (!searchTerm.trim()) {
        setSuggestions([]);
        return;
      }

      try {
        const res = await fetch(
          `https://dummyjson.com/products/search?q=${searchTerm}`,
        );
        const data = await res.json();

        setSuggestions(data.products.slice(0, 5) || []);
      } catch (error) {
        console.error("Search Error : ", error);
        setSuggestions([]);
      }
    };
    const debonuce = setTimeout(() => {
      fetchSuggestion();
    }, 300);
    return () => clearTimeout(debonuce);
  }, [searchTerm]);

  useEffect(() => {
    setSuggestions([]);
  }, [location]);

  return (
    <>
      <form onSubmit={handleSubmit} className="search_box">
        <input
          type="text"
          name="search"
          placeholder="Search For Products..."
          onChange={(e) => setSearchTerm(e.target.value)}
          autoComplete="off"
        />
        <button type="submit">
          <Search />
        </button>
      </form>

      {suggestions && (
        <ul className="suggestions">
          {suggestions.map((item) => (
            <Link to={`/products/${item.id}`} key={item.id}>
              <li key={item.id}>
                <img src={item.images[0]} alt="" />
                <span>{item.title}</span>
              </li>
            </Link>
          ))}
        </ul>
      )}
    </>
  );
}

export default SearchBox;
