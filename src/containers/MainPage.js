import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actions from '../actions/actions';
import LeftColumn from '../components/LeftColumn';
import RightColumn from '../components/RightColumn';

class MainPage extends React.Component {
  constructor(props, context) {
    super(props, context);
  }

  render () {
    return (
      <div id="wrapper">
        <LeftColumn data={this.props.data} />
        <RightColumn data={this.props.data} />
      </div>
    );
  }
}

MainPage.propTypes = {
  actions: PropTypes.object.isRequired,
  data: PropTypes.object.isRequired
};

function mapStateToProps(state) {
  return {
    data: state.mainData
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(actions, dispatch)
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MainPage);
