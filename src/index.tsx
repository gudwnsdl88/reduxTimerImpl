import React from 'react';
import ReactDOM from 'react-dom';
import AppContainer from './Component/App/AppContainer';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import reducer from './reducer';

// 스토어 생성
let store = createStore(reducer);
// 스토어에서 state 값 가져오기
// console.log(store.getState());

ReactDOM.render(
  <Provider store={store}>
    <AppContainer />
  </Provider>,
  document.getElementById('root')
);
