import { createStore, applyMiddleware } from 'redux';
import rootReducer from '../redurcers';
import reduxImmutableStateInvariant from 'redux-immutable-state-invariant';

export default function configureStore (initialState) {
  return createStore(
    rootReducer,
    initialState,
    applyRouterMiddleware(reduxImmutableStateInvariant())
  );
}

