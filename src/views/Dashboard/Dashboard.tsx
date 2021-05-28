/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import DashboardChart from '../../components/Charts/DashboardChart';
import DashboardTable from '../../components/Tables/DashboardTable';
import {
  Badge,
  Button,
  ButtonGroup,
  ButtonToolbar,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  CardTitle,
  Col,
  Progress,
  Row,
  Table
} from 'reactstrap';

import { getDashboardSummaryAction } from '../../redux/actions/dashboard';
import { SelectorType } from '../../redux/reducers/types';
import Data from '../../components/Data'

type SelectedType = {
  dashboardSummary: any;
};

function Dashboard() {
  const dispatch = useDispatch();

  const { dashboardSummary } = useSelector<SelectorType, SelectedType>(state => ({
    dashboardSummary: state.applicantReducer.dashboardSummary
  }));



  const FUN_RACE_3D = dashboardSummary.filter(x => x.app === 'Fun Race 3D');
  const FUN_RACE_3D_ANDROID = FUN_RACE_3D.filter(x => x.platform === 'Android');
  const FUN_RACE_3D_IOS = FUN_RACE_3D.filter(x => x.platform === 'iOS');

  const FOLD_PUZZLE = dashboardSummary.filter(x => x.app === 'Fold Puzzle');
  const FOLD_PUZZLE_ANDROID = FOLD_PUZZLE.filter(x => x.platform === 'Android');
  const FOLD_PUZZLE_IOS = FOLD_PUZZLE.filter(x => x.platform === 'iOS');

  const JELLY_DYE = dashboardSummary.filter(x => x.app === 'Jelly Dye');
  const JELLY_DYE_ANDROID = JELLY_DYE.filter(x => x.platform === 'Android');
  const JELLY_DYE_IOS = JELLY_DYE.filter(x => x.platform === 'iOS');



  

  console.log('dashboar: ', dashboardSummary);

  useEffect(() => {
    getDashboardSummaryAction(dispatch);
  }, []);
  return (
    <>
    <div>
     <Row>
       <Col>
       {FUN_RACE_3D && <DashboardChart summaryByGame={FUN_RACE_3D}  summaryByAndroid={FUN_RACE_3D_ANDROID} summaryByIos={FUN_RACE_3D_IOS}   />}
      
     
       {FOLD_PUZZLE && <DashboardChart summaryByGame={FOLD_PUZZLE} summaryByAndroid={FOLD_PUZZLE_ANDROID} summaryByIos={FOLD_PUZZLE_IOS}  />}
     
      
       {JELLY_DYE && <DashboardChart summaryByGame={JELLY_DYE} summaryByAndroid={JELLY_DYE_ANDROID} summaryByIos={JELLY_DYE_IOS}   />}
      </Col>
     </Row>

      {dashboardSummary && <DashboardTable data={dashboardSummary} />}
     
    </div>
    </>
  );
}

export default Dashboard;
