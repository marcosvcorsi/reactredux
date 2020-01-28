import React, { Component } from 'react';
import Sidebar from './components/Sidebar';
import Video from './components/Video';

import { Provider } from 'react-redux';
import store from './store';

class App extends Component {
  state = {
    activeLesson: {},
    modules: [
      {
        id: 1,
        title: 'Iniciando com React',
        lessons: [
          { id: 1, title: 'Primeira Aula' },
          { id: 2, title: 'Segunda Aula' },
          { id: 3, title: 'Terceira Aula' }
        ]
      },
      {
        id: 2,
        title: 'Aprendendo Redux',
        lessons: [
          { id: 4, title: 'Quarta Aula' },
          { id: 5, title: 'Quinta Aula' }
        ]
      }
    ]
  };

  render() {
    return (
      <div className="App">
        <Provider store={store}>
          <Video />
          <Sidebar />
        </Provider>
      </div>
    );
  }
}

export default App;
