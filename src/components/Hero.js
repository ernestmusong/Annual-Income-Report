import React from 'react';
import PropTypes from 'prop-types';

function Hero({ title1, title2 }) {
  return (
    <div className="hero">
      <div className="textWrap">
        <h1>{title1}</h1>
        <h2>{title2}</h2>
      </div>
    </div>
  );
}

Hero.propTypes = {
  title1: PropTypes.string.isRequired,
  title2: PropTypes.string.isRequired,
};

export default Hero;
