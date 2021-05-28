import { Component, useEffect, useState } from 'react';
import { Line } from 'react-chartjs-2';
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
import { CustomTooltips } from '@coreui/coreui-plugin-chartjs-custom-tooltips';
import { getStyle, hexToRgba } from '@coreui/coreui/dist/js/coreui-utilities';
import { useDispatch, useSelector } from 'react-redux';
import { SelectorType } from '../../../redux/reducers/types';
import { getDashboardSummaryAction } from '../../../redux/actions/dashboard';
import { indexOf } from 'core-js/core/array';
import { DashboardSummaryResponse } from '../../../libs/models';

type SelectedType = {
  dashboardSummary: any;
};

type Prop = {
  summaryByGame: DashboardSummaryResponse[];
  summaryByAndroid: DashboardSummaryResponse[];
  summaryByIos: DashboardSummaryResponse[];
};

const DashboardChart = (props: Prop) => {
  const { summaryByGame, summaryByAndroid, summaryByIos } = props;

  console.log(
    'byplatform: ',
    summaryByIos.map(x => x.date)
  );

  const funrace = [summaryByGame.filter(x => x.app === 'Android')];

  console.log('summary: ', ...summaryByGame.map(x => x.date));

  return (
    <div className="chart-wrapper">
      {summaryByGame && (
        <div>
          <Row>
            <Col>
              <Line
                data={{
                  labels: [
                    ...summaryByGame
                      .map(x => x.date)
                      .filter((i, index) => index < 15)
                      .map(i => i)
                  ],
                  datasets: [
                    {
                      label: 'Clicks',
                      data: [...summaryByGame.map(x => x.clicks)]
                    }
                  ]
                }}
                height={400}
                width={600}
                options={{
                  maintainAspectRatio: false
                }}
                type="line"
              />
            </Col>
            <Col>
              <Line
                data={{
                  labels: [
                    ...summaryByGame
                      .map(x => x.date)
                      .filter((i, index) => index < 15)
                      .map(i => i)
                  ],
                  datasets: [
                    {
                      label: 'Revenue',
                      data: [...summaryByGame.map(x => x.revenue)]
                    }
                  ]
                }}
                height={400}
                width={600}
                options={{
                  maintainAspectRatio: false
                }}
                type="line"
              />
            </Col>
            <Col>
              <Line
                data={{
                  labels: [
                    ...summaryByGame
                      .map(x => x.date)
                      .filter((i, index) => index < 15)
                      .map(i => i)
                  ],
                  datasets: [
                    {
                      label: 'Impressions',
                      data: [...summaryByGame.map(x => x.impressions)]
                    }
                  ]
                }}
                height={400}
                width={600}
                options={{
                  maintainAspectRatio: false
                }}
                type="line"
              />
            </Col>
          </Row>
          <Row>
          <Col>
            <Line
              data={{
                labels: [
                  ...summaryByGame
                    .map(x => x.date)
                    .filter((i, index) => index < 15)
                    .map(i => i)
                ],
                datasets: [
                  {
                    label: 'Installs',
                    data: [...summaryByGame.map(x => x.installs)]
                  }
                ]
              }}
              height={400}
              width={600}
              options={{
                maintainAspectRatio: false
              }}
              type="line"
            />
          </Col>
          <Col>
            <Line
              data={{
                labels: [
                  ...summaryByGame
                    .map(x => x.date)
                    .filter((i, index) => index < 15)
                    .map(i => i)
                ],
                datasets: [
                  {
                    label: 'Dau',
                    data: [...summaryByGame.map(x => x.dau)]
                  }
                ]
              }}
              height={400}
              width={600}
              options={{
                maintainAspectRatio: false
              }}
              type="line"
            />
          </Col>
          </Row>
        </div>
      )}
    </div>
  );
};
export default DashboardChart;
