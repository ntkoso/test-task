import { connect } from 'react-redux';
import toRenderProps from 'recompose/toRenderProps';

const withGetRepositories = connect(
  // mapStateToProps
);

export default toRenderProps(withGetRepositories);