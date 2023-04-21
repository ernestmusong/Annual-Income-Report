/**
 * @jest-environment jsdom
 */
import React from 'react';
import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import Home from '../components/Home';
import store from '../redux/store';

describe('Home component', () => {
  test('renders "Statements" component', () => {
    render(
      <Provider store={store}>
        <Home />
      </Provider>,
    );
    const statementsElement = screen.getByTestId('statements');
    expect(statementsElement).toBeInTheDocument();
  });
});
