import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import { MemoryRouter } from 'react-router-dom';
import Login from '../../containers/Login';

describe('It renders login page', () => {
  const mockstore = configureStore([thunk]);
  const initialState = {};
  const store = mockstore(initialState);

  const history = {};

  test('it renders inputs for email', () => {
    render(
      <Provider store={store}>
        <Login history={history} />
      </Provider>,
      { wrapper: MemoryRouter },
    );
    expect(screen.getByText('Email:')).toBeInTheDocument();
  });
  test('it renders inputs for password', () => {
    render(
      <Provider store={store}>
        <Login history={history} />
      </Provider>,
      { wrapper: MemoryRouter },
    );
    expect(screen.getByText('Password:')).toBeInTheDocument();
  });
  test('it renders button login', () => {
    render(
      <Provider store={store}>
        <Login history={history} />
      </Provider>,
      { wrapper: MemoryRouter },
    );

    const loginBtn = document.querySelector('button');
    expect(loginBtn).toHaveTextContent('LOGIN');
  });
});
