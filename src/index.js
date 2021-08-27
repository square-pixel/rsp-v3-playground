
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider, defaultTheme } from '@adobe/react-spectrum';
import { TestComponent } from './TestComponent';

function App() {
    return (
      <Provider theme={defaultTheme}>
          <TestComponent/>
      </Provider>
    );
  }

ReactDOM.render(<App/>, document.getElementById('app'));

