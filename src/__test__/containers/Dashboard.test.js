import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';
import Dashboard from '../../containers/Dashboard';

describe('It renders the dashboard', () => {
  const initialState = {
    authorization: { token: '123456' },
    attendances: [
      {
        id: 1,
        attended_workshop: { title: 'Sashimi' },
        date: 'Monday, October 30th',
      },
    ],
  };
  const middlewares = [thunk];
  const mockStore = configureStore(middlewares);
  const store = mockStore(initialState);

  test('It has a title', () => {
    render(
      <Provider store={store}>
        <Dashboard />
      </Provider>,
    );
    expect(screen.getByText('DASHBOARD')).toBeInTheDocument();
  });
  test('It has attendance title', () => {
    render(
      <Provider store={store}>
        <Dashboard />
      </Provider>,
    );
    expect(screen.getByText('Sashimi')).toBeInTheDocument();
  });
  test('It has attendance date', () => {
    render(
      <Provider store={store}>
        <Dashboard />
      </Provider>,
    );
    expect(screen.getByText('Monday, October 30th')).toBeInTheDocument();
  });
});
