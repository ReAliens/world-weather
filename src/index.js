import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { ApolloProvider } from '@apollo/client';
import App from './App';
import { store, persistor } from './redux/store';
import client from './client';

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <PersistGate persistor={persistor}>
        <ApolloProvider client={client}>
          <App />
        </ApolloProvider>
      </PersistGate>
    </BrowserRouter>
  </Provider>,
  document.getElementById('root'),
);
