import { useState } from 'react';
import { Line } from 'react-chartjs-2';
import {
  Button,
  ButtonGroup,
  Col,
  Row,
  Container
} from 'reactstrap';
import { Box } from '@material-ui/core';
import { DashboardSummaryResponse } from '../../../libs/models';


type Prop = {
  summaryByGame: DashboardSummaryResponse[];
};

const DashboardChart = (props: Prop) => {
  const { summaryByGame } = props;

  const [showClicks, setShowClick] = useState(true);
  const [showRevenue, setShowRevenue] = useState(true);
  const [showImpressions, setShowImpressions] = useState(true);
  const [showInstalls, setShowInstalls] = useState(true);
  const [showDau, setShowDau] = useState(true);

  return (
    <div>
      {summaryByGame && (
        <Box>
          <ButtonGroup>
            <Button
              color={showClicks ? 'success' : 'danger'}
              onClick={() => setShowClick(!showClicks)}
            >
              Clicks
            </Button>
            <Button
              color={showRevenue ? 'success' : 'danger'}
              onClick={() => setShowRevenue(!showRevenue)}
            >
              Revenue
            </Button>
            <Button
              color={showImpressions ? 'success' : 'danger'}
              onClick={() => setShowImpressions(!showImpressions)}
            >
              Impressions
            </Button>
            <Button
              color={showInstalls ? 'success' : 'danger'}
              onClick={() => setShowInstalls(!showInstalls)}
            >
              Installs
            </Button>
            <Button color={showDau ? 'success' : 'danger'} onClick={() => setShowDau(!showDau)}>
              Dau
            </Button>
          </ButtonGroup>
          <Container>
            <Row>
              {showClicks === true ? (
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
              ) : null}
              {showRevenue === true ? (
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
              ) : null}
              {showImpressions === true ? (
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
              ) : null}
              {showInstalls === true ? (
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
              ) : null}
              {showDau === true ? (
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
              ) : null}
            </Row>
          </Container>
        </Box>
      )}
    </div>
  );
};
export default DashboardChart;
