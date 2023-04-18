import React, { useState } from 'react';
import { FaSearch } from 'react-icons/fa';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

const Navbar = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const { data } = useSelector((state) => state.finance);
  const navigate = useNavigate();

  const handleChange = (e) => {
    e.preventDefault();
    setSearchQuery(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const filteredItem = data.find((item) => item.calendarYear === searchQuery);
    if (filteredItem) {
      navigate(`/statement/${filteredItem.id}`);
      setSearchQuery(''); // Clear the form
    }
  };

  return (
    <nav className="navbar">
      <form className="search-wrapper" onSubmit={handleSubmit}>
        <label className="search-label" htmlFor="search-form">
          <input
            type="search"
            name="search-form"
            id="search-form"
            className="search-input"
            placeholder="Enter year ex. 2020"
            value={searchQuery}
            onChange={handleChange}
          />
          <button type="submit" id="search-button">
            <FaSearch />
          </button>
        </label>
      </form>
    </nav>
  );
};

export default Navbar;
