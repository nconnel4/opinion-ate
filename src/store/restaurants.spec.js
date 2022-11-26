import {createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import restaurantsReducers from './restaurants/reducers';
import {loadRestaurants} from './restaurants/actions';

describe('restaurants', () => {
  describe('initially', () => {
    const initialState = {};

    const store = createStore(
      restaurantsReducers,
      initialState,
      applyMiddleware(thunk),
    );

    expect(store.getState().loading).toEqual(false);
  });
  describe('loadRestaurants action', () => {
    describe('when loading succeeds', () => {
      const records = [
        {id: 1, name: 'Sushi Place'},
        {id: 2, name: 'Pizza Place'},
      ];

      let store;

      beforeEach(() => {
        const api = {
          loadRestaurants: () => Promise.resolve(records),
        };

        const initialState = {
          records: [],
        };

        store = createStore(
          restaurantsReducers,
          initialState,
          applyMiddleware(thunk.withExtraArgument(api)),
        );

        return store.dispatch(loadRestaurants());
      });

      it('stores the restaurants', () => {
        expect(store.getState().records).toEqual(records);
      });

      it('clears the loading flag', () => {
        expect(store.getState().loading).toEqual(false);
      });
    });
    describe('while loading', () => {
      it('sets a loading flag', () => {
        const api = {
          loadRestaurants: () => new Promise(() => {}),
        };

        const initialState = {};

        const store = createStore(
          restaurantsReducers,
          initialState,
          applyMiddleware(thunk.withExtraArgument(api)),
        );

        store.dispatch(loadRestaurants());
        expect(store.getState().loading).toEqual(true);
      });
    });
  });
});
