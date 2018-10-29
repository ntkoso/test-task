import { connect } from 'react-redux';
import toRenderProps from 'recompose/toRenderProps';

const withGetContributors = connect(
  // mapStateToProps
);

export default toRenderProps(withGetContributors);