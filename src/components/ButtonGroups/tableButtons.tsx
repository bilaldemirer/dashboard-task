import { MyReactTable } from '@doggoapp/doggo-ts-admin';
import { Box } from '@material-ui/core';
import { useRef, useState } from 'react';
import { Button, ButtonGroup } from 'reactstrap';




const TableButtons = () => {

  const [showClicks, setShowClick] = useState(true);
  const [showRevenue, setShowRevenue] = useState(true);
  const [showImpressions, setShowImpressions] = useState(true);
  const [showInstalls, setShowInstalls] = useState(true);
  const [showDau, setShowDau] = useState(true);
  const [showDate, setShowDate] = useState(true);
  const [showPlatform, setShowPlatform] = useState(false);
  const [showApp, setShowApp] = useState(false);

  const submittedTable = useRef(null);

  const columns = [
    showDate
      ? {
          Header: 'Date',
          accessor: 'date',
          id: 'date'
        }
      : '',
    showClicks
      ? {
          Header: 'Clicks',
          accessor: 'clicks',
          id: 'clicks'
        }
      : '',
    showDau
      ? {
          Header: 'Dau',
          accessor: 'dau',
          id: 'dau'
        }
      : '',
    showImpressions
      ? {
          Header: 'Impressions',
          accessor: 'impressions',
          id: 'impressions'
        }
      : '',
    showInstalls
      ? {
          Header: 'Installs',
          accessor: 'installs',
          id: 'installs'
        }
      : '',
    showRevenue
      ? {
          Header: 'Revenue',
          accessor: ({ revenue }: any) => (revenue ? revenue.toFixed(2) : ''),
          id: 'revenue'
        }
      : '',
    showApp
      ? {
          Header: 'App',
          accessor: 'app',
          id: 'app'
        }
      : '',
    showPlatform
      ? {
          Header: 'Platform',
          accessor: 'platform',
          id: 'platform'
        }
      : ''
  ];

  return (
    <>
        <ButtonGroup className='m-3'>
        <Button color={showDate ? 'success' : 'danger'} onClick={() => setShowDate(!showDate)}>
            Date
          </Button>
          <Button color={showClicks ? 'success' : 'danger'} onClick={() => setShowClick(!showClicks)}>
            Clicks
          </Button>
          <Button color={showDau ? 'success' : 'danger'} onClick={() => setShowDau(!showDau)}>
            Dau
          </Button>
          <Button color={showImpressions ? 'success' : 'danger'} onClick={() => setShowImpressions(!showImpressions)}>
            Impressions
          </Button>
          <Button color={showInstalls ? 'success' : 'danger'} onClick={() => setShowInstalls(!showInstalls)}>
            Installs
          </Button> 
          <Button color={showRevenue ? 'success' : 'danger'} onClick={() => setShowRevenue(!showRevenue)}>
            Revenue
          </Button>
          <Button color={showApp? 'success' : 'danger'} onClick={() => setShowApp(!showApp)}>
            App
          </Button>
          <Button color={showPlatform ? 'success' : 'danger'} onClick={() => setShowPlatform(!showPlatform)}>
           Platform
          </Button>
          {columns}
        </ButtonGroup>
    </>
  );
};
export default TableButtons;
