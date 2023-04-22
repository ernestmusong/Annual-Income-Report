import React from 'react';
import { Provider } from 'react-redux';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Home from '../components/Home';
import store from '../redux/store';

describe('Home component', () => {
  it('renders the Home component', () => {
    render(
      <Provider store={store}>
        <Home />
      </Provider>,
    );
    expect(screen.getByTestId('home-container')).toBeInTheDocument();
  });
});
