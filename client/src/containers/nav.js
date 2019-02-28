import Nav from '../components/nav';
import { connect } from 'react-redux';
import { setFilters } from '../actions';

export default connect(
  state => ({
    filters: state.filters
  }),
  { setFilters }
)(Nav);
