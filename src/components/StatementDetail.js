import React from 'react';
import PropTypes from 'prop-types';

function StatementDetail({ detail }) {
  return (
    <>
      <div className="hero" data-testid="hero-container">
        <div className="textWrap">
          <h1>Income Statement for</h1>
          <h2>{detail.calendarYear}</h2>
        </div>
      </div>

      <section className="list-section detailSection">
        <h2>Income Statement Breakdown</h2>
        <table>
          <tbody className="tbody">
            <tr>
              <td>year</td>
              <td>{detail.calendarYear}</td>
            </tr>
            <tr>
              <td>company</td>
              <td>{detail.symbol}</td>
            </tr>
            <tr>
              <td>revenue</td>
              <td>{detail.revenue}</td>
            </tr>
            <tr>
              <td>period</td>
              <td>{detail.period}</td>
            </tr>
            <tr>
              <td>gross Profit</td>
              <td>{detail.grossProfit}</td>
            </tr>
            <tr>
              <td>other Expenses</td>
              <td>{detail.otherExpenses}</td>
            </tr>
            <tr>
              <td>Net Income</td>
              <td>{detail.netIncome}</td>
            </tr>
            <tr>
              <td>EPS</td>
              <td>{detail.eps}</td>
            </tr>
            <tr>
              <td>about us</td>
              <td><a href={detail.finalLink}>visit link</a></td>
            </tr>
          </tbody>
        </table>
      </section>
    </>
  );
}

StatementDetail.propTypes = {
  detail: PropTypes.oneOfType([PropTypes.object]).isRequired,
};

export default StatementDetail;
