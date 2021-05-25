import { FAILURE, REQUEST, SUCCESS } from '../../actions/action-type.util';
import ACTION_TYPE from '../../actions/dashboard';
import { DashboardReducerType } from '../types';

const initialState: DashboardReducerType = {
  dashboardSummary: [],
  error: null,
  isLoading: false
};

export default function applicantReducer(state = initialState, action: any = {}) {
  switch (action.type) {
    case REQUEST(ACTION_TYPE.GET_DASHBOARD_SUMMARY):
      return {
        ...state,
        error: null,
        isLoading: true
      };
    case SUCCESS(ACTION_TYPE.GET_DASHBOARD_SUMMARY):
      return {
        ...state,
        dashboardSummary: action.payload.data,
        error: null,
        isLoading: false
      };
    case FAILURE(ACTION_TYPE.GET_DASHBOARD_SUMMARY):
      return {
        ...state,
        error: action.payload,
        isLoading: false
      };
    default:
      return state;
  }
}
