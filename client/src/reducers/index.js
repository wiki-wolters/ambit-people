import { combineReducers } from 'redux';

const people = (state = [], action) => {
    switch (action.type) {
      case 'SET_PEOPLE':
        return action.people;
      default:
        return state;
    }
}

const filters = (state = {}, action) => {
  switch (action.type) {
    case 'SET_FILTERS':
      return filters;
    default:
      return state;
  }
}

const error = (state = null, action) => {
  switch (action.type) {
    case 'SET_ERROR':
      return action.message;
    default:
      return state;
  }
}

const loading = (state = false, action) => {
  switch (action.type) {
    case 'SET_PEOPLE':
    case 'SET_ERROR':
      return false;
    case 'START_PEOPLE_REQUEST':
      return true;
    default:
      return state;
  }
}

export default combineReducers({
  people,
  filters,
  error,
  loading
})
