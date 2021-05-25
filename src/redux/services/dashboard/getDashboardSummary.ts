import axios from 'axios';

export default function getCountByStatus() {
  return  axios.get('https://recruitment-mock-data.gjg-ads.io/data')
  .then(res => (res.data));
}

