import React from 'react';
import { Provider } from 'react-redux';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { MemoryRouter } from 'react-router-dom';
import Statement from 'components/Statement';
import store from '../redux/store';

describe('Statement component', () => {
  it('renders the Statement component', () => {
    const item = {
      id: '1',
      calendarYear: '2022',
    };
    render(
      <Provider store={store}>
        <MemoryRouter>
          <Statement item={item} />
        </MemoryRouter>
      </Provider>,
    );
    expect(screen.getByTestId('statement-container')).toBeInTheDocument();
    expect(screen.getByText('Year')).toBeInTheDocument();
    expect(screen.getByText('2022')).toBeInTheDocument();
  });
});
