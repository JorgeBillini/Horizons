import axios from 'axios';

const requests = {}

//0.00725 is 0.5mi~
//0.0435 is 3 miles
/*
starting coordinates are:
40.745220 LA
-73.921130 LN
*/

requests.getEventsInRadius = (lat, long, radius) => {
  
  const min_lat = lat - radius;
  const min_long = long - radius;
  const max_lat = lat + radius;
  const max_long = long + radius;
  console.log(min_lat, min_long, max_lat, max_long)
  return axios.get('http://horizons-api.herokuapp.com/events/', {
    body: {
      'min_lat': min_lat,
      'max_lat': max_lat,
      'min_long': min_long,
      'max_long': max_long,
    }
  })
  .then(res => {
    console.log('fuck you: ', JSON.stringify(res.data.data))
    return res;
  });
};

export default requests;