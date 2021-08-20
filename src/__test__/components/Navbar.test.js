import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { MemoryRouter } from 'react-router-dom';
import configureStore from 'redux-mock-store';
import { Provider } from 'react-redux';
import Navbar from '../../components/Navbar';

describe('It renders the navbar', () => {
  const initialState = { authorization: { username: '' } };
  const mockStore = configureStore();
  const store = mockStore(initialState);

  test('It has a title', () => {
    render(
      <Provider store={store}>
        <Navbar />
      </Provider>,
      { wrapper: MemoryRouter },
    );
    expect(screen.getByText('Central Kitchen')).toBeInTheDocument();
  });
  test('It has button to workshops', () => {
    render(
      <Provider store={store}>
        <Navbar />
      </Provider>,
      { wrapper: MemoryRouter },
    );
    expect(screen.getByText('WORKSHOPS')).toBeInTheDocument();
  });
  test('It has button to login', () => {
    render(
      <Provider store={store}>
        <Navbar />
      </Provider>,
      { wrapper: MemoryRouter },
    );
    expect(screen.getByText('LOGIN')).toBeInTheDocument();
  });
  test('It has button to signup', () => {
    render(
      <Provider store={store}>
        <Navbar />
      </Provider>,
      { wrapper: MemoryRouter },
    );
    expect(screen.getByText('SIGNUP')).toBeInTheDocument();
  });
  test('It has button to dashboard if user is logged in', () => {
    const initialState = {
      authorization: { username: 'achoo', token: '123456' },
    };
    const store = mockStore(initialState);
    render(
      <Provider store={store}>
        <Navbar />
      </Provider>,
      { wrapper: MemoryRouter },
    );
    expect(screen.getByText('DASHBOARD')).toBeInTheDocument();
  });
  test('It has button to logout if user is logged in', () => {
    const initialState = {
      authorization: { username: 'achoo', token: '123456' },
    };
    const store = mockStore(initialState);
    render(
      <Provider store={store}>
        <Navbar />
      </Provider>,
      { wrapper: MemoryRouter },
    );
    expect(screen.getByText('LOGOUT')).toBeInTheDocument();
  });
});
