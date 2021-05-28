import  { MyReactTable }  from '@doggoapp/doggo-ts-admin';
import { useRef } from 'react';
const moment = require('moment');



type Prop = {
  data: [];
};

const DashboardTable = (props: Prop) => {
  const { data } = props;

  console.log('data: ', data);

  const submittedTable = useRef(null);

  const columns = [
    {
      Header: 'App',
      accessor: 'app',
      id: 'app'
    },
    {
      Header: 'Clicks',
      accessor: 'clicks',
      id: 'clicks'
    },
    {
      Header: 'Date',
      accessor: ({ date }: any) =>
      date ? moment(date).format('DD/MM/YYYY') : '',
      id: 'date',
    },
    {
      Header: 'Dau',
      accessor: 'dau',
      id: 'dau'
    },
    {
      Header: 'Impressions',
      accessor: 'impressions',
      id: 'impressions'
    },
    {
      Header: 'Installs',
      accessor: 'installs',
      id: 'installs'
    },
    {
      Header: 'Platform',
      accessor: 'platform',
      id: 'platform'
    },
    {
      Header: 'Revenue',
      accessor: 'revenue',
      id: 'revenue'
    },
  ];
    

  return (
    <>
       <MyReactTable
        ref={submittedTable}
        data={data || []}
        columns={columns}
      />
    </>
  );
};
export default DashboardTable;
