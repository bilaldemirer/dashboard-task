import { Provider } from 'react-redux';
import PropTypes from 'prop-types';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { PersistGate } from 'redux-persist/integration/react';
import * as Sentry from '@sentry/react';

import App from './App';
import './polyfill';
// import './index.css';
import { store, persistor } from './redux/store';

const Root = ({ store }: any) => (
  <Sentry.ErrorBoundary fallback={'An error has occurred'}>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <Router>
          <Route path="/:filter?" component={App} />
        </Router>
      </PersistGate>
    </Provider>
  </Sentry.ErrorBoundary>
);

Root.propTypes = {
  store: PropTypes.object.isRequired
};

require('dotenv').config();
ReactDOM.render(<Root store={store} />, document.getElementById('root'));
