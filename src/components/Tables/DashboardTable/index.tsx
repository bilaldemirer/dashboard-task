type Prop = {
  data: [];
};

const DashboardTable = (props: Prop) => {
  const { data } = props;

  console.log('data: ', data);

  return (
    <>
      <div>Table</div>
    </>
  );
};
export default DashboardTable;
