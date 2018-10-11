import React from 'react';
import { render } from 'react-dom';
import Counter from './Counter';
import {Provider} from 'react-redux';
import {createStore} from 'redux';

const initalState = {
  count: 0
};

function reducer(state = initalState, action) {
  switch (action.type){
    case 'Increment' :
    return {
      count: state.count + 1
    };
    case 'Decrement' :
    return {
      count: state.count - 1
    };
    case 'Reset':
    return {
      count:(state.count=0)
    };
    default:
  return state;
  }
}

const store = createStore(reducer);

const App = () => (
  <Provider store={store}>
    <Counter />
  </Provider>
);

render(<App />, document.getElementById('root'));