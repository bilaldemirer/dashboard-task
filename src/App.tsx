import { Route, Switch, Router } from 'react-router-dom';
import * as Sentry from '@sentry/react';
import { createBrowserHistory } from 'history';
import '@doggoapp/doggo-ts-admin/dist/index.css'
import '@coreui/icons/css/coreui-icons.min.css'
import 'flag-icon-css/css/flag-icon.min.css'
import 'font-awesome/css/font-awesome.min.css'
import 'simple-line-icons/css/simple-line-icons.css'
import 'react-table-6/react-table.css'
import '@coreui/coreui/dist/css/coreui.css'
import '@coreui/coreui/dist/css/bootstrap.css' 


import { DefaultLayout } from './containers';


const history = createBrowserHistory();

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
