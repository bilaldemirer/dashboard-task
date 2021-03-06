import  { DashboardSummaryResponse } from '../../libs/models/index';
// SelectorTypes
export type SelectorType = {
  applicantReducer: DashboardReducerType;
};

// Reducers
export type DashboardReducerType = {
  dashboardSummary: DashboardSummaryResponse[];
  isLoading: boolean;
  error: string | Object;
};
