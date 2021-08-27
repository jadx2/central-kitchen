import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import { MemoryRouter } from 'react-router-dom';
import WorkshopDetails from '../../containers/WorkshopDetails';

describe('It renders the workshop details', () => {
  jest.mock('react-router-dom', () => ({
    ...jest.requireActual('react-router-dom'),
    useParams: jest.fn().mockReturnValue({ workshopId: 1 }),
  }));

  const mockstore = configureStore([thunk]);
  const initialState = {
    authorization: { id: 1, token: '123456' },
    details: {
      id: 1,
      title: 'Sashimi',
      description: 'A sashimi class',
    },
    menu: ['dish1', 'dish2', 'dish3'],
  };
  const store = mockstore(initialState);
  const history = {};

  test('it has workshop title', () => {
    render(
      <Provider store={store}>
        <WorkshopDetails history={history} />
      </Provider>,
      { wrapper: MemoryRouter },
    );
    expect(screen.getByText('Sashimi')).toBeInTheDocument();
  });
  test('it has workshop description', () => {
    render(
      <Provider store={store}>
        <WorkshopDetails history={history} />
      </Provider>,
      { wrapper: MemoryRouter },
    );
    expect(screen.getByText('A sashimi class')).toBeInTheDocument();
  });
  test('it has workshop menu', () => {
    render(
      <Provider store={store}>
        <WorkshopDetails history={history} />
      </Provider>,
      { wrapper: MemoryRouter },
    );
    expect(screen.getByText('dish1')).toBeInTheDocument();
    expect(screen.getByText('dish2')).toBeInTheDocument();
    expect(screen.getByText('dish3')).toBeInTheDocument();
  });
});
