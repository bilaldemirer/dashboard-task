import { Route, Switch, Router } from 'react-router-dom';
import * as Sentry from '@sentry/react';
import { Integrations } from '@sentry/tracing';
import { createBrowserHistory } from 'history';
// import './index.css';
// Styles
// // for styled components, you should import these file in the top level component.
import '@doggoapp/doggo-ts-admin/dist/index.css';
import '@coreui/icons/css/coreui-icons.min.css';
import 'flag-icon-css/css/flag-icon.min.css';
import 'font-awesome/css/font-awesome.min.css';
import 'simple-line-icons/css/simple-line-icons.css';
import '@coreui/coreui/dist/css/coreui.css';
import '@coreui/coreui/dist/css/bootstrap.css';

// Containers
import { DefaultLayout } from './containers';
// Pages

const history = createBrowserHistory();

if (process.env.NODE_ENV === 'production') {
  Sentry.init({
    dsn: 'https://ad173cea08fb4f98bac7dc5619c4cd38@o591403.ingest.sentry.io/5740367',
    integrations: [
      new Integrations.BrowserTracing({
        // Can also use reactRouterV3Instrumentation or reactRouterV4Instrumentation
        routingInstrumentation: Sentry.reactRouterV5Instrumentation(history)
      })
    ]
  });
}

function App() {
  return (
    <Router history={history}>
      <Switch>
        <Route path="/" component={DefaultLayout} />
      </Switch>
    </Router>
  );
}

export default Sentry.withProfiler(App);
