/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import DashboardChart from '../Charts/DashboardChart';
import DashboardTable from '../Tables/DashboardTable';

import { getDashboardSummaryAction } from '../../redux/actions/dashboard';
import { SelectorType } from '../../redux/reducers/types';

type SelectedType = {
  dashboardSummary: any;
};

function Data() {
  const dispatch = useDispatch();

  const { dashboardSummary } = useSelector<SelectorType, SelectedType>(state => ({
    dashboardSummary: state.applicantReducer.dashboardSummary
  }));

  console.log('dashboar: ', dashboardSummary);

  const FUN_RACE_3D = dashboardSummary.filter(x => x.app === 'Fun Race 3D');
  const FUN_RACE_3D_ANDROID = FUN_RACE_3D.filter(x => x.platform === 'Android');
  const FUN_RACE_3D_IOS = FUN_RACE_3D.filter(x => x.platform === 'iOS');

  const FOLD_PUZZLE = dashboardSummary.filter(x => x.app === 'Fold Puzzle');
  const FOLD_PUZZLE_ANDROID = FOLD_PUZZLE.filter(x => x.platform === 'Android');
  const FOLD_PUZZLE_IOS = FOLD_PUZZLE.filter(x => x.platform === 'iOS');

  const JELLY_DYE = dashboardSummary.filter(x => x.app === 'Jelly Dye');
  const JELLY_DYE_ANDROID = JELLY_DYE.filter(x => x.platform === 'Android');
  const JELLY_DYE_IOS = JELLY_DYE.filter(x => x.platform === 'iOS');


  console.log('ios: ', JELLY_DYE_IOS);


  useEffect(() => {
    getDashboardSummaryAction(dispatch);
  }, []);
  return (
   
     
        
        [FUN_RACE_3D]
        [FUN_RACE_3D_ANDROID]
        [FUN_RACE_3D_IOS]
        [FOLD_PUZZLE]
        [FOLD_PUZZLE_ANDROID]
        [FOLD_PUZZLE_IOS]
        [JELLY_DYE]
        [JELLY_DYE_ANDROID]
        [JELLY_DYE_IOS]

  );
}

export default Data;
