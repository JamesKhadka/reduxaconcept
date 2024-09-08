import { createStore, applyMiddleware } from 'redux';
import reducer from './reducers'; // Ensure this is correctly pointing to a valid reducer
import { thunk } from 'redux-thunk';  // Correct import for thunk middleware

export const store = createStore(
  reducer,
  {},
  applyMiddleware(thunk)
);
