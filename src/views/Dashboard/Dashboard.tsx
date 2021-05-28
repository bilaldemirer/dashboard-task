/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from 'react';
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
  Container,
  Progress,
  Row,
  Table
} from 'reactstrap';

import { getDashboardSummaryAction } from '../../redux/actions/dashboard';
import { SelectorType } from '../../redux/reducers/types';

import { AppNameEnum, ViewEnum } from '../../libs/models/index';
import { Box } from '@material-ui/core';

type SelectedType = {
  dashboardSummary: any;
};

function Dashboard() {
  const dispatch = useDispatch();

  const { dashboardSummary } = useSelector<SelectorType, SelectedType>(state => ({
    dashboardSummary: state.applicantReducer.dashboardSummary
  }));

  const [appName, SetAppName] = useState('Fun Race 3D');
  const [changeView, setChangeView] = useState('Table View');


  const FUN_RACE_3D = dashboardSummary.filter(x => x.app === 'Fun Race 3D');

  const FOLD_PUZZLE = dashboardSummary.filter(x => x.app === 'Fold Puzzle');

  const JELLY_DYE = dashboardSummary.filter(x => x.app === 'Jelly Dye');

  console.log('dashboar: ', dashboardSummary);
  console.log('view: ', changeView);

  useEffect(() => {
    getDashboardSummaryAction(dispatch);
  }, []);
  return (
    <>
      <Box>
        <CardHeader>
          <ButtonGroup size="lg" block className="offset-5">
            <Button onClick={() => setChangeView('Table View')}>Table View</Button>
            <Button onClick={() => setChangeView('Line View')}>Line View</Button>
          </ButtonGroup>
        </CardHeader>

        {changeView === 'Table View' ? (
          <Card>{dashboardSummary && <DashboardTable data={dashboardSummary}/>}</Card>
        ) : null}
        {changeView === 'Line View' ? (
          <Card>
            <CardHeader>
              <ButtonGroup>
                <Button color={appName === 'Fun Race 3D' ? 'success' : 'danger'} onClick={() => SetAppName('Fun Race 3D')}>Fun Race 3D</Button>
                <Button color={appName === 'Fold Puzzle' ? 'success' : 'danger'} onClick={() => SetAppName('Fold Puzzle')}>Fold Puzzle</Button>
                <Button color={appName === 'Jelly Dye' ? 'success' : 'danger'} onClick={() => SetAppName('Jelly Dye')}>Jelly Dye</Button>
              </ButtonGroup>
            </CardHeader>
            <CardBody>
              {appName === 'Fun Race 3D' ? <DashboardChart summaryByGame={FUN_RACE_3D} /> : ''}
              {appName === 'Fold Puzzle' ? <DashboardChart summaryByGame={FOLD_PUZZLE} /> : ''}
              {appName === 'Jelly Dye' ? <DashboardChart summaryByGame={JELLY_DYE} /> : ''}
            </CardBody>
          </Card>
        ) : null}
      </Box>
    </>
  );
}

export default Dashboard;
