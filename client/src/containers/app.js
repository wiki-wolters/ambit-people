import App from '../components/app';
import { connect } from 'react-redux';

export default connect(
  state => ({
    error: state.error
  })
)(App);
