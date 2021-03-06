import React from 'react';
import { render } from 'react-dom';
import Counter from './Counter';
import Clicks from  './Clicks';
import { Provider } from 'react-redux';
import { createStore } from 'redux';

const initialState = {
  count: 0
};

function reducer(state = initialState, action) {
  switch (action.type) {
    case 'Increment':
      return {
        count: state.count + 1,
        clicks: state.clicks +1
      };
    case 'Decrement':
      return {
        count: state.count - 1,
        clicks: state.clicks +1
      };
    case 'plusFive':
      return {
        count: state.count + 5,
        clicks: state.clicks +1
      };
    case 'minusTen':
      return {
        count: state.count - 10,
        clicks: state.clicks +1
      };
    case 'Reset':
      return {
        count: (state.count = 0),
        clicks: state.clicks = 0
      };
    case 'Multiply':
      return {
        count: (state.count) * (state.count)
      };
    default:
      return state;
  }
}

const store = createStore(reducer);

const App = () => (
  <Provider store={store}>
    <Counter />
    <Clicks />
  </Provider>
);

render(<App />, document.getElementById('root'));