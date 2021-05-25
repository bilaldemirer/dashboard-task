import { take, call, put } from 'redux-saga/effects';

// actions
import ACTION_TYPE from '../../actions/dashboard';
import { REQUEST, SUCCESS, FAILURE } from '../../actions/action-type.util';

// services
import { dashboardServices } from '../../services';

export function* getDashboardSummarySaga() {
  while (true) {
    try {
      // take action
      yield take(REQUEST(ACTION_TYPE.GET_DASHBOARD_SUMMARY));

      // service call
      const { data } = yield call([
        dashboardServices,
        dashboardServices.getDashboardSummary
      ]);

      // change state
      yield put({
        type: SUCCESS(ACTION_TYPE.GET_DASHBOARD_SUMMARY),
        payload: { data }
      });
    } catch (error) {
      yield put({
        type: FAILURE(ACTION_TYPE.GET_DASHBOARD_SUMMARY),
        payload: error.message
      });
    }
  }
}

