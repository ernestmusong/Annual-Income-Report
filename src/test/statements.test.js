import React from 'react';
import { Provider } from 'react-redux';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { MemoryRouter } from 'react-router-dom';
import store from '../redux/store';
import Statements from '../components/Statements';

describe('Statements component', () => {
  it('renders the Statements component', () => {
    render(
      <Provider store={store}>
        <MemoryRouter>
          <Statements />
        </MemoryRouter>
      </Provider>,
    );
    expect(screen.getByText('Loading...')).toBeInTheDocument();
  });
});
