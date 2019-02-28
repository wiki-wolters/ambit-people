import List from '../components/list';
import { connect } from 'react-redux';

export default connect(
  state => ({
    people: state.people,
    loading: state.loading
  })
)(List);
