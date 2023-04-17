import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';

function Statement({ statement }) {
  return (
    <NavLink>
      <li className="statement">
        <h3>{statement.symbol}</h3>
        <p>{statement.date}</p>
      </li>
    </NavLink>
  );
}

Statement.propTypes = {
  statement: PropTypes.oneOfType([PropTypes.object]).isRequired,
};

export default Statement;
