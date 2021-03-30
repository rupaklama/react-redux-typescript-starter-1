// Using other function from Redux - createStore ()
// to put all Reducers into the Redux Store object & create Global State object
// applyMiddleware - to add middleware like redux thunk & others
import { createStore, applyMiddleware } from 'redux';

// redux dev tool library
import { composeWithDevTools } from 'redux-devtools-extension';

// redux thunk middleware
import thunk from 'redux-thunk';

// all our reducers
import { reducers } from './reducers';

// declare initial Global state object
const initialState = {};

// redux thunk middleware
const middleware = [thunk];

// STORE is the collections of different Reducers to create global state object.
export const store = createStore(
  reducers,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
);
