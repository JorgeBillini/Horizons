const requests = {}

requests.getEventsInRadius = (min_lat, min_long, max_lat, max_long) => {
  return axios.get('http://horizons-api.herokuapp.com/events/', {
    body: {
      'min_lat': min_lat,
      'max_lat': max_lat,
      'min_long': min_long,
      'max_long': max_long,
    }
  });
};

export default requests;