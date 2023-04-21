import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { Provider } from 'react-redux';
import StatementDetail from 'components/StatementDetail';
import store from '../redux/store';

describe('StatementDetailPage component', () => {
  it('renders the StatementDetailPage component', () => {
    const detail = {
      id: '1',
      calendarYear: '2022',
      symbol: 'AAPL',
      revenue: '19000000',
      period: 'fy',
      grossProfit: '8766666',
      otherExpenses: '2884777',
      netIncome: '16666',
    };
    render(
      <Provider store={store}>
        <StatementDetail detail={detail} />
      </Provider>,
    );
    expect(screen.getByText('year')).toBeInTheDocument();
    expect(screen.getByText('company')).toBeInTheDocument();
  });
});
