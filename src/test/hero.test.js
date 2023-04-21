import React from 'react';
import { Provider } from 'react-redux';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import store from '../redux/store';
import Hero from '../components/Hero';

describe('Hero component', () => {
  it('renders the Hero component', () => {
    render(
      <Provider store={store}>
        <Hero />
      </Provider>,
    );

    expect(screen.getByTestId('hero-container')).toBeInTheDocument();
  });
});
