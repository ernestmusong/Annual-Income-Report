import React from 'react';
import { Provider } from 'react-redux';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { MemoryRouter } from 'react-router-dom';
import StatementDetail from 'components/StatementDetail';
import store from '../redux/store';

describe('Statement detail component', () => {
  it('renders the Statement detail component', () => {
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
        <MemoryRouter>
          <StatementDetail detail={detail} />
        </MemoryRouter>
      </Provider>,
    );
    expect(screen.getByText('year')).toBeInTheDocument();
    expect(screen.getByText('company')).toBeInTheDocument();
  });
});
