/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import DashboardTable from '../../components/Tables/DashboardTable';

import { getDashboardSummaryAction } from '../../redux/actions/dashboard';
import { SelectorType } from '../../redux/reducers/types';

type SelectedType = {
  dashboardSummary: any;
};

function Dashboard() {
  const dispatch = useDispatch();

  const { dashboardSummary } = useSelector<SelectorType, SelectedType>(state => ({
    dashboardSummary: state.applicantReducer.dashboardSummary
  }));

  console.log('dashboar: ', dashboardSummary);

  useEffect(() => {
    getDashboardSummaryAction(dispatch);
  }, []);
  return <>{dashboardSummary && <DashboardTable data={dashboardSummary} />}</>;
}

export default Dashboard;
