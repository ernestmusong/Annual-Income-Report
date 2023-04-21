import React from 'react';
import PropTypes from 'prop-types';
import { FaArrowAltCircleRight } from 'react-icons/fa';
import { NavLink } from 'react-router-dom';

function Statement(props) {
  const { item } = props;
  return (
    <li
      className="listItem"
    >
      <NavLink to={`/statement/${item.id}`} className="itemLink">
        <div className="iconWrap">
          <FaArrowAltCircleRight />
        </div>
        <div className="yearWrap">
          <p>Year</p>
          <h3>{item.calendarYear}</h3>
        </div>
      </NavLink>
    </li>
  );
}

Statement.propTypes = {
  item: PropTypes.oneOfType([PropTypes.object]).isRequired,
};

export default Statement;
