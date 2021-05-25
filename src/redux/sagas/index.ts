import { fork, all } from 'redux-saga/effects';

import {
  getDashboardSummarySaga
} from './dashboard';


export default function* root() {
  yield all([
    fork(getDashboardSummarySaga)
  ]);
}
