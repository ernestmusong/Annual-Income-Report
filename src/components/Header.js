import React, { useState } from 'react';
import { FaMicrophone, FaAngleLeft } from 'react-icons/fa';
import { RiSettings2Fill } from 'react-icons/ri';
import { useSelector } from 'react-redux';
import { useNavigate, NavLink } from 'react-router-dom';

const Header = () => {
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
    <>
      <nav className="navbar" data-testid="header-container">
        <div className="logo" data-testid="logo">
          <NavLink to="/">
            <div className="iconWrap">
              <FaAngleLeft />
            </div>
          </NavLink>
          <h4 style={{ fontSize: '1rem', color: '#fff' }}>AAPL</h4>
        </div>
        <form className="search-wrapper" onSubmit={handleSubmit}>
          <label className="search-label" htmlFor="year">
            <input
              type="search"
              name="year"
              id="year"
              className="search-input"
              placeholder="Search by year ex. 2020"
              value={searchQuery}
              onChange={handleChange}
            />
          </label>
          <button type="submit" id="search-button">
            <FaMicrophone />
          </button>
        </form>
        <div className="settings">
          <RiSettings2Fill />
        </div>
      </nav>
    </>
  );
};

export default Header;
