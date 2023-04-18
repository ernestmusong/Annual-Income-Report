/* eslint no-console: 0 */
import React from 'react';
import PropTypes from 'prop-types';

function StatementDetail({ detail }) {
  return (
    <div>
      <table>
        <tbody>
          <tr>
            <td>Revenue</td>
            <td>{detail.symbol}</td>
          </tr>
          <tr>
            <td>Net Income</td>
            <td>{detail.calenderYear}</td>
          </tr>
          <tr>
            <td>EPS</td>
            <td>{detail.eps}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

StatementDetail.propTypes = {
  detail: PropTypes.oneOfType([PropTypes.object]).isRequired,
};

export default StatementDetail;
