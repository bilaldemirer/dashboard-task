import { REQUEST } from '../action-type.util';


const ACTION_TYPE = {
  GET_DASHBOARD_SUMMARY: 'GET_DASHBOARD_SUMMARY',
};



export function getDashboardSummaryAction(dispatch: any) {
  dispatch({
    type: REQUEST(ACTION_TYPE.GET_DASHBOARD_SUMMARY)
  });
}


export default ACTION_TYPE;
