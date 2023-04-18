import React from 'react';
import PropTypes from 'prop-types';
import { FaArrowAltCircleRight } from 'react-icons/fa';
import { NavLink } from 'react-router-dom';

function Statement(props) {
  const { item } = props;
  return (
    <li
      className="item"
    >
      <NavLink to={`/statement/${item.id}`}>
        <FaArrowAltCircleRight />
      </NavLink>
      <div>
        <h3>Year</h3>
        <p>{item.calendarYear}</p>
      </div>
    </li>
  );
}

Statement.propTypes = {
  item: PropTypes.oneOfType([PropTypes.object]).isRequired,
};

export default Statement;
