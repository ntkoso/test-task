import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createGlobalStyle } from 'styled-components';
import { store } from './setup';

const GlobalStyle = createGlobalStyle`

`;

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <GlobalStyle>
        <div>
          Вывести лист контрибьютеров репозитория, который был введен в форму
        </div>
        </GlobalStyle>
      </Provider>
    );
  }
}

export default App;
