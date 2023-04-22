import React from 'react';
import { Provider } from 'react-redux';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { MemoryRouter } from 'react-router-dom';
import Header from '../components/Header';
import store from '../redux/store';

describe('Header component', () => {
  it('renders the Header component', () => {
    render(
      <Provider store={store}>
        <MemoryRouter>
          <Header />
        </MemoryRouter>
      </Provider>,
    );
    expect(screen.getByTestId('header-container')).toBeInTheDocument();
    expect(screen.getByText('AAPL')).toBeInTheDocument();
  });
});
