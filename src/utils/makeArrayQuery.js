const makeDataToQuery = ({ type, key, data }) => {
  let query = "";

  data.forEach(target => {
    query += `${type}=${target[key]}&`;
  });

  return query;
};

export default makeDataToQuery;
