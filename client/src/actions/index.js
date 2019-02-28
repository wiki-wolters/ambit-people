export const setPeople = people => ({
  type: 'SET_PEOPLE',
  people
})

export const startPeopleRequest = () => ({
  type: 'START_PEOPLE_REQUEST'
})

export const setError = message => ({
  type: 'SET_ERROR',
  message
})

export const setFilters = filters => dispatch => {
  dispatch({
    type: 'SET_FILTERS',
    filters
  });

  dispatch(startPeopleRequest());

  /*
   * Build the URL to call
   */
  let url = "/api/v1/people",
    query = [],
    params = {
      gender: filters.gender,
      'age.gte': filters.age && filters.age.gte,
      'age.lt': filters.age && filters.age.lt
    };

  Object.keys(params).forEach(key => {
    params[key] && query.push(encodeURIComponent(key) + '=' + encodeURIComponent(params[key]));
  });

  /*
   * Do the api call
   */
  fetch(url + (query.length ? '?' + query.join('&') : ''))
    .then(response => response.json())
    .then(data => {
      if (!data.success && data.error) {
        dispatch(setError(data.error))
      } else {
        dispatch(setPeople(data.result.people));
      }
    })
    .catch(err => {
      dispatch(setError(err.message));
    })
}
